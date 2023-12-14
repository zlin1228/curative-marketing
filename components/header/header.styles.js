import styled from 'styled-components';

import { motion } from 'styles/motion';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const HeaderStyles = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1000;
  background: ${props => (props.sticky ? colorMap.white : colorMap.clearBlue[700])};

  .navbar {
    width: 100%;
    z-index: 9999;
    padding: 0;
    transition: 0.35s;
  }

  .brand-wrapper {
    display: flex;
    .navbar-brand {
      padding: 0;
      margin-right: 4rem;
      max-height: 25px;
    }
    .mobile-top-tool {
      gap: 12px;
      .dropdown {
        display: none;
        ${media.max('xl')} {
          display: flex;
        }
      }
    }
    .barbtn {
      display: none;
      ${media.max('xl')} {
        display: flex;
      }
      ${media.max('sm')} {
        display: none;
      }
    }
    ${media.max('xl')} {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      align-items: center;
      .navbar-toggler {
        border: none;
        box-shadow: none;
        padding: 0;
      }
      .nav-icon {
        width: 18px;
        height: 12px;
        position: relative;
        transform: rotate(0deg);
        transition: 0.5s ease-in-out;
        span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: ${props => (props.sticky ? colorMap.clearBlue[700] : colorMap.white)};
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
          &:nth-child(1) {
            top: 0px;
          }

          &:nth-child(2) {
            top: 5px;
          }

          &:nth-child(3) {
            top: 10px;
          }
        }
      }
      &.expanded {
        z-index: 10;
        padding: 24px 16px;
        background: ${props => (props.sticky ? colorMap.white : colorMap.clearBlue[700])};
        .nav-icon {
          span {
            &:nth-child(1) {
              top: 5px;
              transform: rotate(135deg);
            }
            &:nth-child(2) {
              opacity: 0;
              left: -20px;
            }
            &:nth-child(3) {
              top: 5px;
              transform: rotate(-135deg);
            }
          }
        }
      }
    }
  }
  .header-container {
    padding: 24px 0;
    ${motion.standard}
    scroll-behavior: smooth;
    gap: 16px;
    .navbar-nav {
      gap: 32px;
      ${media.max('xl')} {
        gap: 0;
      }
      &.button-nav {
        gap: 16px;
        border-left: 1px solid ${props => (props.sticky ? colorMap.gray[300] : colorMap.clearBlue[600])};
        padding-left: 24px;
      }
    }
    .submenu-container {
      position: absolute;
      top: 80px;
      ${motion.standard}
    }
    .submenu-wrapper {
      background-color: ${colorMap.white};
      transform: perspective(0);
      ${motion.standard}
      border: 1px solid ${colorMap.clearBlue[200]};
      box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
      overflow: hidden;
      border-radius: 4px;
      transform-origin: top;
      width: 200px;
      &.hidden-menu {
        opacity: 0;
        transform: perspective(100px);
        z-index: 0;
        height: 0 !important;
        &.d-xl-none {
          display: none;
        }
      }
    }
    .menu-item {
      position: relative;
      font: ${font('text-md', 'semiBold')};
      color: ${props => (props.sticky ? colorMap.black : colorMap.white)};
      text-decoration: none;
      transition: 0.3s;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 1px;
        background: ${props => (props.sticky ? colorMap.black : colorMap.white)};
        transition: width 0.3s ease 0s;
        opacity: 0;
      }
      &.drop-item {
        &:after {
          opacity: 0;
        }
        .arrow-icon {
          transition: 0.3s;
          margin-left: 6px;
        }
      }
      &:hover {
        &:after {
          width: calc(100% - 22px);
          opacity: 1;
        }
      }
      a {
        text-decoration: none;
        color: ${colorMap.black};
        font: ${font('text-md', 'semiBold')};
        ${media.xl} {
          color: ${props => (props.sticky ? colorMap.black : colorMap.white)};
        }
      }
      &.no-dropdown {
        &:hover {
          &:after {
            width: 100%;
          }
        }
      }
    }
    &.expanded {
      background: ${colorMap.white};
      height: 100vh;
      display: block;
      margin: 0;
      width: 100%;
      max-width: 100%;
      padding: 0;
      ${media.max('xl')} {
        overflow: auto;
      }
      .mobile-menu {
        margin-top: 32px;
        .menu-item {
          padding: 0 16px;
          width: 100%;
          display: inline-block;
          margin: 0;
          margin-bottom: 8px;
          color: ${colorMap.black};
          &.active-menu {
            background: ${colorMap.clearBlue[50]} !important;
          }
          .nav-header a {
            ${media.max('xl')} {
              padding: 16px;
            }
          }
          .arrow-icon {
            width: 56px;
            height: 56px;
            position: absolute;
            right: 16px;
            padding: 20px;
          }
          &:hover,
          &:focus {
            background: ${colorMap.gray[50]};
            &:after {
              display: none;
            }
          }
          &.drop-item {
            background: ${colorMap.white};
          }
          .hover-active {
            ${media.max('xl')} {
              color: ${colorMap.clearBlue[700]};
            }
          }
          svg {
            stroke: ${colorMap.black} !important;
          }
          &.no-dropdown {
            a {
              color: ${colorMap.black};
              padding: 16px;
              display: block;
            }
          }
        }
      }
      .gray-bg {
        display: none;
      }
      .nav-section {
        margin-left: 0;
      }
      .button-nav {
        display: flex !important;
        border: none;
        padding: 0 32px;
        margin-top: 32px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        ${media.max('sm')} {
          flex-direction: column;
        }
        button {
          &:first-child {
            color: ${colorMap.clearBlue[700]};
            border-color: ${colorMap.clearBlue[700]};
            background: ${colorMap.white};
          }
          &:last-child {
            background: ${colorMap.clearBlue[700]};
            color: ${colorMap.white};
          }
        }
      }
    }
  }
  svg {
    stroke: ${props => (props.sticky ? colorMap.black : colorMap.white)};
    cursor: pointer;
  }
  .dropdown {
    button {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 10px;
      padding: 0;
      background-color: transparent !important;
      border: none !important;
      box-shadow: none !important;
      min-width: 110px;
      ${media.max('xl')} {
        gap: 4px;
        min-width: initial;
      }
      .locale-title {
        font: ${font('text-md', 'semiBold')};
        color: ${props => (props.sticky ? colorMap.clearBlue[700] : colorMap.white)};
      }

      &:after {
        content: '';
        display: none;
      }
    }

    .dropdown-menu {
      background: ${colorMap.white};
      box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
      border-radius: 4px;
      border: 1px solid #dce5ff;
      padding: 0;
      margin-top: 20px;

      a {
        color: ${colorMap.black};
        text-decoration: none;
        background-color: transparent;
        font: ${font('text-md', 'semiBold')};
        width: 100%;
        padding: 16px;
        user-select: none;
        border-radius: 4px;
        .active,
        &:hover {
          background: ${colorMap.clearBlue[100]};
          color: ${colorMap.clearBlue[700]};
        }
      }

      > a {
        padding: 0;
        display: flex;
      }

      ${media.max('xl')} {
        left: -80px;
        top: 18px;
      }
    }
    svg {
      stroke: ${props => (props.sticky ? colorMap.clearBlue[700] : colorMap.white)};
      cursor: pointer;
    }
  }
  .header-active,
  .active-menu {
    .arrow-icon {
      transform: rotate(180deg);
    }
  }
`;
export const HeaderSubNav = styled.div`
  padding: 0.5rem 0;
  background: ${props => (props.sticky ? colorMap.gray[200] : colorMap.clearBlue[800])};
  a {
    text-decoration: none;
    color: ${props => (props.sticky ? colorMap.black : colorMap.white)};
    font: ${font('text-md', 'semiBold')};
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 1px;
      background: ${props => (props.sticky ? colorMap.black : colorMap.white)};
      transition: width 0.3s ease 0s;
      opacity: 0;
    }
    &:hover {
      &:after {
        width: 100%;
        opacity: 1;
      }
    }
  }
  .links-group {
    display: flex;
    justify-content: end;
    gap: 44px;
  }
`;

export const MinimalHeaderStyles = styled.section`
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1000;
  background: ${props => (props.sticky ? colorMap.white : colorMap.clearBlue[700])};
  padding: 24px;
  justify-content: center;
`;
