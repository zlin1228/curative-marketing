import styled from 'styled-components';

import light_blue_corner from 'assets/images/light-blue-corner.svg';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const HeroStyles = styled.div.attrs(props => ({
  className: props.background === 'Blue' ? 'w-accent' : '',
}))`
  .breadcrumb-container {
    margin-top: -20px;

    ${media.lg} {
      margin-top: -76px;
    }
  }

  .kicker {
    margin: 0;
    font: ${font('text-lg', 'bold')};
    text-align: left;
    align-self: start;
    color: ${({ background }) => (background === 'Blue' ? colorMap.white : colorMap.signalOrange[800])};

    ${media.md} {
      text-align: center;
      align-self: center;
      font: ${font('text-xl', 'bold')};
    }

    ${media.lg} {
      text-align: center;
      align-self: center;
      font: ${font('display-xs', 'bold')};
    }
  }
  .heading {
    width: 100%;
    max-width: ${({ theme }) => (theme === 'Full Width' ? '1170px' : '770px')};
    text-align: start;
    code {
      display: block;
    }

    strong {
      color: ${({ background }) => (background === 'Blue' ? colorMap.white : colorMap.clearBlue[700])};
    }
    ${media.md} {
      text-align: ${({ alignment }) => (alignment === 'centered' ? 'center' : 'start')};
    }
  }
  h1 {
    max-width: ${({ theme }) => (theme === 'Full Width' ? '1170px' : '770px')};
    margin: auto;
    color: ${({ background }) => (background === 'Blue' ? colorMap.white : colorMap.black)};
    font: ${font('display-sm', 'bold')};
    ${media.md} {
      font: ${font('display-xl', 'bold')};
    }

    ${media.lg} {
      font: ${font('display-xxl', 'bold')};
    }
  }

  h3 {
    font: ${font('display-md', 'semiBold')}; /* Styles in some mockups are off by a few px */
    ${media.max('md')} {
      font: ${font('display-sm')};
    }
  }
  .subhead {
    width: 100%;
    color: ${({ background }) => (background === 'Blue' ? colorMap.white : colorMap.black)};
    font: ${font('text-lg')};
    margin-bottom: 0px;
    max-width: ${({ theme }) => (theme === 'Full Width' ? '1170px' : '770px')};
    ${media.md} {
      margin-bottom: 8px;
      font: ${font('text-xl')};
    }
  }

  .button-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: ${({ alignment }) => (alignment === 'centered' ? 'center' : 'start')};
    gap: 12px 24px;
    width: 100%;
    max-width: ${({ theme }) => (theme === 'Full Width' ? '1170px' : '770px')};
    .button {
      width: 100%;
      ${media.sm} {
        width: fit-content;
      }
    }
  }

  &.w-accent {
    &:after {
      content: '';
      position: absolute;
      background: url(${light_blue_corner.src});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      width: 270px;
      height: 270px;
      right: 0;
      bottom: 0;

      ${media.max('lg')} {
        width: 180px;
        height: 180px;
      }

      ${media.max('md')} {
        width: 84px;
        height: 84px;
      }
    }
  }

  .col,
  .col-12 {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 24px;
  }

  button {
    z-index: 2;
  }
  .parallax-container {
    ${media.max('lg')} {
      margin: ${({ position }) => (position?.isDefault ? '10% 0' : '0 0 10%')};
    }
    margin: ${({ position }) => !position?.isDefault && '0 0 min(10%, 72px)'};
  }
`;
export const HeroBackgroundImage = styled.section`
  width: 100%;
  height: 200px;
  background-image: ${({ image }) => (image?.fields?.file?.url ? `url(https:${image?.fields?.file?.url})` : '')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${media.md} {
    height: 520px;
  }

  ${media.lg} {
    height: 840px;
  }
`;
