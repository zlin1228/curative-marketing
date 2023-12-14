import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import colorMap from 'atoms/colors/colors';

import { BreadcrumbsStyles, MenuItem, Spacer } from 'components/breadcrumbs/breadcrumbs.styles';
import Card from 'components/card/detailcard.component';
import PageContainer from 'components/container/container.component';
import DetailCardDeck from 'components/detail/detailCardDeck.component';
import { DetailCardDeckStyles } from 'components/detail/detailCardDeck.styles';
import { DetailContentStyles } from 'components/detail/detailContent.styles';
import { CategoryLinkWrapper, CategoryTag, CategoryWrapper } from 'components/detail/detailHero.styles';
import { DetailListingHero } from 'components/detail/detailListing.styles';
import DetailPagination from 'components/detail/detailPagination.component';
import DetailSideBar from 'components/detail/detailSidebar.component';
import ComponentLink from 'components/link/link.component';

import OptimizedRichText from 'utils/OptimizedRichText';
import { listingLimit } from 'utils/detailUtils';
import { colorizeText } from 'utils/textFunctions';

import { GetBlogPostsQuery } from 'lib/sdk';

const DetailListing = ({
  component,
  detailData,
  postQuery = GetBlogPostsQuery,
  noAsync = false, // Used to not run apollo useQuery
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const offset = currentPage * listingLimit;
  const { heading, headingPosts, listingPosts, allPosts, categories, popularArticles, pageCount } = component;

  const {
    followUsHeading,
    popularArticlesHeading,
    followUsLinks,
    newsletterForm,
    viewArchivesLink,
    blogType: postType,
    subheading,
    listingHeading,
  } = detailData;

  const sidebarProps = {
    popularArticlesHeading,
    popularArticles,
    newsletterForm,
    followUsHeading,
    followUsLinks,
    viewArchivesLink,
    postType,
  };

  const { data: blogPosts, loading } = useQuery(postQuery, {
    variables: { limit: listingLimit, skip: listingLimit * (currentPage - 1) },
    skip: noAsync || currentPage === 1,
  });

  const posts = blogPosts?.blogPostCollection || allPosts;

  const [mainPost, ...cardPosts] = headingPosts;

  const parentLink = postType?.toLowerCase();
  const isPress = parentLink === 'press';

  return (
    <>
      <PageContainer backgroundColor={isPress ? colorMap.white : colorMap.gray[100]}>
        <Container>
          <DetailListingHero>
            <BreadcrumbsStyles className="breadcrumb-container px-0">
              <MenuItem>
                <ComponentLink href="/">Home</ComponentLink>
                <Spacer>/</Spacer>
              </MenuItem>
              <MenuItem className="breadcrumb last-breadcrumb">
                {parentLink && <ComponentLink href={`/${parentLink}`}>{postType}</ComponentLink>}
              </MenuItem>
            </BreadcrumbsStyles>
            {heading && (
              <Row>
                <Col>
                  <h1 className="listing-heading">{colorizeText(heading)}</h1>
                </Col>
              </Row>
            )}
            {subheading && (
              <Row>
                <Col>{OptimizedRichText(subheading)}</Col>
              </Row>
            )}
            <Row className="align-items-center mb-5">
              <CategoryWrapper>
                {categories?.map(
                  (category, index) =>
                    parentLink && (
                      <ComponentLink href={`/${parentLink}/${category.fields.slug}`} key={category.sys.id}>
                        <CategoryLinkWrapper index={index}>
                          <CategoryTag index={index}>{category.fields.title}</CategoryTag>
                        </CategoryLinkWrapper>
                      </ComponentLink>
                    ),
                )}
              </CategoryWrapper>
            </Row>
            <Row>
              <Col sm={12} lg={isPress ? 8 : 12}>
                <DetailCardDeckStyles isPress={isPress}>
                  <Card
                    className="feature-card d-none d-md-flex mb-5"
                    cards={[mainPost]}
                    variant="featureCard"
                    type={postType}
                  />
                  {!!cardPosts?.length && (
                    <Card
                      className="d-none d-md-flex"
                      cards={cardPosts}
                      variant="swiper"
                      noExcerpt={true}
                      type={postType}
                    />
                  )}
                  <Card className="d-md-none" cards={headingPosts} variant="swiper" noExcerpt={true} type={postType} />
                </DetailCardDeckStyles>
              </Col>
              {isPress && <DetailSideBar sm={12} lg={4} className="mt-5 mt-lg-0" newsletterForm={newsletterForm} />}
            </Row>
          </DetailListingHero>
        </Container>
      </PageContainer>
      <PageContainer id="listing-section" backgroundColor={colorMap.white}>
        <Container>
          <DetailContentStyles>
            <Row>
              <Col sm={12} lg={isPress ? 12 : 8} className="mb-5 d-flex flex-column">
                <Card
                  className="mb-3"
                  variant="paginated"
                  type={postType}
                  cards={posts?.items || listingPosts.slice(offset - listingLimit, offset)}
                  heading={listingHeading}
                  totalPosts={allPosts?.total || listingPosts.length}
                  followLinksHeading={isPress && 'Follow Us:'}
                  followLinks={isPress && followUsLinks}
                  isPress={isPress}
                  loading={loading}
                />
                <DetailPagination
                  currentPage={currentPage}
                  pageCount={pageCount}
                  totalPosts={allPosts?.total}
                  setCurrentPage={setCurrentPage}
                />
              </Col>
              {!isPress && <DetailSideBar sm={12} lg={3} className="offset-lg-1 mt-5 mt-lg-0" {...sidebarProps} />}
            </Row>
          </DetailContentStyles>
        </Container>
      </PageContainer>
      {!!popularArticles.length && (
        <DetailCardDeck
          heading={`More From Our ${postType}`}
          relatedPosts={popularArticles}
          type={postType}
          headingClass="signal-orange text-sm"
          className="d-none d-lg-flex"
        />
      )}
    </>
  );
};

export default DetailListing;
