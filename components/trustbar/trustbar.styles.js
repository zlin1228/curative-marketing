import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const TrustBarStyles = styled.section`
  padding: 48px 0;
  position: relative;
  background: ${props => props.backgroundColor || 'transparent'};
  .heading-content {
    max-width: 770px;
    margin: 0 auto;
    margin-bottom: 3rem;
    text-align: ${props => (props.alignment === 'Centered' ? 'center' : 'left')};
    .heading {
      margin-bottom: 16px;
      * {
        color: ${colorMap.black};
        font: ${font('display-sm', 'bold')};
        margin-bottom: 0;
        strong {
          color: ${colorMap.clearBlue[700]};
        }
        ${media.md} {
          font: ${font('display-md', 'bold')};
        }
        ${media.lg} {
          font: ${font('display-lg', 'bold')};
        }
      }
    }
    .subhead {
      color: ${colorMap.black};
      font: ${font('display-xl')};
      button {
        margin-top: 24px;
        display: block;
      }
    }
    ${media.lg} {
      text-align: center;
    }
  }
  .company-item {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    ${media.md} {
      width: 130px;
    }
    ${media.lg} {
      margin-bottom: 0;
      width: 210px;
    }
  }
`;

export default TrustBarStyles;
