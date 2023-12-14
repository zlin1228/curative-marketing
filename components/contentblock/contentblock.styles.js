import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const ContentBlockStyles = styled.section`
  padding: 40px 0;
  background-color: ${props => props.backgroundColor || 'transparent'};

  ${media.md} {
    padding: 56px 0;
  }
  .subhead {
    color: ${colorMap.offWhite[50]};
    font: ${font('text-lg')};
  }
`;

export default ContentBlockStyles;
