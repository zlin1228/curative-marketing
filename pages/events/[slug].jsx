import { useRouter } from 'next/router';
import React from 'react';
import { SSRProvider } from 'react-bootstrap';

import colorMap from 'atoms/colors/colors';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { BreadcrumbsStyles, MenuItem, Spacer } from 'components/breadcrumbs/breadcrumbs.styles';
import DetailCardDeck from 'components/detail/detailCardDeck.component';
import DetailCategory from 'components/detail/detailCategory.component';
import Footer from 'components/footer/footer.component';
import Header from 'components/header/header.component';
import ComponentLink from 'components/link/link.component';
import Section from 'components/section/section.component';

import setNoIndex from 'utils/addNoIndex';
import client from 'utils/client';
import componentGenerator, { generateProps } from 'utils/componentGenerator';
import { errorData, getArticleSchema, isCategory } from 'utils/detailUtils';
import getCanonicalLink from 'utils/getCanonicalLink';
import getLocale from 'utils/getLocale';
import { stringToKebabCase } from 'utils/textFunctions';

const Detail = ({
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
  categoryProps,
  content,
  conversionPanel,
}) => {
  const { locale } = useRouter();
  const language = getLocale(locale);
  const { header, footer } = detailData;
  const headerProps = generateProps(header);
  const footerProps = generateProps(footer);

  const parentLink = detailData?.blogType?.toLowerCase();

  const schema = getArticleSchema({
    title,
    excerpt,
    author,
    publishDate,
    featuredImage,
    slug,
    language,
    base: 'events',
  });

  const generatePage = variant => {
    switch (variant) {
      case 'Category':
        return <DetailCategory detailData={detailData} component={{ ...categoryProps }} />;
      case 'Post':
        return (
          <>
            <Section backgroundColor={colorMap.clearBlue[700]}>
              <BreadcrumbsStyles
                className="breadcrumb-container"
                marginBottom="0px"
                paddingTop="32px"
                backgroundColor={colorMap.clearBlue[700]}
              >
                <MenuItem>
                  <ComponentLink href="/">Home</ComponentLink>
                  <Spacer>/</Spacer>
                </MenuItem>
                <MenuItem key="crumb-blog" className="breadcrumb">
                  {parentLink && <ComponentLink href={`/${parentLink}`}>{detailData?.blogType}</ComponentLink>}
                  {category?.[0] && <Spacer>/</Spacer>}
                </MenuItem>
                {category?.[0] && (
                  <MenuItem key="crumb-category" className="breadcrumb last-breadcrumb">
                    {parentLink && <ComponentLink href={`/${parentLink}/${slug}`}>{title}</ComponentLink>}
                  </MenuItem>
                )}
              </BreadcrumbsStyles>
            </Section>

            {componentGenerator(content, slug, seo)}
            {!!related.length && (
              <DetailCardDeck
                key={`cards-${internalName}`}
                heading="Related [%Posts%]"
                type={detailData?.blogType || 'Events'}
                relatedPosts={related}
              />
            )}
            {conversionPanel && (
              <Section id={stringToKebabCase(conversionPanel.fields.heading)}>
                {componentGenerator([conversionPanel], slug, seo)}
              </Section>
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
    content_type: 'templateEvent',
    include: 10,
    'fields.internalName': 'Event - Main Data',
    limit: 1,
    locale,
  });

  setNoIndex(req?.headers?.host, detailDataQuery?.items[0]?.fields?.seo?.fields);

  const relatedArticlesQuery = await client.getEntries({
    content_type: 'templateEventsDetail',
    include: 10,
    limit: 3,
    locale,
    'fields.slug[ne]': slug,
    'fields.featuredEvent': false,
    order: '-fields.publishDate',
  });

  const detailCategoryQuery = await client.getEntries({
    content_type: 'taxonomyEventCategory',
    order: 'fields.title',
  });

  const categoryMap = detailCategoryQuery?.items?.map(category => category?.fields?.slug);

  const detailCategoryData = async () => {
    const res = await client.getEntries({
      content_type: 'taxonomyEventCategory',
      'fields.slug': slug,
      include: 10,
      locale,
    });

    setNoIndex(req?.headers?.host, res?.items[0]?.fields?.seo?.fields);

    const detailPostQuery = await client.getEntries({
      content_type: 'templateEventsDetail',
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
      content_type: 'templateEventsDetail',
      'fields.slug': slug,
      include: 10,
      locale,
    });

    if (!res.items[0]?.fields) {
      return await errorData('events');
    }

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

export default Detail;
