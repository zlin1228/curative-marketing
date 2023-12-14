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
import { getArticleSchema, listingLimit, queryLimit } from 'utils/detailUtils';
import getCanonicalLink from 'utils/getCanonicalLink';
import getLocale from 'utils/getLocale';
import getRandomInt from 'utils/getRandomInt';

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
    base: 'events',
  });

  return (
    <SSRProvider>
      <Layout>
        <SEO
          title={seo?.fields?.title}
          description={seo?.fields?.description}
          keywords={seo?.fields?.keywords || ['Curative']}
          canonical={getCanonicalLink(null, 'events', seo?.fields?.canonical)}
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
          noAsync={true}
        />
        <Footer {...footerProps} key={footer.fields.internalName} component={footer.fields} />
      </Layout>
    </SSRProvider>
  );
};

export const getServerSideProps = async ({ locale, req }) => {
  const detailDataQuery = await client.getEntries({
    content_type: 'templateEvent',
    include: 10,
    'fields.internalName': 'Event - Main Data',
    limit: 1,
    locale,
  });

  if (!detailDataQuery?.items?.length) {
    return {
      notFound: true,
    };
  }

  setNoIndex(req?.headers?.host, detailDataQuery?.items[0]?.fields?.seo?.fields);

  const relatedArticlesQuery = await client.getEntries({
    content_type: 'templateEventsDetail',
    include: 10,
    limit: 3,
    locale,
    'fields.featuredEvent': false,
    skip: getRandomInt(listingLimit),
    order: '-fields.publishDate',
  });

  const detailCategoryQuery = await client.getEntries({
    content_type: 'taxonomyEventCategory',
    order: 'fields.title',
  });

  const posts = [];
  let paginated = true;
  let skip = 0;

  while (paginated) {
    const res = await client.getEntries({
      content_type: 'templateEventsDetail',
      include: 10,
      skip,
      limit: queryLimit,
      locale,
      order: '-fields.publishDate',
      'fields.featuredEvent': false,
    });
    posts.push(...(res?.items || []));

    if (res?.items?.length >= queryLimit) {
      skip += limit;
    } else {
      paginated = false;
    }
  }

  const length = posts.length;
  const pageCount = parseInt(Math.ceil(length / listingLimit));

  const detailPostHeadingQuery = await client.getEntries({
    content_type: 'templateEventsDetail',
    locale,
    'fields.featuredEvent': true,
    order: '-fields.publishDate',
  });

  const listingProps = {
    headingPosts: detailPostHeadingQuery?.items,
    listingPosts: posts,
    categories: detailCategoryQuery?.items,
    popularArticles: relatedArticlesQuery?.items,
    pageCount,
  };

  return {
    props: {
      detailData: detailDataQuery?.items[0].fields,
      seo: detailDataQuery?.items[0].fields?.seo,
      title: 'Curative Webinars & Events',
      publishDate: detailDataQuery?.items[0].fields?.listingComponent.sys.createdAt,
      detailListing: detailDataQuery?.items[0].fields?.listingComponent,
      listingProps,
    },
  };
};

export default Post;
