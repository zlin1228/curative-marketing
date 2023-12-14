import styled from 'styled-components';

import { motion } from 'styles/motion';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const VideoStyles = styled.section`
  padding: 48px 0;
  position: relative;
  background: ${props => props.backgroundColor};
  .heading-content {
    max-width: 770px;
    margin: 0 auto;
    margin-bottom: 2.5rem;
    text-align: left;
    ${motion.standard};
    ${media.md} {
      text-align: ${props => (props.isFullWidth ? 'center' : 'left')};
      margin-bottom: 3.5rem;
    }
    ${media.lg} {
      margin-left: ${props => (props.reverse ? '32px' : 0)};
    }
    .heading {
      margin-bottom: 24px;
      * {
        color: ${props => (props.isDarkMode ? colorMap.white : colorMap.black)};
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
      color: ${props => (props.isDarkMode ? colorMap.offWhite[50] : colorMap.black)};
      font: ${font('display-xl')};
      button {
        margin-top: 24px;
        display: block;
      }
    }
  }
  iframe {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 16 / 9;
  }
`;

export default VideoStyles;
