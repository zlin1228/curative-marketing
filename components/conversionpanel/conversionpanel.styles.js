import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

import { isLight } from 'utils/colorUtils';
import getBackgroundImage from 'utils/getBackgroundImage';

export const ConversionPanelStyles = styled.section`
  padding: 40px 0;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-image: ${({ mobileImage, backgroundImg }) => getBackgroundImage(mobileImage, backgroundImg)};
    background-repeat: no-repeat;
    background-position: top left;
    background-size: cover;
    overflow: hidden;
    ${media.xs} {
      background-image: ${({ tabletImage, backgroundImg }) => getBackgroundImage(tabletImage, backgroundImg)};
    }
    ${media.md} {
      background-image: ${({ tabletImage, backgroundImg }) => getBackgroundImage(tabletImage, backgroundImg)};
    }
    ${media.lg} {
      background-image: ${({ backgroundImg }) => getBackgroundImage(backgroundImg)};
    }
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-image: ${({ mobileImage, backgroundImg }) => getBackgroundImage(mobileImage, backgroundImg)};
    background-repeat: no-repeat;
    background-position: top right;
    background-size: cover;
    overflow: hidden;
    ${media.xs} {
      background-image: ${({ tabletImage, backgroundImg }) => getBackgroundImage(tabletImage, backgroundImg)};
    }
    ${media.md} {
      background-image: ${({ tabletImage, backgroundImg }) => getBackgroundImage(tabletImage, backgroundImg)};
    }
    ${media.lg} {
      background-image: ${({ backgroundImg }) => getBackgroundImage(backgroundImg)};
    }
  }

  ${media.md} {
    padding: 72px 0;
    min-height: 439px;
  }
  ${media.lg} {
    padding: 150px 0;
  }
  .heading {
    position: relative;
    z-index: 1;
    max-width: 770px;
    margin: 0 auto;
    * {
      color: ${({ backgroundColor }) => (isLight(backgroundColor) ? colorMap.black : colorMap.offWhite[50])};
      font: ${font('display-sm')};
      strong {
        color: ${({ backgroundColor }) => (isLight(backgroundColor) ? colorMap.clearBlue[700] : colorMap.offWhite[50])};
      }
      margin-bottom: 24px;
      text-align: left;
      ${media.md} {
        font: ${font('display-lg')};
        text-align: center;
      }
      ${media.lg} {
        font: ${font('display-lg')};
        text-align: center;
      }
    }
  }
  .subhead {
    position: relative;
    z-index: 1;
    color: ${({ backgroundColor }) => (isLight(backgroundColor) ? colorMap.black : colorMap.offWhite[50])};
    font: ${font('text-md')};
    text-align: left;
    max-width: ${props => props.subheadMaxWidth};
    margin: 0 auto;
    ${media.md} {
      text-align: center;
    }
    button {
      margin: 8px 0;
      ${media.md} {
        margin: 24px 12px;
      }
    }
  }
  .button-wrapper {
    justify-content: center;
  }
`;

export default ConversionPanelStyles;
