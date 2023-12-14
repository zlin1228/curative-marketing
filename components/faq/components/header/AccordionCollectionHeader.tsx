import useTranslation from 'next-translate/useTranslation';
import { forwardRef } from 'react';

import colorMap from 'atoms/colors/colors';

import Breadcrumbs from 'components/breadcrumbs/breadcrumbs';
import PageContainer from 'components/container/container.component';
import type { SectionAccentProps } from 'components/container/container.styles';
import CategoryMap from 'components/faq/components/categoryMap/CategoryMap';
import type { CategoryMapProps } from 'components/faq/components/categoryMap/CategoryMap';
import {
  BadgeContainer,
  Eyebrow,
  Heading,
  HeadingWrapper,
} from 'components/faq/components/header/accordionCollectionHeader.styles';

interface AccordionCollectionHeaderProps extends CategoryMapProps {
  includeBreadcrumbs?: boolean;
  heading: string;
  cornerAccent: SectionAccentProps;
}

const AccordionCollectionHeader = forwardRef<HTMLDivElement, AccordionCollectionHeaderProps>(
  ({ includeBreadcrumbs, heading, categories, activeCategory, setActiveCategory, cornerAccent }, ref) => {
    const { t } = useTranslation('common');
    const activeCategoryData = categories[activeCategory];

    return (
      <PageContainer
        ref={ref}
        id="accordion-header"
        backgroundColor={colorMap.offWhite[50]}
        cornerAccent={cornerAccent}
      >
        <HeadingWrapper>
          {includeBreadcrumbs && <Breadcrumbs generateCrumbs marginBottom="0px" />}
          <Eyebrow>{`${t('faq')}${activeCategoryData ? `: ${activeCategoryData.fields.heading}` : ''}`}</Eyebrow>
          <Heading>{heading}</Heading>
          <BadgeContainer>
            <CategoryMap
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </BadgeContainer>
        </HeadingWrapper>
      </PageContainer>
    );
  },
);

export default AccordionCollectionHeader;
