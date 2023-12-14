import { forwardRef, useRef } from 'react';

import colorMap from 'atoms/colors/colors';

import PageContainer from 'components/container/container.component';
import type { CategoryMapProps } from 'components/faq/components/categoryMap/CategoryMap';
import CategoryMap from 'components/faq/components/categoryMap/CategoryMap';
import {
  ScrollWrapper,
  StickyBadgeContainer,
} from 'components/faq/components/stickyCategories/stickyCategories.styles';

import useHeaderHeight from 'utils/hooks/useHeaderHeight';
import useScrolledX from 'utils/hooks/useScrolledX';

interface StickyCategoriesProps extends CategoryMapProps {
  isIntersecting?: boolean;
}

const StickyCategories = forwardRef<HTMLDivElement, StickyCategoriesProps>(
  ({ categories, activeCategory, setActiveCategory, isIntersecting }, ref) => {
    const scrollRef = useRef<HTMLDivElement>();
    const scrolled = useScrolledX(scrollRef);
    const headerHeight = useHeaderHeight();

    return (
      <PageContainer
        ref={ref}
        backgroundColor={colorMap.offWhite[50]}
        paddingTop="16px"
        paddingBottom="16px"
        style={{
          position: 'fixed',
          top: `${isIntersecting ? '0' : headerHeight}px`,
          opacity: `${isIntersecting ? 0 : 1}`,
          zIndex: 10,
          transition: 'top 250ms cubic-bezier(0.87, 0, 0.13, 1), opacity 250ms cubic-bezier(0.87, 0, 0.13, 1)',
        }}
      >
        <ScrollWrapper scroll={scrolled}>
          <StickyBadgeContainer ref={scrollRef}>
            <CategoryMap
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </StickyBadgeContainer>
        </ScrollWrapper>
      </PageContainer>
    );
  },
);

export default StickyCategories;
