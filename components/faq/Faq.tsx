import { useIntersectionObserver } from '@react-hookz/web';
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import { useRef, useState } from 'react';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';

import FloatingMenu from 'molecules/floatingMenu/FloatingMenu';

import Accordion from 'components/accordion/Accordion';
import PageContainer from 'components/container/container.component';
import AccordionCollectionHeader from 'components/faq/components/header/AccordionCollectionHeader';
import StickyCategories from 'components/faq/components/stickyCategories/StickyCategories';
import getListingCategories from 'components/faq/components/utils/getListingProps';
import { AccordionsWrapper, FaqWrapper, TableOfContents, ToCHeading, ToCItem } from 'components/faq/faq.styles';
import getFaqMeta from 'components/faq/getFaqMeta';

import useHeaderHeight from 'utils/hooks/useHeaderHeight';
import { stringToKebabCase } from 'utils/textFunctions';

const FAQ = ({ heading, categories, cornerAccent, includeBreadcrumbs, includeFaqSchema }) => {
  const { t } = useTranslation('common');
  const accordionHeroRef = useRef();
  const stickyBadgeRef = useRef<HTMLDivElement>();
  const isTablet = useMediaQuery(media.lg);
  const headerHeight = useHeaderHeight();
  const intersection = useIntersectionObserver(accordionHeroRef, {
    rootMargin: `-${headerHeight + 36}px`,
  });

  const faqSchema = includeFaqSchema && categories && getFaqMeta(categories);

  const stickyBadgeRect = stickyBadgeRef?.current?.getBoundingClientRect();
  const scrollHeight = headerHeight + (stickyBadgeRect?.height || 0) + 24;

  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const isListing = activeCategory === null;
  const activeCategoryData = categories[activeCategory || 0];
  const [activeSubCategory, setActiveSubCategory] = useState(activeCategoryData?.fields?.accordions[0].sys?.id || 0);

  const activeCategoryMap = isListing
    ? getListingCategories(categories)
    : activeCategoryData?.fields?.accordions.map(({ sys, fields }) => ({
        id: sys.id,
        label: fields.heading,
        link: `#${stringToKebabCase(fields.heading)}`,
        fields,
      }));

  const Wrapper = ({ children }) => (isListing ? <>{children}</> : <FaqWrapper>{children}</FaqWrapper>);

  return (
    <>
      {includeFaqSchema && faqSchema && (
        <Head>
          {Object.keys(faqSchema).length && (
            <script id="frequently-asked-questions" type="application/ld+json">
              {JSON.stringify(faqSchema)}
            </script>
          )}
        </Head>
      )}
      <AccordionCollectionHeader
        ref={accordionHeroRef}
        includeBreadcrumbs={includeBreadcrumbs}
        heading={heading}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        cornerAccent={cornerAccent}
      />
      <StickyCategories
        ref={stickyBadgeRef}
        isIntersecting={intersection?.isIntersecting}
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <PageContainer id="accordions" backgroundColor={colorMap.clearBlue[100]} scrollOffset={headerHeight + 35}>
        <Wrapper>
          {!isListing && isTablet && (
            <TableOfContents top={scrollHeight}>
              <ToCHeading>{t('tableOfContents')}</ToCHeading>
              {activeCategoryMap.map(({ id, link, label }) => (
                <ToCItem key={id} href={link} active={activeSubCategory === id}>
                  {label}
                </ToCItem>
              ))}
            </TableOfContents>
          )}
          <AccordionsWrapper>
            {activeCategoryMap.map(({ id, fields }, ind) => (
              <Accordion
                key={id}
                id={id}
                isListing={isListing}
                index={ind}
                setActiveCategory={setActiveCategory}
                setActiveSubCategory={setActiveSubCategory}
                top={scrollHeight}
                {...fields}
              />
            ))}
          </AccordionsWrapper>
        </Wrapper>
      </PageContainer>
      {!isTablet && <FloatingMenu items={activeCategoryMap} />}
    </>
  );
};

export default FAQ;
