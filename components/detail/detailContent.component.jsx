import { useRouter } from 'next/router';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactDOMServer from 'react-dom/server';

import authorIcon from 'assets/images/author.svg';
import dateIcon from 'assets/images/date.svg';
import readTimeIcon from 'assets/images/read_time.svg';
import copyIcon from 'assets/images/share/copy.svg';
import facebookIcon from 'assets/images/share/facebook.svg';
import linkedinIcon from 'assets/images/share/linkedin.svg';
import shareIcon from 'assets/images/share/share.svg';
import twitterIcon from 'assets/images/share/twitter.svg';

import colorMap from 'atoms/colors/colors';

import PageContainer from 'components/container/container.component';
import { DetailContainer, DetailContentStyles, ShareContainer } from 'components/detail/detailContent.styles';
import DetailSideBar from 'components/detail/detailSidebar.component';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';

import OptimizedRichText from 'utils/OptimizedRichText';
import { copyTextToClipboard } from 'utils/copyToClipboard';
import { readingTime } from 'utils/readingTime';

const DetailContent = ({ title, author, publishDate, body, popularArticles, detailData }) => {
  const {
    readTimeHeading,
    writtenByHeading,
    publishedHeading,
    shareHeading,
    popularArticlesHeading,
    viewArchivesLink,
    followUsHeading,
    followUsLinks,
    newsletterForm,
    blogType: postType,
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

  const renderDetailHeading = (icon, heading, subhead) => (
    <DetailContainer key={`detail-container-${heading}`}>
      <Row className="detail-top-container">
        <Col>
          <span className="detail-heading">
            {icon && icon?.src && <ComponentImage src={icon.src} alt={heading} width={13} height={13} />}
            {heading}
          </span>
        </Col>
      </Row>
      <Row className="detail-bottom-container">
        <p className="detail-subhead">{subhead}</p>
      </Row>
    </DetailContainer>
  );

  const ShareLink = ({ icon, link, isClipboardLink = false }) => {
    const shareContainer = (
      <ShareContainer>
        {icon && icon?.src && <ComponentImage src={icon.src} alt="share" width={16} height={16} />}
      </ShareContainer>
    );

    return isClipboardLink ? (
      <div
        onClick={e => {
          e.stopPropagation();
          copyTextToClipboard(link);
        }}
      >
        {shareContainer}
      </div>
    ) : (
      <ComponentLink href={link} target="_blank">
        {shareContainer}
      </ComponentLink>
    );
  };

  const { asPath } = useRouter();
  const curPage = `https://curative.com${asPath}`;
  const date = new Date(publishDate);
  const readTime =
    body &&
    readingTime(
      OptimizedRichText(body)
        .map(item => ReactDOMServer.renderToString(item))
        .join(),
    );

  const shareLinks = [
    {
      icon: copyIcon,
      link: curPage,
      isClipboardLink: true,
    },
    {
      icon: twitterIcon,
      link: `https://twitter.com/intent/tweet?text=${encodeURIComponent(curPage)}`,
    },
    {
      icon: facebookIcon,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(curPage)}`,
    },
    {
      icon: linkedinIcon,
      link: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        curPage,
      )}&title=${title}&summary=&source=`,
    },
  ];

  return (
    <PageContainer backgroundColor={colorMap.gray[100]}>
      <DetailContentStyles>
        <Container>
          <Row className="mb-5">
            <Col sm={12} lg={8}>
              <Row>
                {renderDetailHeading(readTimeIcon, readTimeHeading, `${readTime} Minute${readTime > 1 ? 's' : ''}`)}
                {renderDetailHeading(
                  authorIcon,
                  writtenByHeading,
                  `${author?.fields?.firstName} ${author?.fields?.lastName}`,
                )}
                {renderDetailHeading(
                  dateIcon,
                  publishedHeading,
                  date.toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  }),
                )}
              </Row>
            </Col>
            <Col sm={12} lg={3} className="offset-lg-1">
              <div className="share-wrapper d-flex align-items-center">
                <ComponentImage src={shareIcon.src} alt="share" width={20} height={20} />
                <span className="share-heading">{shareHeading}</span>
                {shareLinks && shareLinks.map(share => <ShareLink key={`share-item-${share.link}`} {...share} />)}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={8}>
              <div className="detail-content-container">{OptimizedRichText(body)}</div>
            </Col>
            <DetailSideBar sm={12} lg={3} className="offset-lg-1" {...sidebarProps} />
          </Row>
        </Container>
      </DetailContentStyles>
    </PageContainer>
  );
};

export default DetailContent;
