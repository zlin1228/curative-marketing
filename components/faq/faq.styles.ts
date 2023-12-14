import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts';

import generateTransitions from 'utils/generateTransitions';

export const FaqWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: 40px;
  width: 100%;

  ${media.sm} {
    gap: 40px 30px;
  }

  ${media.md} {
    flex-direction: row;
  }
`;

export const AccordionsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 80px;
`;

export const TableOfContents = styled.div<{ top: number }>`
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
  height: fit-content;

  ${media.xl} {
    position: sticky;
    top: ${({ top }) => top || 0}px;
  }
`;

export const ToCHeading = styled.span`
  font: ${font('display-xs', 'bold')};

  color: ${colorMap.clearBlue[700]};
  margin-bottom: 8px;
`;

type Active = {
  active?: boolean;
};

export const ToCItem = styled.a<Active>`
  font: ${font('text-md', 'medium')};
  color: ${colorMap.accentGray[700]};
  text-decoration: none;
  border-left: solid ${colorMap.clearBlue[700]};
  border-left-width: ${({ active }) => (active ? '4px' : '0px')};
  padding-left: ${({ active }) => (active ? '8px' : '0px')};
  transition: ${generateTransitions(['border-left-width', 'padding-left'], 250)};
`;
