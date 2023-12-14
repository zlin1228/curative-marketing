import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';

export const SectionWrapper = styled.section`
  background-color: ${({ backgroundColor }) => backgroundColor};
  scroll-margin-top: 131px;
  ${media.sm} {
    scroll-margin-top: 171px;
  }
  ${media.lg} {
    scroll-margin-top: 267px;
  }
`;

export default SectionWrapper;
