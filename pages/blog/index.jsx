import { useRouter } from 'next/router';
import React from 'react';
import { SSRProvider } from 'react-bootstrap';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import DetailListing from 'components/detail/detailListing.component';
import Footer from 'components/footer/footer.component';
import Header from 'components/header/header.component';

import setNoIndex from 'utils/addNoIndex';
import client from 'utils/client';
import { generateProps } from 'utils/componentGenerator';
import { getArticleSchema, listingLimit } from 'utils/detailUtils';
import getCanonicalLink from 'utils/getCanonicalLink';
import getLocale from 'utils/getLocale';
import getRandomInt from 'utils/getRandomInt';

import { initializeApollo } from 'lib/graphClient';
import { GetBlogPostsQuery } from 'lib/sdk';

const Post = ({ detailData, seo, title, featuredImage, publishDate, detailListing, listingProps }) => {
  const { locale } = useRouter();
  const language = getLocale(locale);
  const { header, footer } = detailData;
  const headerProps = generateProps(header);
  const footerProps = generateProps(footer);
  const schema = getArticleSchema({
    title,
    publishDate,
    featuredImage,
    language,
    base: 'blog',
  });

  return (
    <SSRProvider>
      <Layout>
        <SEO
          title={seo?.fields?.title}
          description={seo?.fields?.description}
          keywords={seo?.fields?.keywords || ['Curative']}
          canonical={getCanonicalLink(null, 'blog', seo?.fields?.canonical)}
          image={seo?.fields?.openGraphImage?.fields?.file?.url}
          noIndex={seo?.fields?.no_index || null}
          noFollow={seo?.fields?.no_follow || null}
          schema={schema}
        />
        <Header {...headerProps} key={header.fields.internalName} component={header.fields} />
        <DetailListing
          {...generateProps(detailListing)}
          key={detailListing.fields.internalName}
          component={{ ...detailListing.fields, ...listingProps }}
          detailData={detailData}
          postQuery={GetBlogPostsQuery}
        />
        <Footer {...footerProps} key={footer.fields.internalName} component={footer.fields} />
      </Layout>
    </SSRProvider>
  );
};

export const getServerSideProps = async ({ locale, req }) => {
  const apolloClient = initializeApollo(locale);

  const { data: blogPosts } = await apolloClient.query({
    query: GetBlogPostsQuery,
    variables: { limit: listingLimit },
  });

  const detailDataQuery = await client.getEntries({
    content_type: 'templateBlog',
    include: 10,
    'fields.internalName': 'Blog - Main Data',
    limit: 1,
    locale,
  });

  setNoIndex(req?.headers?.host, detailDataQuery?.items[0]?.fields?.seo?.fields);

  const relatedArticlesQuery = await client.getEntries({
    content_type: 'blogPost',
    include: 10,
    limit: 3,
    locale,
    'fields.featuredBlog': false,
    'fields.category.sys.id[nin]': '1TcilDkUBmL6lDVVglKDVN',
    skip: getRandomInt(listingLimit, listingLimit * 3),
    order: '-fields.publishDate',
  });

  const detailCategoryQuery = await client.getEntries({
    content_type: 'taxonomyBlogCategory',
    order: 'fields.title',
    limit: 10,
  });

  const detailPostHeadingQuery = await client.getEntries({
    content_type: 'blogPost',
    locale,
    'fields.featuredBlog': true,
    order: '-fields.publishDate',
  });

  const listingProps = {
    headingPosts: detailPostHeadingQuery?.items,
    allPosts: blogPosts?.blogPostCollection,
    categories: detailCategoryQuery?.items,
    popularArticles: relatedArticlesQuery?.items,
  };

  return {
    props: {
      detailData: detailDataQuery?.items[0].fields,
      seo: detailDataQuery?.items[0].fields?.seo,
      title: 'Curative Blog',
      publishDate: detailDataQuery?.items[0].fields?.listingComponent.sys.createdAt,
      detailListing: detailDataQuery?.items[0].fields?.listingComponent,
      listingProps,
    },
  };
};

export default Post;
