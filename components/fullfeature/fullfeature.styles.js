import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

import { getIconStyling } from 'components/fullfeature/fullfeature.utils';

export const FullFeatureStyles = styled.section`
  padding: 40px 0;
  background: ${colorMap.white};

  ${media.md} {
    padding: 72px 0;
  }
  ${media.lg} {
    padding: 96px 0;
  }
  .heading {
    text-align: ${({ headingAlignment }) => headingAlignment};
    width: 100%;
    margin: 0 auto;
    margin-bottom: 16px;
    ${media.md} {
      margin-bottom: 56px;
    }
    * {
      color: ${colorMap.black};
      font: ${font('display-sm', 'bold')};
      margin-bottom: 0;
      strong {
        color: ${colorMap.clearBlue[700]};
      }
      ${media.md} {
        font: ${font('display-lg', 'bold')};
      }
    }
  }
  .subhead-content {
    width: 100%;
    margin-bottom: 40px;
    align-items: center;
    justify-content: ${({ subheadingAlignment }) => subheadingAlignment};
    ${media.md} {
      margin-bottom: 56px;
    }
    .subhead {
      color: ${colorMap.black};
      font: ${font('text-xl')};
      padding-right: 0;
      margin-right: 0;
      margin-bottom: 8px;
      border-right: none;
    }

    .with-icon {
      ${media.md} {
        ${({ subheadingAlignment }) => getIconStyling(subheadingAlignment)}
      }
    }
  }

  .content {
    color: ${colorMap.black};
    font: ${font('text-lg')};
    text-align: ${({ contentAlignment }) => contentAlignment};
    ul {
      text-align: left;
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
      flex-direction: column;
      display: block;
      align-items: baseline;
      align-content: space-around;
      flex-wrap: wrap;
      height: 100%;
      ${media.md} {
        display: flex;
        flex-flow: row wrap;
      }
      li {
        display: block;
        width: 100%;
        margin-bottom: 32px;
        padding-left: 32px;
        position: relative;
        text-align: left;
        ${media.md} {
          display: flex;
          width: 50%;
        }
        p {
          margin: 0;
          padding-right: 0;
          ${media.md} {
            padding-right: 20px;
          }
        }
        &:before {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          top: 6px;
          left: 0;
          background: ${colorMap.skyBlue[500]};
        }
      }
    }
    button {
      margin-top: 40px;
    }
  }
  .footnote {
    margin-top: 40px;
    * {
      color: ${colorMap.gray[500]};
      font: ${({ footnoteFontSize }) => font(`text-${footnoteFontSize || 'xs'}`)};
    }
    a {
      color: ${colorMap.clearBlue[700]};
    }
    p {
      margin-bottom: 0;
    }
    ${media.md} {
      margin-top: 56px;
    }
  }
`;

export default FullFeatureStyles;
