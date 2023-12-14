import { Accordion } from '@radix-ui/react-accordion';
import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts';

type IsListingProps = {
  isListing: boolean;
};

export const AccordionWrapper = styled.div<IsListingProps & { top: number }>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  scroll-margin-top: ${({ top }) => top}px;

  ${media.sm} {
    gap: 40px 30px;
  }

  ${media.xl} {
    flex-direction: ${({ isListing }) => (isListing ? 'row' : 'column')};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;

  ${media.sm} {
    gap: 16px;
  }
`;

export const Heading = styled.h3<IsListingProps>`
  color: ${colorMap.clearBlue[700]};
  font: ${font('display-xs', 'bold')};

  ${media.sm} {
    font: ${font('display-md', 'bold')};
  }

  ${media.xl} {
    ${({ isListing }) => (isListing ? `font: ${font('display-lg', 'bold')};` : undefined)}
  }
`;

export const AccordionGroup = styled(Accordion)`
  display: flex;
  flex-flow: column nowrap;
  gap: 24px;
  flex-shrink: 0;
  width: 100%;

  ${media.xl} {
    max-width: 700px;
  }
`;
