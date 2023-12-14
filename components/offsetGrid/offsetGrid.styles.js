import styled, { css } from 'styled-components';

import { shadows } from 'styles/shadows';

import curativeIcon from 'assets/images/curative_symbol_redorange.svg';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font, fontWeight } from 'atoms/typography/fonts.ts';

import { getHeightRatio, getOffsetGridGradient, getOffsetGridTextColor } from 'components/offsetGrid/offsetGrid.utils';

import { isLight } from 'utils/colorUtils';

export const OffsetGridStyles = styled.section`
  padding: 48px 0;
  position: relative;
  background: ${props => getOffsetGridGradient({ ...props })};
  ${({ corner, wholeHeight, contentHeight }) =>
    corner &&
    css`
      &:after {
        content: '';
        position: absolute;
        background: url(${curativeIcon.src});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 60px;
        height: 60px;
        right: 0;
        bottom: ${getHeightRatio({
          wholeHeight,
          contentHeight,
          reversed: true,
        })}%;
        transform: translateY(50%);
        z-index: 2;

        ${media.md} {
          width: 115px;
          height: 115px;
        }

        ${media.lg} {
          width: 135px;
          height: 220px;
          bottom: 25px;
        }

        @media screen and (min-width: 1480px) {
          width: 220px;
          height: 220px;
          bottom: 50px;
        }
      }
    `}
  ${media.lg} {
    background: ${({ color: { left, right }, isFull, ...props }) =>
      isFull
        ? getOffsetGridGradient({
            color: { left, right },
            heightBuffer: 96,
            ...props,
          })
        : `linear-gradient( 90deg,
    ${left} 0%,
    ${left} 50%,
    ${right} 50%,
    ${right} 100%)`};
    padding: 96px 0;
    .grid-container {
      padding-top: ${({ isFull }) => isFull && '48px'};
    }
  }

  .content-section {
    display: flex;
    flex-direction: column-reverse;
    ${media.lg} {
      flex-direction: column;
    }
  }

  .heading-content {
    max-width: 100%;
    ${({ reversed, isFull }) =>
      reversed && !isFull
        ? css`
            margin-left: auto;
          `
        : css`
            margin-right: auto;
          `}
    padding-bottom: ${({ numberedList }) => (numberedList ? '48px' : '0')};

    .kicker {
      font: ${font('display-xs', 'bold')};
      margin-bottom: 16px;
      color: ${({ theme }) => (isLight(theme) ? colorMap.signalOrange[700] : colorMap.white)};
    }
    .heading {
      margin-bottom: 16px;
      * {
        color: ${({ theme }) => (isLight(theme) ? colorMap.black : colorMap.white)};
        font: ${font('display-md', 'bold')};
        margin-bottom: 0;
        strong {
          color: ${colorMap.clearBlue[700]};
        }
        ${media.md} {
          font: ${font('display-lg', 'bold')};
        }
        ${media.lg} {
          font: ${font('display-xl', 'bold')};
        }
      }
    }
    .subhead {
      color: ${({ theme }) => (isLight(theme) ? colorMap.black : colorMap.white)};
      font: ${font('display-xl')};
      button {
        margin-top: 24px;
        display: block;
      }
    }

    ${media.lg} {
      align-items: center;
      text-align: ${({ isFull }) => isFull && 'center'};
      padding-bottom: 0;
      max-width: ${({ isFull }) => (isFull ? '100%' : '470px')};
      .button-wrapper {
        justify-content: ${({ isFull }) => isFull && 'center'};
      }
    }
  }
  .featured-img {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 3rem;
    ${media.lg} {
      max-width: 470px;
      margin-left: 0;
      margin-top: 3rem;
      margin-bottom: 0;
    }
  }

  .parallax-container {
    width: 100%;
    align-self: center;
    margin: 0 0 72px;
    ${media.lg} {
      max-width: ${({ isFull }) => (isFull ? '' : '470px')} !important;
      align-self: ${({ reversed, isFull }) => (reversed && !isFull ? 'end' : 'start')};
      margin: 0 0 10%;
    }
  }

  .ctas-section {
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-start;
    gap: 26px 46px;
    max-width: 100%;
    flex-wrap: wrap;
    button {
      width: 100%;
      position: relative;
      text-align: left;
      justify-content: space-between;
      ${media.sm} {
        width: auto;
      }
    }
  }
`;
export const GridItem = styled.ul`
  max-width: 100%;
  margin: 0;
  padding-left: ${({ numberedList }) => (numberedList ? '50px' : '0')};
  ${({ reversed }) =>
    reversed
      ? css`
          margin-right: auto;
        `
      : css`
          margin-left: auto;
        `}
  padding-top: 48px;
  ${media.lg} {
    padding-top: 0;
    max-width: ${({ numberedList }) => (numberedList ? '470px' : '100%')};
  }
  li {
    list-style-type: ${({ numberedList }) => (numberedList ? 'decimal' : 'none')};
    margin-bottom: ${({ numberedList }) => (numberedList ? '48px' : '32px')};
    padding: ${({ numberedList }) => (numberedList ? '0' : '16px')};
    border: ${({ numberedList }) => (numberedList ? '0' : `1px solid ${colorMap.gray[200]}`)};
    ${media.md} {
      margin-bottom: ${({ numberedList }) => (numberedList ? '64px' : '32px')};
    }
    &:last-child {
      margin-bottom: 0;
    }
    &::marker {
      display: inline-block;
      vertical-align: middle;
      font-size: 24px;
      color: ${({ theme }) => (isLight(theme) ? colorMap.black : colorMap.white)};
      font-weight: ${fontWeight.bold};
    }
  }
  .grid-item {
    display: ${({ numberedList }) => (numberedList ? 'flex' : 'block')};
    flex-flow: row nowrap;
    gap: 24px;
    align-items: center;
    padding-left: ${({ numberedList }) => (numberedList ? '16px' : '0')};
    ${media.xs} {
      display: flex;
    }
  }
  .grid-img {
    max-width: 48px;
    max-height: 48px;
    display: inline-block;
    vertical-align: middle;
    img {
      width: 48px;
      height: 48px;
    }
  }
  .grid-content {
    vertical-align: middle;
    display: flex;
    margin-top: 0.5rem;
    flex-direction: column;
    gap: 0.5rem;
    ${media.xs} {
      display: inline-block;
    }
    .item-heading {
      * {
        font: ${font('display-xs', 'semiBold')};
        color: ${({ theme, backgroundColor }) => getOffsetGridTextColor(theme, backgroundColor)};
        margin: 0;
      }
      strong {
        color: ${({ theme, backgroundColor }) =>
          getOffsetGridTextColor(theme, backgroundColor, colorMap.clearBlue[700])};
      }
      margin-bottom: ${({ numberedList }) => (numberedList ? '8px' : '4px')};
    }
    .item-subhead {
      * {
        font: ${({ numberedList }) => (numberedList ? font('text-sm', 'light') : font('text-md', 'medium'))};
        margin: 0;
        color: ${({ theme, backgroundColor }) => getOffsetGridTextColor(theme, backgroundColor)};
        svg {
          stroke: ${({ theme, backgroundColor }) => getOffsetGridTextColor(theme, backgroundColor)};
        }
      }
    }
  }
`;

export const OffsetGridItem = styled.li`
  background: ${({ backgroundColor }) => backgroundColor || 'red'};
  position: relative;

  .grid-tooltip-wrapper {
    position: absolute;
    right: 16px;
    top: 50%;
  }
`;

export const OffsetGridCardDeck = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 24px;
  padding-top: 48px;

  ${media.sm} {
    gap: 30px;
  }
  ${media.lg} {
    padding-top: 0;
  }
`;

export const OffsetGridCardStyles = styled.div`
  background: ${({ backgroundColor }) => backgroundColor};
  padding: 16px;
  border: 1px solid ${colorMap.gray[200]};
  width: 100%;
  max-width: calc(50% - 12px);

  ${media.sm} {
    max-width: calc(100% / 3 - 20px);
  }

  &:hover {
    ${shadows.card}
  }

  .image-wrapper {
    margin-bottom: 8px;
  }

  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    text-decoration: none;
    gap: 8px;

    .heading {
      text-align: center;
      color: ${({ backgroundColor }) => (isLight(backgroundColor) ? colorMap.black : colorMap.white)};
      * {
        font: ${font('text-lg')};
      }
    }

    .subhead {
      text-align: center;
      color: ${({ backgroundColor }) => (isLight(backgroundColor) ? colorMap.black : colorMap.white)};
      * {
        font: ${font('text-sm')};
      }
    }
  }
`;
