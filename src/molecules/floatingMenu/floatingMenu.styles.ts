import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import styled, { keyframes } from 'styled-components';

import colorMap from 'atoms/colors/colors';
import { font, fontWeight } from 'atoms/typography/fonts';

const floatingMenuTheme = {
  white: {
    background: colorMap.white,
    color: colorMap.clearBlue[700],
  },
  blue: {
    background: colorMap.clearBlue[700],
    color: colorMap.white,
  },
} as const;

export type FloatingMenuTheme = keyof typeof floatingMenuTheme;

const slideUpAndFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideDownAndFadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(2px);
  }
`;

interface MenuButtonProps {
  theme: FloatingMenuTheme;
}

export const MenuButton = styled(DropdownMenuTrigger)<MenuButtonProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => floatingMenuTheme[theme].color};
  background-color: ${({ theme }) => floatingMenuTheme[theme].background};
  height: 56px;
  width: 56px;
  border-radius: 50%;
  bottom: 24px;
  right: 24px;
  z-index: 1000;

  svg path {
    transition: transform 300ms ease-in-out;
  }
  svg path {
    transform: translate(0px) rotate(0deg);
  }

  &[data-state='open'] svg {
    path:nth-child(1) {
      transform: translate(4px, -0.75px) rotate(45deg);
    }
    path:nth-child(2) {
      transform: translateX(-20px);
    }
    path:nth-child(3) {
      transform: translate(-6px, 5px) rotate(-45deg);
    }
  }
`;

export const MenuContent = styled(DropdownMenuContent)`
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  background-color: ${colorMap.white};
  overflow: hidden;
  width: 250px;

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state='open'] {
    animation-name: ${slideUpAndFadeIn};
  }

  &[data-state='closed'] {
    animation-name: ${slideDownAndFadeOut};
  }
`;

const ItemProps = `
  width: 100%;
  padding: 12px 16px;
  font: ${font('text-sm')};
`;

export const MenuHeading = styled.div`
  ${ItemProps}
  color: ${colorMap.white};
  background-color: ${colorMap.clearBlue[700]};
  ${fontWeight.bold}
`;

export const MenuItem = styled(DropdownMenuItem)`
  ${ItemProps}
  color: ${colorMap.accentGray[700]};
  border-bottom: 1px solid ${colorMap.gray[200]};
  ${fontWeight.medium}
`;
