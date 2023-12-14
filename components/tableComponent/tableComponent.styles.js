import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font, fontWeight } from 'atoms/typography/fonts.ts';

export const TableStyles = styled.section`
  padding: 40px 0;
  background: ${colorMap.white};

  ${media.md} {
    padding: 72px 0;
  }
  ${media.lg} {
    padding: 96px 0;
  }
  .heading {
    text-align: center;
    max-width: 770px;
    margin: 0 auto;
    margin-bottom: 16px;
    * {
      color: ${colorMap.black};
      font: ${font('display-sm', 'bold')};
      margin-bottom: 0;
      strong {
        color: ${colorMap.clearBlue[700]};
      }
      ${media.md} {
        font: ${font('display-lg')};
      }
    }
  }
  .subhead {
    text-align: center;
  }
`;
export const TableContainer = styled.div`
  margin-top: 96px;
  th {
    border-bottom: 1px solid ${colorMap.skyBlue[500]};
  }
  tbody {
    border-top: none !important;
    tr {
      border-bottom: 1px solid ${colorMap.skyBlue[500]};
      &:last-child {
        border-color: transparent;
      }
    }
  }
  .thead-content {
    width: 200px;
    padding: 0;
    margin-bottom: 32px;
    h6 {
      margin: 24px 0;
      font: ${font('text-xl', 'bold')};
      font-size: 20px;
      color: ${colorMap.clearBlue[700]};
    }
    .thead-subhead {
      * {
        font: ${font('text-md', 'regular')};
        color: ${colorMap.black};
        margin: 0;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          width: 100%;
          margin-bottom: 8px;
          padding-left: 16px;
          position: relative;
          text-align: left;
          &:before {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            top: 7px;
            left: 0;
            background: ${colorMap.signalOrange[400]};
          }
        }
      }
    }
  }
  .tbody-subhead {
    margin: 32px 0;
    width: 195px;
    * {
      font: ${font('text-md')};
      color: ${colorMap.black};
      margin: 0;
    }
    strong {
      font: ${font('text-lg')};
    }
    a {
      color: ${colorMap.clearBlue[700]};
      * {
        color: ${colorMap.clearBlue[700]};
      }
    }
    .tooltip-mark {
      padding-left: 8px;
      vertical-align: middle;
    }
    p {
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        width: 100%;
        margin-bottom: 24px;
        padding-left: 16px;
        position: relative;
        text-align: left;
        &:before {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          top: 7px;
          left: 0;
          background: ${colorMap.signalOrange[400]};
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &.tbody-title {
      color: ${colorMap.clearBlue[700]};
      text-transform: uppercase;
      font-weight: ${fontWeight.bold};
    }
  }
`;
export const AccordionContainer = styled.div`
  margin-top: 40px;
  ${media.md} {
    margin-top: 72px;
  }
  .accordion-item {
    border: none;
    border-radius: 0;
    padding: 0;
    margin-bottom: 1rem;
    background: transparent;
    button {
      padding: 0;
      box-shadow: none;
      background: transparent;
      position: relative;
      padding: 1rem;
      padding-right: 20px;
      background: ${colorMap.offWhite[50]};
      .title {
        vertical-align: middle;
        font: ${font('text-lg', 'semiBold')};
        color: ${colorMap.black};
        padding-left: 1rem;
        ${media.md} {
          padding-left: 24px;
        }
      }
      .arrowIcon {
        position: absolute;
        right: 24px;
        top: 20px;
        transition: 0.2s;
        svg {
          color: ${colorMap.signalOrange[700]};
          font-size: 22px;
        }
        &.expend {
          transform: rotate(90deg);
        }
      }
      &:after {
        display: none;
      }
    }
    .accordion-body {
      margin-top: 0;
      padding: 1rem;
      p {
        font: ${font('text-sm', 'medium')};
        color: ${colorMap.black};
        margin: 0;
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          width: 100%;
          padding-left: 1rem;
          position: relative;
          &:before {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            top: 7px;
            left: 0;
            background: ${colorMap.signalOrange[400]};
          }
        }
      }
      .content-items {
        .content-feature {
          border-bottom: 1px solid ${colorMap.skyBlue[500]};
          &:last-child {
            border: none;
          }
          * {
            font: ${font('text-md', 'regular')};
          }
          padding: 24px 0;
          h6 {
            color: ${colorMap.clearBlue[700]};
            text-transform: uppercase;
            font-weight: ${fontWeight.bold};
            margin-bottom: 16px;
          }
          a {
            color: ${colorMap.clearBlue[700]};
            * {
              color: ${colorMap.clearBlue[700]};
            }
          }
          .tooltip-mark {
            padding-left: 2px;
            vertical-align: middle;
          }
          p {
            margin-bottom: 24px;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
    .active-item {
      button {
        background: transparent;
      }
    }
  }
`;
