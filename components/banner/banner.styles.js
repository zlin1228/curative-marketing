import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const BannerStyles = styled.section`
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
          font: ${font('display-md')};
        }
        ${media.lg} {
          font: ${font('display-lg')};
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
  .featured-item {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    .featured-heading {
      font: ${font('text-lg', 'bold')};
      text-align: center;
      color: ${colorMap.black};
      margin-top: 0.5rem;
      margin-bottom: 0;
    }
  }
`;

export default BannerStyles;
