import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

import { isLight } from 'utils/colorUtils';

export const SwitcherStyles = styled.section`
  padding: 48px 0;
  background: ${({ bgColor }) => bgColor};
  ${media.md} {
    padding: 96px 0;
  }

  .switcher {
    display: flex;
    flex-direction: column;
  }

  .heading {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    * {
      color: ${({ bgColor }) => (isLight(bgColor) ? colorMap.black : colorMap.white)};
      font: ${font('display-sm', 'bold')};
      margin-bottom: 24px;
      text-align: ${({ alignment }) => alignment.toLowerCase()};
      strong {
        color: ${({ bgColor }) => (isLight(bgColor) ? colorMap.clearBlue[700] : colorMap.white)};
      }
      ${media.md} {
        font: ${font('display-lg')};
      }
    }
  }
  .subhead {
    max-width: 770px;
    width: 100%;
    color: ${({ bgColor }) => (isLight(bgColor) ? colorMap.black : colorMap.white)};
    margin-bottom: 32px;
    text-align: ${({ alignment }) => alignment.toLowerCase()};
    ${media.lg} {
      margin-bottom: 56px;
    }
  }
`;
export const TabContainer = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  .nav-tabs {
    justify-content: space-between;
    border: none;
    .nav-item {
      button {
        background: transparent;
        border: none;
        height: 100%;
        padding: 0;
        .title {
          color: ${({ bgColor }) => (isLight(bgColor) ? colorMap.black : colorMap.white)};
        }
        &.active {
          background: ${({ activeTabBackgroundColor }) => activeTabBackgroundColor};
          .tab-title {
            background: ${({ activeTabBackgroundColor }) => activeTabBackgroundColor};
            .title {
              color: ${({ activeTabTextColor }) => activeTabTextColor};
            }
          }
        }
      }
    }
  }
  .tab-content {
    padding: 65.5px 40px;
    background: ${({ activeTabBackgroundColor }) => activeTabBackgroundColor};
    p {
      color: ${({ activeTabTextColor }) => activeTabTextColor};
    }
    ul {
      list-style: none;
      padding: 0;
      flex-flow: wrap;
      display: flex;
      margin: 0;
      li {
        width: 50%;
        margin: 1rem 0;
        padding-left: 40px;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          top: 6px;
          left: 0;
          background: ${colorMap.signalOrange[400]};
        }
      }
    }
  }
`;
export const AccordionContainer = styled.div`
  .accordion-item {
    border: none;
    border-radius: 0;
    padding: 0;
    margin-bottom: 1rem;
    button {
      padding: 0;
      box-shadow: none;
      background: transparent;
      position: relative;
      &:after {
        display: none;
      }
    }
    .accordion-body {
      padding: 24px;
      padding-top: 48px;
      border-top: 1px solid ${colorMap.gray[100]};
      ${media.md} {
        padding-top: 1rem;
      }
      background: ${({ activeTabBackgroundColor }) => activeTabBackgroundColor};
      p {
        color: ${({ activeTabTextColor }) => activeTabTextColor};
      }
      ul {
        list-style: none;
        padding: 0;
        flex-flow: wrap;
        display: flex;
        margin: 0;
        li {
          width: 100%;
          float: left;
          margin: 1rem 0;
          padding-left: 40px;
          position: relative;
          &:before {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            top: 4px;
            left: 0;
            background: ${colorMap.signalOrange[400]};
          }
          ${media.md} {
            width: 50%;
          }
        }
      }
    }
  }
`;
export const FeatureTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 20px 16px 16px;
  background: ${({ backgroundColor, activeTabBackgroundColor, isSelected }) =>
    isSelected ? activeTabBackgroundColor : backgroundColor};
  .title-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    ${media.lg} {
      flex-direction: column;
    }
  }
  ${media.lg} {
    padding: 24px;
    max-width: 150px;
    min-width: 150px;
    height: 100%;
  }
  ${media.xl} {
    max-width: 210px;
  }

  & .arrowIcon {
    transition: 0.2s;
    svg {
      stroke-width: 3px;
      color: ${colorMap.signalOrange[700]};
    }
    &.expand {
      transform: rotate(90deg);
    }
  }

  & .title {
    text-align: center;

    font: ${({ titleSize, titleWeight }) => font(`text-${titleSize || 'md'}`, titleWeight || 'semiBold')};
    color: ${({ textColor, activeTabTextColor, isSelected }) => (isSelected ? activeTabTextColor : textColor)};
  }
`;

export const FeatureDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font: ${({ textSize, textWeight }) => font(`text-${textSize || 'md'}`, textWeight || 'semiBold')};
  }
`;
