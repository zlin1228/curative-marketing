import styled from 'styled-components';

import chevronIcon from 'assets/images/chevron.svg';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const LocationLink = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 16px;
  color: ${colorMap.clearBlue[700]};
  text-decoration: none;
  font: ${font('display-sm', 'semiBold')};
  white-space: nowrap;
  transition: 0.2s;

  ${media.md} {
    font: ${font('display-xl', 'semiBold')};
  }

  &:after {
    content: '';
    display: block;
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${colorMap.signalOrange[400]};
    background-image: url(${chevronIcon.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px 18px;
    opacity: 0;
    transition: opacity 0.2s;

    ${media.md} {
      width: 48px;
      height: 48px;
      background-size: 20px 20px;
    }
  }

  &:hover {
    color: ${colorMap.signalOrange[400]};

    &:after {
      opacity: 1;
    }
  }
`;
export const ContentWrapper = styled.div.attrs({
  className: 'featured-content',
})`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 32px;
  height: 100%;

  ${media.md} {
    gap: 72px;
  }

  ${media.lg} {
    gap: 128px;
  }

  h2 {
    font: ${font('display-sm', 'bold')};
    ${media.md} {
      font: ${font('display-lg', 'bold')};
    }
  }

  button {
    margin-top: 24px;
    padding: 12px 56px;
  }
`;
