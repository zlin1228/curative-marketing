import styled from 'styled-components';

import curativeIcon from 'assets/images/curative_symbol_redorange.svg';

import { breakpoints, media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font, fontWeight } from 'atoms/typography/fonts.ts';

import { isLight } from 'utils/colorUtils';

export const SwitchbackStyles = styled.section`
  .colorizeText {
    color: ${colorMap.clearBlue[700]};
  }
  position: relative;
  background: ${({ color: { left, right } }) => `linear-gradient( 180deg,
    ${left} 0%,
    ${left} 50%,
    ${right} 50%,
    ${right} 100%)`};

  ${media.lg} {
    background: ${({ color: { left, right } }) => `linear-gradient( 90deg,
      ${left} 0%,
      ${left} 50%,
      ${right} 50%,
      ${right} 100%)`};
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center stretch;
    align-content: center;
    row-gap: 40px;
    margin: auto;
    padding: 40px 12px;
    max-width: 540px;

    .triangle {
      ${({ featuredText }) => featuredText && 'display: none;'};
    }

    ${media.md} {
      row-gap: 80px;
      max-width: 770px;
      grid-template-columns: repeat(auto-fit, minmax(calc(${breakpoints.md} / 2), 1fr));

      > div {
        max-width: 770px;
      }
    }

    ${media.lg} {
      max-width: 1196px;
      padding: ${({ showBreadcrumbs }) => (showBreadcrumbs ? '24px 24px 96px' : '96px 24px')};
      row-gap: 144px;
      > div {
        max-width: 485px;
      }

      div:first-child {
        justify-self: start;
      }

      div:nth-child(2) {
        justify-self: end;
      }

      .triangle {
        ${({ featuredText }) => featuredText && 'display: initial;'}
      }
    }
  }

  .content-side {
    display: flex;
    flex-flow: column nowrap;
    gap: 0;
    z-index: 2;
    width: 100%;

    &.location-list {
      gap: 8px;

      .more-text {
        margin-top: 1rem;
        font: ${font('display-sm', 'semiBold')};
        color: ${colorMap.clearBlue[900]};
      }
      button {
        margin-top: 24px;
        font-size: 2rem;
        line-height: 2.2rem;
        padding: 0;
        border: none;
        transition: 0.3s;
        text-align: left;
        &:hover {
          background: transparent;
          color: ${colorMap.signalOrange[400]};
        }
        ${media.md} {
          font-size: 3.75rem;
          line-height: 4.125rem;
          text-align: center;
        }
      }

      ${media.max('lg')} {
        .triangle {
          top: 50%;
          transform: translateX(-50%);
          right: 0;
          display: none;
        }
      }
    }
  }

  .kicker {
    width: 100%;
    margin-bottom: 24px;
    font: ${font('display-xs', 'bold')};
    color: ${({ theme }) => (isLight(theme) ? colorMap.signalOrange[700] : colorMap.white)};
  }

  .heading {
    margin-bottom: 24px;
    * {
      color: ${({ theme }) => (isLight(theme) ? colorMap.clearBlue[700] : colorMap.white)};
      font-weight: ${fontWeight.bold};
      margin-bottom: 0;
      strong {
        color: ${colorMap.black};
      }
      code {
        display: block;
      }
    }
  }

  .subhead {
    p {
      font: ${font('text-lg')};
      ${media.md} {
        font: ${font('text-xl')};
      }
      ${media.max('xs')} {
        font: ${font('display-xs')};
      }
    }
    color: ${({ theme }) => (isLight(theme) ? colorMap.black : colorMap.white)};
    button {
      margin-top: 12px;
      margin-right: 0;
      ${media.md} {
        margin-right: 24px;
      }
    }
  }

  .footer-text {
    color: ${({ theme }) => (isLight(theme) ? colorMap.black : colorMap.white)};
    font: ${font('text-sm')};
  }

  .featured-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 615px;
    width: 100%;
    height: 100%;
    font: ${font('display-sm')};

    ${media.md} {
      font: ${font('display-lg')};
    }

    > span {
      width: 100% !important;
    }

    .featured-text {
      max-width: 400px;
      text-align: left;
      font: ${font('display-sm', 'bold')};
      margin-top: 60px;
      ${media.md} {
        margin-top: 10px;
        margin-bottom: 30px;
        font: ${font('display-lg', 'bold')};
      }

      ${media.lg} {
        margin-top: 0;
        font: ${font('display-lg')};
        text-align: right;
      }

      &:after {
        content: '';
        position: absolute;
        background: url(${curativeIcon.src});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        width: 60px;
        height: 60px;
        left: 0;
        bottom: 50%;
        transform: translateY(50%);
        z-index: 1;
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
    }
  }

  .accent-corner ~ .wrapper > :first-child {
    padding-top: 10%;
  }
`;

export default SwitchbackStyles;
