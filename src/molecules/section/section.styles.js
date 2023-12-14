import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';

const sectionInlinePadding = {
  default: '24px',
  sm: '24px',
  desktop: '0px',
};

export const Section = styled.section`
  padding: 32px ${sectionInlinePadding.default};
  background: ${({ backgroundColor }) => backgroundColor || colorMap.white};
  contain: content;

  ${media.sm} {
    padding: 72px ${sectionInlinePadding.sm};
  }

  ${media.xl} {
    padding: 96px ${sectionInlinePadding.desktop};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  gap: ${({ gap }) => gap || '16px'};
  margin: auto;

  ${media.sm} {
    max-width: 818px;
  }

  ${media.xl} {
    max-width: 1170px;
  }
`;
