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
import { errorData, getArticleSchema, isCategory } from 'utils/detailUtils';
import getCanonicalLink from 'utils/getCanonicalLink';
import getLocale from 'utils/getLocale';

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
    base: 'press',
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
              type={detailData?.blogType || 'Press'}
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
                type={detailData?.blogType || 'Press'}
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
          canonical={getCanonicalLink(slug, 'press', seo?.fields?.canonical)}
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
    content_type: 'templatePress',
    include: 10,
    'fields.internalName': 'Press - Main Data',
    limit: 1,
    locale,
  });

  setNoIndex(req?.headers?.host, detailDataQuery?.items[0]?.fields?.seo?.fields);

  const detailCategoryQuery = await client.getEntries({
    content_type: 'taxonomyPressCategory',
    order: 'fields.title',
  });

  const categoryMap = detailCategoryQuery?.items?.map(category => category?.fields?.slug);

  const detailCategoryData = async () => {
    const res = await client.getEntries({
      content_type: 'taxonomyPressCategory',
      'fields.slug': slug,
      include: 10,
      locale,
    });

    const isExternalNews = res?.items?.[0]?.fields?.internalName === 'External News Articles';

    setNoIndex(req?.headers?.host, res?.items[0]?.fields?.seo?.fields);

    const detailPostQuery = await client.getEntries({
      content_type: 'templatePressPost',
      locale,
      order: '-fields.publishDate',
      include: 10,
      'fields.externalLink[exists]': isExternalNews,
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
      content_type: 'templatePressPost',
      'fields.slug': slug,
      include: 10,
      locale,
    });

    if (!res.items[0]?.fields || res.items[0]?.fields.externalLink) {
      return await errorData('press');
    }

    const pressReleasesRes = await client.getEntries({
      content_type: 'taxonomyPressCategory',
      'fields.internalName': 'Press Releases',
      limit: 1,
      include: 10,
      locale,
    });

    const externalNewsRes = await client.getEntries({
      content_type: 'taxonomyPressCategory',
      'fields.internalName': 'External News Articles',
      limit: 1,
      include: 10,
      locale,
    });

    const pressCategoryData = pressReleasesRes?.items?.length && pressReleasesRes?.items;
    const externalNewsData = externalNewsRes?.items?.length && externalNewsRes?.items;

    const postCategory =
      detailDataQuery?.items?.length && detailDataQuery?.items[0].fields?.externalLink
        ? externalNewsData
        : pressCategoryData;

    const relatedArticlesQuery = await client.getEntries({
      content_type: 'templatePressPost',
      include: 10,
      limit: 3,
      locale,
      'fields.slug[ne]': slug,
      'fields.category[exists]': true,
      'fields.category.sys.id[nin]': '1TcilDkUBmL6lDVVglKDVN',
      order: '-fields.publishDate',
    });

    setNoIndex(req?.headers?.host, res?.items[0]?.fields?.seo?.fields);

    return {
      props: {
        variant: 'Post',
        detailData: detailDataQuery?.items[0].fields,
        category: postCategory,
        related: relatedArticlesQuery?.items,
        ...(res?.items?.[0]?.fields || null),
      },
    };
  };

  if (isCategory(params.slug, categoryMap)) {
    // category page :[parent]/[category]
    return await detailCategoryData();
  } else {
    // post:[parent]/[title]
    return await detailPostData();
  }
};

export default Post;
