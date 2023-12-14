import { Col, Container, Row } from 'react-bootstrap';

import colorMap from 'atoms/colors/colors';

import { BreadcrumbsStyles, MenuItem, Spacer } from 'components/breadcrumbs/breadcrumbs.styles';
import Card from 'components/card/detailcard.component';
import PageContainer from 'components/container/container.component';
import { DetailCardDeckStyles } from 'components/detail/detailCardDeck.styles';
import { DetailCategoryWrapper } from 'components/detail/detailCategory.styles';
import { DetailContentStyles } from 'components/detail/detailContent.styles';
import DetailSideBar from 'components/detail/detailSidebar.component';
import ComponentLink from 'components/link/link.component';

import { colorizeText } from 'utils/textFunctions';

const DetailCategory = ({ component, detailData }) => {
  const { category, listingPosts } = component;
  const { followUsHeading, followUsLinks, newsletterForm, blogType: postType } = detailData;

  const sidebarProps = {
    newsletterForm,
    followUsHeading,
    followUsLinks,
    postType,
  };

  const parentLink = postType?.toLowerCase();
  const isPress = parentLink === 'press';

  return (
    <>
      <DetailCategoryWrapper>
        <PageContainer>
          <Container>
            <BreadcrumbsStyles className="breadcrumb-container px-0">
              <MenuItem>
                <ComponentLink href="/">Home</ComponentLink>
                <Spacer>/</Spacer>
              </MenuItem>
              <MenuItem className="breadcrumb">
                {parentLink && <ComponentLink href={`/${parentLink}`}>{postType}</ComponentLink>}
                <Spacer>/</Spacer>
              </MenuItem>
              <MenuItem key="crumb-category" className="breadcrumb last-breadcrumb">
                <ComponentLink href={`/${parentLink}/${category.fields?.slug}`}>
                  {category?.fields?.title}
                </ComponentLink>
              </MenuItem>
            </BreadcrumbsStyles>
            <Row>
              <Col>
                <h1>{colorizeText(`[%${category?.fields?.title}%]`)}</h1>
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </DetailCategoryWrapper>
      <PageContainer backgroundColor={colorMap.white}>
        <Container>
          <DetailContentStyles>
            <Row className="mb-5">
              <DetailSideBar sm={12} lg={3} className="order-last order-lg-first" {...sidebarProps} />
              <Col sm={12} lg={8} className="d-none d-lg-flex offset-lg-1 flex-column">
                <Card
                  variant="paginated"
                  cards={listingPosts}
                  totalPosts={listingPosts.length}
                  type={postType}
                  isPress={isPress}
                />
              </Col>
              <DetailCardDeckStyles>
                <Card
                  className="d-lg-none order-first order-lg-last offset-lg-1 mb-5"
                  type={postType}
                  cards={listingPosts}
                  variant="swiper"
                  swiperMobileCount={3}
                />
              </DetailCardDeckStyles>
            </Row>
          </DetailContentStyles>
        </Container>
      </PageContainer>
    </>
  );
};

export default DetailCategory;
