import { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import { MiniPricingCard } from 'components/card/miniPricingCard.component';
import HeadingFragment from 'components/heading/headingFragment.component';
import { StickyCard, TableRow } from 'components/pricingTable/pricingTable.styles';
import InlineTooltip from 'components/tooltip/tooltip.component';

import OptimizedRichText from 'utils/OptimizedRichText';
import { useTopOffset } from 'utils/getTopOffset';

import 'swiper/css';
import 'swiper/css/pagination';

const MobileTable = ({ pricingPlans, labels }) => {
  const [active, setActive] = useState(0);

  const isTablet = useMediaQuery(media.md);
  const top = useTopOffset();

  useEffect(() => {
    const slides = document.querySelectorAll('.pricing-table-card-swiper .swiper-slide');
    if (slides && slides.length > 0) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].setAttribute('aria-hidden', 'true');
      }
      slides[active].setAttribute('aria-hidden', 'false');
    }
  }, [active]);

  return (
    <Swiper
      modules={[Pagination]}
      className="pricing-table-card-swiper"
      pagination={{
        clickable: true,
        el: '.swiper-pagination',
        type: 'bullets',
      }}
      slidesPerView={isTablet ? 2 : 1}
      centeredSlides={true}
      onActiveIndexChange={e => setActive(e.activeIndex)}
    >
      {pricingPlans.map(({ sys: { id }, fields: { features, ...fields } }) => (
        <SwiperSlide key={id}>
          <StickyCard top={isTablet ? top : 0} className="card-wrapper sticky">
            <MiniPricingCard {...fields} />
            <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal" />
          </StickyCard>
          {labels.map(({ sys: { id }, fields: { tooltip, ...fields } }, idx) => (
            <TableRow key={id} index={idx}>
              <div className="row-label">
                <div className="label-wrapper">
                  <HeadingFragment {...fields} />
                  {tooltip?.fields?.body && <InlineTooltip content={tooltip?.fields?.body} />}
                </div>
              </div>
              {features[idx] && (
                <div key={id} className="plan-field">
                  {OptimizedRichText(features[idx]?.fields.subheading)}
                </div>
              )}
            </TableRow>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MobileTable;
