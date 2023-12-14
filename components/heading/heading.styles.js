import styled from 'styled-components';

import { motion } from 'styles/motion';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const HeadingSubHead = styled.div`
  max-width: ${({ theme }) => (theme === 'Full Width' ? '1170px' : '770px')};
  margin: 0 auto;
  margin-bottom: 32px;
  text-align: ${({ alignment }) => alignment?.toLowerCase()};
  color: ${({ darkMode }) => (darkMode ? colorMap.white : colorMap.black)};

  p {
    font: ${font('text-lg')};
  }
`;

export const HeadingStyles = styled.div`
  position: relative;
  ${motion.standard}
  text-align: center;
  z-index: 1;

  ${media.lg} {
    display: block;
    margin: 0;
    min-height: initial;
  }

  .kicker-icon {
    align-self: ${({ kickerAlignment: alignment }) => {
      switch (alignment?.toLowerCase()) {
        case 'left':
          return 'start';
        case 'right':
          return 'end';
        default:
          return 'center';
      }
    }};
  }
  .kicker {
    color: ${({ darkMode }) => (darkMode ? colorMap.white : colorMap.signalOrange[800])};
    font: ${font('display-xs', 'bold')};
    margin-bottom: 24px;
    max-width: ${({ theme }) => (theme === 'Full Width' ? '1170px' : '770px')};
    width: 100%;
    text-align: ${({ kickerAlignment: alignment }) => alignment?.toLowerCase()};
  }

  .heading {
    color: ${({ darkMode }) => (darkMode ? colorMap.white : colorMap.black)};
    max-width: ${({ theme }) => (theme === 'Full Width' ? '1170px' : '770px')};
    width: 100%;
    margin: 0 auto;
    strong {
      color: ${colorMap.clearBlue[700]};
    }
    text-align: ${({ headingAlignment: alignment }) => alignment?.toLowerCase()};
    margin-bottom: 24px;
    font: ${font('display-sm')};

    ${media.md} {
      font: ${font('display-md')};
    }

    ${media.lg} {
      font: ${font('display-lg')};
    }
  }

  .heading-featured-image {
    margin-bottom: 48px;
  }

  .heading-cta-container {
    display: flex;
    width: 100%;
    justify-content: ${({ buttonAlignment: alignment }) => alignment?.toLowerCase()};
    align-items: center;
    flex-direction: column;
    gap: 16px;

    ${media.lg} {
      flex-direction: row;
    }
    .button {
      width: 100%;
      ${media.sm} {
        width: fit-content;
      }
    }
  }

  .button-wrapper {
    justify-content: ${({ buttonAlignment: alignment }) => alignment?.toLowerCase()};
  }

  .ul-list {
    list-style-type: none;
    text-align: left;

    ${media.lg} {
      columns: 2;
      -webkit-columns: 2;
      -moz-columns: 2;
    }

    li {
      position: relative;
      padding-left: 24px;
      margin-bottom: 32px;
      font: ${font('text-lg')};
    }

    li::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      margin: 0.34rem 0 0;
      width: 16px;
      height: 16px;
      background: ${colorMap.skyBlue[500]};
    }
  }
`;
