import { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import {
  DetailCardGridStyles,
  DetailCardListingStyles,
  DetailCardStyles,
} from 'components/detail/detailCardDeck.styles';
import { CategoryTag, HeroSwiperWrapper } from 'components/detail/detailHero.styles';
import FollowIcons from 'components/followIcons/followIcons.component';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';

import { getSliceLength } from 'utils/detailUtils';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DetailCard = ({ card, noExcerpt = false, link, isFeature, isScrollAnimated = false, ...props }) => {
  const [isMarquee, setIsMarquee] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  const cardRef = useRef();
  const tagsRef = useRef();

  const details = 'fields' in card ? card?.fields : card;
  const { category, categoryCollection, title, excerpt, location, slug, featuredImage, publishDate, postType } =
    details || {};
  const categories = categoryCollection ? categoryCollection.items : category;

  const date = new Date(publishDate);
  const eventDate = card?.fields?.eventDate && new Date(card?.fields?.eventDate);
  const eventTimeData = eventDate?.toLocaleString().split(' ');
  const eventTimeString = eventDate && `${eventTimeData[1].split(':').splice(0, 2).join(':')} ${eventTimeData[2]}`;
  const externalLink = card?.fields?.externalLink || '';
  const isPress = link === 'press';

  console.log(card, 'this is posttype');

  const imageProps =
    isFeature && !isPress
      ? {}
      : {
          height: '320px',
          aspectRatio: '1',
        };

  const StaticCategory = () =>
    postType ? (
      <CategoryTag className="category-tag" index={1}>
        {postType}
      </CategoryTag>
    ) : (
      <></>
    );

  const TagsContainer = () => (
    <div ref={tagsRef} className="category-slider">
      {categories.map((item, index) => (
        <CategoryTag className="category-tag" index={index} key={item.sys.id}>
          {item?.title || item?.fields?.title}
        </CategoryTag>
      ))}
    </div>
  );

  const MarqueeCategory = () =>
    isMarquee ? (
      <Marquee gradient={true} gradientWidth="20px" speed={30}>
        <TagsContainer />
      </Marquee>
    ) : (
      <TagsContainer />
    );

  useEffect(() => {
    const handleResize = () => {
      const cardWidth = cardRef?.current?.offsetWidth || 0;
      const tagsWidth = tagsRef?.current?.offsetWidth || 0;

      setIsMarquee(cardWidth < tagsWidth + 64);
    };

    const onScroll = () => setIsAnimated(window.innerHeight > cardRef.current.getBoundingClientRect().top - 80);

    handleResize();
    isScrollAnimated && cardRef?.current && onScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <DetailCardStyles
      ref={cardRef}
      isPress={isPress && !isFeature}
      isAnimated={isAnimated || !isScrollAnimated}
      {...props}
    >
      <ComponentLink
        href={externalLink || `/${link}/${slug}`}
        target={externalLink ? '_blank' : '_self'}
        className={`card-link${isFeature && !isPress ? ' feature-card' : ''}`}
      >
        {featuredImage && (isFeature || !isPress) && (
          <ComponentImage
            className="image-wrapper"
            src={featuredImage?.url || `https:${featuredImage.fields?.file?.url}`}
            alt={title || 'Detail Card Image'}
            layout="fill"
            objectFit="cover"
            width="100%"
            {...imageProps}
          />
        )}
        <div className="info">
          <div className="category-scroller">{isPress ? <StaticCategory /> : <MarqueeCategory />}</div>
          <div className="related-wrapper">
            <div className="content">
              <h3 className="related-heading">{title}</h3>
              {!noExcerpt && excerpt && <p className="related-subhead">{excerpt}</p>}
            </div>
            <div className="card-info">
              <div className="related-date">
                <span>
                  {date.toLocaleDateString('en-us', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                {eventDate && (
                  <>
                    <div className="red-dot" />
                    <span>{eventTimeString}</span>
                  </>
                )}
              </div>
              {location && <span className="location">{location}</span>}
            </div>
          </div>
        </div>
      </ComponentLink>
    </DetailCardStyles>
  );
};

const Card = ({
  cards,
  noExcerpt = false,
  variant = 'default',
  type = 'blog',
  swiperMobileCount = 1,
  heading,
  totalPosts,
  followLinks,
  followLinksHeading,
  loading,
  ...props
}) => {
  const isDesktop = useMediaQuery(media.lg);
  const isTablet = useMediaQuery(media.md);

  if (!cards) {
    return null;
  }

  const parentLink = type?.toLowerCase();

  switch (variant) {
    case 'paginated':
      return (
        <>
          <DetailCardListingStyles>
            <div className="heading-container">
              {heading && <div className="listing-heading">{heading}</div>}
              <div className="post-count">
                Showing {cards?.length} of {totalPosts} articles
              </div>
            </div>
            {followLinks && <FollowIcons inline={true} heading={followLinksHeading} followLinks={followLinks} />}
          </DetailCardListingStyles>
          <DetailCardGridStyles {...props}>
            {loading
              ? '...loading'
              : cards.map(card => (
                  <DetailCard
                    key={card?.sys?.id}
                    link={parentLink}
                    card={card}
                    isScrollAnimated={parentLink === 'press'}
                  />
                ))}
          </DetailCardGridStyles>
        </>
      );
    case 'swiper':
      return (
        <Row {...props}>
          <HeroSwiperWrapper>
            <Swiper
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="card-swiper"
              style={{
                paddingBottom: '60px',
              }}
            >
              {cards
                .reduce((ret, val, i, ref) => {
                  const sliceLength = getSliceLength(isDesktop, isTablet, {
                    mobile: swiperMobileCount,
                  });

                  if (i % sliceLength === 0) {
                    ret.push(ref.slice(i, i + sliceLength));
                  }

                  return ret;
                }, [])
                .map(cardGroup => (
                  <SwiperSlide
                    key={`Swiper-${cardGroup?.[0]?.fields?.internalName}`}
                    style={{
                      padding: '0px 12px',
                    }}
                  >
                    <DetailCardGridStyles desktopColumns={3}>
                      {cardGroup &&
                        cardGroup.map(card => (
                          <DetailCard
                            key={card?.fields?.internalName}
                            card={card}
                            link={parentLink}
                            noExcerpt={noExcerpt}
                            isScrollAnimated={parentLink === 'press'}
                          />
                        ))}
                    </DetailCardGridStyles>
                  </SwiperSlide>
                ))}
            </Swiper>
          </HeroSwiperWrapper>
        </Row>
      );
    case 'featureCard':
      return (
        <Row {...props}>
          {cards.map(card => (
            <Col key={card?.sys?.id}>
              <DetailCard card={card} link={parentLink} isFeature={true} />
            </Col>
          ))}
        </Row>
      );
    default:
      return (
        <Row {...props}>
          {cards.map(card => (
            <Col key={card?.fields?.internalName} lg={4} md={6} sm={12}>
              <DetailCard card={card} link={parentLink} noExcerpt={noExcerpt} />
            </Col>
          ))}
        </Row>
      );
  }
};

export default Card;
