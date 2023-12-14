import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';

interface ContainerProps {
  bg: string;
  footer: boolean;
  paddingTop: string;
  paddingBottom: string;
  scrollOffset: number;
}

export const ContainerStyle = styled.section<ContainerProps>`
  position: relative;
  background: ${props => props.bg || 'transparent'};
  width: 100%;
  border-top: ${props => (props.footer ? `1px solid ${colorMap.clearBlue[400]}` : 'none')};
  .colorizeText {
    color: ${colorMap.clearBlue[700]};
  }

  > img {
    position: absolute;
    left: 0;
    bottom: 0;
    top: unset;
    max-width: 175px;

    ${media.lg} {
      max-width: 215px;
    }

    ${media.lg} {
      max-width: 270px;
    }
  }

  .container-wrapper {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 40px 12px;
    max-width: 770px;
    padding-top: ${({ paddingTop }) => paddingTop};
    padding-bottom: ${({ paddingBottom }) => paddingBottom};

    ${media.lg} {
      max-width: 1196px;
      padding: 96px 24px;
      padding-top: ${({ paddingTop }) => paddingTop};
      padding-bottom: ${({ paddingBottom }) => paddingBottom};
    }
  }

  ${({ scrollOffset }) =>
    scrollOffset
      ? `scroll-margin-top: ${scrollOffset}px`
      : `scroll-margin-top: 73px;
      ${media.sm} {
        scroll-margin-top: 98px;
      }
      ${media.lg} {
        scroll-margin-top: 138px;
      }`}
`;

const sectionAccentVariations = {
  color: {
    lightBlue: colorMap.skyBlue[500],
    blue: colorMap.clearBlue[700],
    cream: colorMap.offWhite[50],
    orange: colorMap.signalOrange[400],
  },
  placement: {
    topLeft: {
      top: 0,
      left: 0,
    },
    bottomLeft: {
      bottom: 0,
      left: 0,
    },
    topRight: {
      top: 0,
      right: 0,
    },
    bottomRight: {
      bottom: 0,
      right: 0,
    },
  },
} as const;

export interface SectionAccentProps {
  color?: keyof typeof sectionAccentVariations['color'];
  placement?: keyof typeof sectionAccentVariations['placement'];
}

export const SectionAccent = styled.div<SectionAccentProps>`
  position: absolute;
  display: none;
  width: 100px;
  height: 100px;
  border: 50px solid transparent;
  pointer-events: none;
  ${({ placement, color }) => {
    const place = sectionAccentVariations.placement[placement || 'topLeft'];
    const borders = Object.keys(place);
    const borderStyles = borders.reduce(
      (acc, cur) => ({
        ...acc,
        [`border-${cur}-color`]: sectionAccentVariations.color[color] || colorMap.signalOrange[400],
      }),
      {},
    );

    return { ...place, ...borderStyles };
  }}

  ${media.lg} {
    display: block;
  }

  ${media.xl} {
    width: 138px;
    height: 138px;
    border-width: 69px;
  }
`;

export default ContainerStyle;
