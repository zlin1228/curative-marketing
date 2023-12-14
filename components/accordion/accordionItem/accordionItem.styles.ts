import { AccordionContent, AccordionTrigger, AccordionItem as RadAccordionItem } from '@radix-ui/react-accordion';
import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts';

import Icon from 'molecules/icon/Icon';

import { slideDown, slideTiming, slideUp } from 'components/linkedList/linkedList.styles';

export const AccordionItem = styled(RadAccordionItem)`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${colorMap.white};
  padding: 16px;
  gap: 0px;
  transition: gap ${slideTiming};

  ${media.sm} {
    padding: 24px;
  }

  &[data-state='open'] {
    gap: 24px;
  }
`;

export const AccordionIcon = styled(Icon)`
  transform: rotate(0deg);
  transition: transform 250ms ease-in-out;
`;

export const ItemHeading = styled(AccordionTrigger)`
  display: flex;
  flex-flow: row nowrap;
  gap: 24px;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  font: ${font('text-xl', 'medium')};
  color: ${colorMap.clearBlue[700]};

  &:focus-visible {
    outline: 2px solid ${colorMap.skyBlue[400]};
    outline-offset: 2px;
  }

  ${media.sm} {
    font: ${font('display-xs', 'medium')};
  }

  &[data-state='open'] ${AccordionIcon} {
    transform: rotate(180deg);
  }
`;

export const Content = styled(AccordionContent)`
  overflow: hidden;

  &[data-state='open'] {
    animation: ${slideDown} ${slideTiming};
  }

  &[data-state='closed'] {
    animation: ${slideUp} ${slideTiming};
  }
`;
