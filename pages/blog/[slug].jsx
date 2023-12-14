import { useRouter } from 'next/router';
import React from 'react';
import { SSRProvider } from 'react-bootstrap';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import DetailCardDeck from 'components/detail/detailCardDeck.component';
import DetailCategory from 'components/detail/detailCategory.component';
import DetailContent from 'components/detail/detailContent.component';
import DetailHero from 'components/detail/detailHero.component';
import Footer from 'components/footer/footer.component';
import Header from 'components/header/header.component';

import setNoIndex from 'utils/addNoIndex';
import client from 'utils/client';
import { generateProps } from 'utils/componentGenerator';
import { errorData, getArticleSchema, isCategory, listingLimit } from 'utils/detailUtils';
import getCanonicalLink from 'utils/getCanonicalLink';
import getLocale from 'utils/getLocale';
import getRandomInt from 'utils/getRandomInt';

const Post = ({
  variant,
  detailData,
  related,
  seo,
  internalName,
  slug,
  title,
  category,
  featuredImage,
  author,
  publishDate,
  excerpt,
  body,
  categoryProps,
}) => {
  const { locale } = useRouter();
  const language = getLocale(locale);
  const { header, footer } = detailData;
  const headerProps = generateProps(header);
  const footerProps = generateProps(footer);

  const schema = getArticleSchema({
    title,
    excerpt,
    author,
    publishDate,
    featuredImage,
    slug,
    language,
    base: 'blog',
  });

  const generatePage = variant => {
    switch (variant) {
      case 'Category':
        return <DetailCategory detailData={detailData} component={{ ...categoryProps }} />;
      case 'Post':
        return (
          <>
            <DetailHero
              key={`hero-${internalName}`}
              slug={slug}
              title={title}
              category={category}
              featuredImage={featuredImage}
              type={detailData?.blogType || 'Blog'}
            />
            <DetailContent
              key={`content-${internalName}`}
              title={title}
              author={author}
              body={body}
              publishDate={publishDate}
              popularArticles={related}
              detailData={detailData}
            />
            {!!related.length && (
              <DetailCardDeck
                key={`cards-${internalName}`}
                heading="Related [%Posts%]"
                type={detailData?.blogType || 'Blog'}
                relatedPosts={related}
              />
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <SSRProvider>
      <Layout>
        <SEO
          title={seo?.fields?.title}
          description={seo?.fields?.description}
          keywords={seo?.fields?.keywords || ['Curative']}
          canonical={getCanonicalLink(slug, 'blog', seo?.fields?.canonical)}
          image={seo?.fields?.openGraphImage?.fields?.file?.url}
          noIndex={seo?.fields?.no_index || null}
          noFollow={seo?.fields?.no_follow || null}
          schema={schema}
        />
        <Header {...headerProps} key={header.fields.internalName} component={header.fields} />
        {generatePage(variant)}
        <Footer {...footerProps} key={footer.fields.internalName} component={footer.fields} />
      </Layout>
    </SSRProvider>
  );
};

export const getServerSideProps = async ({ params, locale, req }) => {
  const { slug } = params;
  const detailDataQuery = await client.getEntries({
    content_type: 'templateBlog',
    include: 10,
    'fields.internalName': 'Blog - Main Data',
    limit: 1,
    locale,
  });

  setNoIndex(req?.headers?.host, detailDataQuery?.items[0]?.fields?.seo?.fields);

  const detailCategoryQuery = await client.getEntries({
    content_type: 'taxonomyBlogCategory',
    order: 'fields.title',
  });

  const categoryMap = detailCategoryQuery?.items?.map(category => category?.fields?.slug);

  const detailCategoryData = async () => {
    const res = await client.getEntries({
      content_type: 'taxonomyBlogCategory',
      'fields.slug': slug,
      include: 10,
      locale,
    });

    setNoIndex(req?.headers?.host, res?.items[0]?.fields?.seo?.fields);

    const detailPostQuery = await client.getEntries({
      content_type: 'blogPost',
      locale,
      links_to_entry: res?.items?.[0]?.sys?.id,
      order: '-fields.publishDate',
      include: 10,
    });

    const categoryProps = {
      listingPosts: detailPostQuery?.items,
      category: res?.items[0],
    };

    return {
      props: {
        variant: 'Category',
        detailData: detailDataQuery?.items[0].fields,
        seo: res?.items[0].fields?.seo,
        slug,
        title: res?.items[0].fields?.title,
        publishDate: res?.items[0].sys.createdAt,
        categoryProps,
      },
    };
  };

  const detailPostData = async () => {
    const res = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 10,
      locale,
    });

    if (!res.items[0]?.fields) {
      return await errorData('blog');
    }

    const relatedArticlesQuery = await client.getEntries({
      content_type: 'blogPost',
      include: 10,
      limit: 3,
      locale,
      'fields.slug[ne]': slug,
      'fields.category.sys.id[nin]': '1TcilDkUBmL6lDVVglKDVN',
      skip: getRandomInt(listingLimit * 3),
      order: '-fields.publishDate',
    });

    setNoIndex(req?.headers?.host, res?.items[0]?.fields?.seo?.fields);

    return {
      props: {
        variant: 'Post',
        detailData: detailDataQuery?.items[0].fields,
        related: relatedArticlesQuery?.items,
        ...(res?.items?.[0]?.fields || null),
      },
    };
  };

  if (isCategory(params.slug, categoryMap)) {
    // category page: [parent]/[category]
    return await detailCategoryData();
  } else {
    // post: [parent]/[title]
    return await detailPostData();
  }
};

export default Post;
