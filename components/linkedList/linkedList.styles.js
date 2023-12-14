import { AccordionTrigger } from '@radix-ui/react-accordion';
import styled, { keyframes } from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

import Icon from 'molecules/icon/Icon';

import ComponentLink from 'components/link/link.component';

import generateTransitions from 'utils/generateTransitions';

export const linkedListTheme = {
  blue: {
    background: colorMap.clearBlue[700],
    listItemMarker: colorMap.signalOrange[400],
    headingHighlight: colorMap.white,
    content: colorMap.white,
    itemHover: colorMap.clearBlue[600],
    linkHover: colorMap.clearBlue[300],
    gradient: {
      border: colorMap.clearBlue[800],
      dark: colorMap.clearBlue[600],
      light: colorMap.clearBlue[500],
    },
  },
  tan: {
    background: colorMap.offWhite[50],
    listItemMarker: colorMap.skyBlue[500],
    headingHighlight: colorMap.clearBlue[700],
    content: colorMap.black,
    itemHover: colorMap.offWhite[100],
    linkHover: colorMap.gray[600],
    gradient: {
      border: colorMap.offWhite[300],
      dark: colorMap.offWhite[100],
      light: colorMap.offWhite[25],
    },
  },
  white: {
    background: colorMap.white,
    listItemMarker: colorMap.skyBlue[500],
    headingHighlight: colorMap.clearBlue[700],
    content: colorMap.black,
    itemHover: colorMap.clearBlue[100],
    linkHover: colorMap.gray[600],
    gradient: {
      border: colorMap.gray[200],
      dark: colorMap.clearBlue[100],
      light: colorMap.clearBlue[25],
    },
  },
};

export const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`;

export const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;

export const slideTiming = '300ms cubic-bezier(0.87, 0, 0.13, 1)';

export const HeadingContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;
`;

export const Heading = styled.h2`
  color: ${({ theme }) => linkedListTheme[theme]?.content};
`;

export const Content = styled.div`
  color: ${({ theme }) => linkedListTheme[theme]?.content};
`;

export const List = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 16px;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;

  ${media.xl} {
    flex-flow: row wrap;
    gap: 16px 30px;
  }
`;

export const Column = styled.div`
  display: inherit;
  gap: inherit;
  flex-flow: column;
  flex: 1 0 48%;
`;

export const AccordionIcon = styled(Icon)`
  margin-left: auto;
  transform: rotate(0deg);
  transition: transform 250ms ease-in-out;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0px;
  transition: gap ${slideTiming};

  &[data-state='open'] {
    gap: 24px;
  }

  &[data-state='open'] ${AccordionIcon} {
    transform: rotate(180deg);
  }
`;

export const ListItem = styled(AccordionTrigger)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 24px;
  border-radius: 4px;
  transition: ${generateTransitions(['background-color', 'padding', 'margin'], 250)};

  font: ${font('text-xl', 'medium')};
  color: ${({ theme }) => linkedListTheme[theme]?.content};

  a {
    font: ${font('text-xl', 'medium')};
    color: ${({ theme }) => linkedListTheme[theme]?.content};
  }

  &:hover:not(:disabled) {
    padding-inline: 4px;
    margin-inline: -4px;
    background: ${({ theme }) => linkedListTheme[theme]?.itemHover};
  }

  &:focus-visible {
    outline: 3px solid ${colorMap.skyBlue[500]};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export const ListItemMarker = styled.span`
  height: 16px;
  width: 16px;
  background-color: ${({ theme }) => linkedListTheme[theme]?.listItemMarker || colorMap.skyBlue[500]};
`;

export const LinksWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 0px 16px;
  list-style: none;
  padding-inline: 32px;
  margin-bottom: 0;
  overflow: hidden;
  border-bottom: ${({ theme }) => linkedListTheme[theme]?.gradient.border} 1px solid;

  background: ${({ theme }) => {
    const { border, dark, light } = linkedListTheme[theme]?.gradient || {};

    return `repeating-linear-gradient(
    ${border},
    ${border} 1px,
    ${dark} 1px,
    ${dark} 56px,
    ${border} 56px,
    ${border} 57px,
    ${light} 57px,
    ${light} 114px
  )`;
  }};

  &[data-state='open'] {
    animation: ${slideDown} ${slideTiming};
  }

  &[data-state='closed'] {
    animation: ${slideUp} ${slideTiming};
  }
`;

export const Link = styled(ComponentLink)`
  color: ${({ theme }) => linkedListTheme[theme]?.content};
  font: ${font('text-sm', 'semiBold')};
  padding-block: 6px;
  margin-block: 12px;
  transition: color 250ms ease-in-out;

  &:hover {
    color: ${({ theme }) => linkedListTheme[theme]?.linkHover};
  }

  &:focus-visible {
    outline: 3px solid ${colorMap.skyBlue[500]};
    outline-offset: 3px;
    border-radius: 4px;
  }
`;
