import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import Button from 'components/button/button.component';
import { PricingCardStyles } from 'components/carddeck/carddeck.styles';
import HeadingFragment from 'components/heading/headingFragment.component';

import OptimizedRichText from 'utils/OptimizedRichText';
import { getColor } from 'utils/colorUtils';
import { generateProps } from 'utils/componentGenerator';
import { getSliceLength } from 'utils/detailUtils';
import { colorizeText } from 'utils/textFunctions';

import 'swiper/css';
import 'swiper/css/pagination';

const Card = ({ cards }) => {
  const isDesktop = useMediaQuery(media.lg);
  const isTablet = useMediaQuery(media.sm);

  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="pricing-card-swiper"
      slidesPerView={getSliceLength(isDesktop, isTablet)}
      centeredSlides={!isDesktop}
    >
      {cards.map(({ sys: { id }, fields }) => {
        const { kicker, planName, coPay, cta, subheading, color } = fields;

        return (
          <SwiperSlide
            key={id}
            style={{
              padding: '8px 15px 56px 15px',
            }}
          >
            <PricingCardStyles color={getColor(color)}>
              {planName && <HeadingFragment kicker={kicker} heading={colorizeText(planName)} />}
              {coPay && <div className="copay">{`$${coPay} co-pay*`}</div>}
              {subheading && <div className="subhead">{OptimizedRichText(subheading)}</div>}
              {cta && <Button {...generateProps(cta)} />}
            </PricingCardStyles>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Card;
