import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const DropdownStyles = styled.div`
  a {
    text-decoration: none;
  }
  .nav-section {
    margin: 0;
    padding: 16px;
    display: flex;
    cursor: pointer;
    min-width: 100%;
    ${media.max('xl')} {
      padding-left: 2rem;
    }
    .nav-item {
      h6 {
        font: ${font('text-md', 'semiBold')};
        color: ${colorMap.black};
        margin-bottom: 0;
      }
    }
    &:hover {
      background: ${colorMap.clearBlue[50]};
      h6 {
        color: ${colorMap.clearBlue[700]};
      }
    }
  }
`;

export default DropdownStyles;
