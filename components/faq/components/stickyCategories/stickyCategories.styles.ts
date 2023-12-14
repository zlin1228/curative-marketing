import styled from 'styled-components';

import colorMap from 'atoms/colors/colors';

export const StickyBadgeContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 12px;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface ScrollWrapperProps {
  scroll: { left: boolean; right: boolean };
}

export const ScrollWrapper = styled.div<ScrollWrapperProps>`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    right: calc(100% - 70px);
    top: 0;
    bottom: 0;
    height: 100%;
    width: 70px;
    opacity: ${({ scroll }) => (scroll.left ? '0' : '1')};
    pointer-events: none;
    background: linear-gradient(270deg, rgba(246, 243, 235, 0) 40%, ${colorMap.offWhite[50]} 100%);
  }

  &:after {
    content: '';
    position: absolute;
    left: calc(100% - 70px);
    top: 0;
    bottom: 0;
    height: 100%;
    width: 70px;
    opacity: ${({ scroll }) => (scroll.right ? '0' : '1')};
    pointer-events: none;
    background: linear-gradient(270deg, ${colorMap.offWhite[50]} 40%, rgba(246, 243, 235, 0) 100%);
    transition: opacity 100ms ease-in-out;
  }
`;
