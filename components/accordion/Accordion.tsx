import { useIntersectionObserver } from '@react-hookz/web';
import { useEffect, useRef } from 'react';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import { AccordionGroup, AccordionWrapper, ContentWrapper, Heading } from 'components/accordion/accordion.styles';
import type { AccordionItemProps } from 'components/accordion/accordionItem/AccordionItem';
import AccordionItem from 'components/accordion/accordionItem/AccordionItem';
import Button from 'components/button/button.component';

import OptimizedRichText from 'utils/OptimizedRichText';
import scrollElementIntoView from 'utils/scrollElementIntoView';
import { stringToKebabCase } from 'utils/textFunctions';

import type { ComponentAccordion, Sys } from 'lib/types';

import type { Dispatch, FC, SetStateAction } from 'react';

interface AccordionProps {
  id: Sys['id'];
  top: number;
  accordionItems: AccordionItemProps[];
  heading?: ComponentAccordion['heading'];
  subHeading?: ComponentAccordion['subheading'];
  isListing?: boolean;
  index: number;
  activeSubCategory: string;
  setActiveCategory: Dispatch<SetStateAction<number>>;
  setActiveSubCategory: Dispatch<SetStateAction<string>>;
}

const Accordion: FC<AccordionProps> = ({
  id,
  accordionItems,
  heading,
  subHeading,
  isListing = true,
  index,
  setActiveCategory,
  setActiveSubCategory,
  ...props
}) => {
  const accordionRef = useRef(null);
  const isInView = useIntersectionObserver(accordionRef, {
    rootMargin: '-200px 0px -70% 0px',
  });

  const isDesktop = useMediaQuery(media.xl);
  const items = isListing ? accordionItems.slice(0, 10) : accordionItems;

  useEffect(() => {
    isInView && isInView?.isIntersecting && setActiveSubCategory(id);
  }, [isInView]);

  return (
    <AccordionWrapper isListing={isListing} id={stringToKebabCase(heading)} {...props}>
      <ContentWrapper>
        <Heading ref={accordionRef} isListing={isListing}>
          {heading}
        </Heading>
        {isListing && subHeading && <span>{OptimizedRichText(subHeading)}</span>}
        {isListing && (
          <Button
            onClick={() => {
              setActiveCategory(index);
              scrollElementIntoView('accordions');
            }}
            component={{
              color: 'orange',
              style: 'text-only',
              label: `View all ${heading} FAQ's`,
              size: isDesktop ? 'lg' : 'sm',
              additionalStyles: {
                textAlign: 'left',
              },
            }}
          />
        )}
      </ContentWrapper>
      <AccordionGroup type="single" collapsible>
        {items && items.length > 0 && items.map(item => <AccordionItem key={item.sys.id} {...item} />)}
      </AccordionGroup>
    </AccordionWrapper>
  );
};

export default Accordion;
