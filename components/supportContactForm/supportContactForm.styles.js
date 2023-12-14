import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font, fontWeight } from 'atoms/typography/fonts.ts';

export const Wrapper = styled.div`
  width: 50%;
  .contact-form {
    font-family: 'Sohne', sans-serif;
    .cookie-reset-container {
      a {
        color: ${colorMap.offWhite[50]};
        font: ${font('text-sm')};
      }
    }
    fieldset {
      border: none;
      display: block;
      justify-content: space-between;
      padding: 0;
      min-width: 100%;
      ${media.md} {
        display: flex;
      }
      &.form-columns-2 div.form-field {
        width: 100%;
        margin-bottom: 32px;
        ${media.md} {
          width: 48%;
        }
      }
      &.form-columns-1 div.form-field {
        width: 100%;
        margin-bottom: 32px;
      }
      &.form-columns-1 div.hs-dependent-field {
        width: 100%;
        div.hs_are_you_an_employer_or_broker_ legend {
          font: ${font('text-sm')};
        }
      }
      .form-field {
        label {
          font: ${font('text-sm', 'semiBold')};
          margin-bottom: 6px;
        }
        textarea {
          border: 1px solid ${colorMap.red[50]};
          border-radius: 4px;
          padding: 12px 16px;
          width: 100%;
          background: ${colorMap.red[50]};
          color: ${colorMap.black};
          &::placeholder {
            color: ${colorMap.gray[600]};
          }
          &:focus-visible {
            outline: none;
          }
          &.error {
            border-color: ${colorMap.signalOrange[500]};
          }
        }

        input[type='checkbox'] {
          height: 20px;
          margin-right: 8px;
          vertical-align: middle;
          width: 20px;
        }

        input:not([type='checkbox']) {
          border: 1px solid ${colorMap.red[50]};
          border-radius: 4px;
          padding: 12px 16px;
          width: 100%;
          height: 51px;
          background: ${colorMap.red[50]};
          color: ${colorMap.black};
          &::placeholder {
            color: ${colorMap.gray[600]};
          }
          &:focus-visible {
            outline: none;
          }
          &.error {
            border-color: ${colorMap.signalOrange[500]};
          }
        }
        select {
          border: 1px solid ${colorMap.red[50]};
          border-radius: 4px;
          padding: 12px 16px;
          width: 100%;
          height: 51px;
          background: ${colorMap.red[50]};
          color: ${colorMap.black};
          &::placeholder {
            color: ${colorMap.gray[600]};
          }
          &:focus-visible {
            outline: none;
          }
        }
      }
    }
    .submit {
      padding: 0;
      margin: 0;
      input {
        position: relative;
        display: inline-block;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 16px 48px;
        font-size: 0.875rem;
        line-height: 1.313rem;
        font-weight: ${fontWeight.semiBold};
        color: ${colorMap.offWhite[50]};
        background-color: ${colorMap.signalOrange[400]};
        border: 1px solid ${colorMap.signalOrange[400]};
        border-radius: 39px;
        cursor: pointer;
        white-space: nowrap;
        transition: 0.2s;
        margin-top: 16px;
        &:hover {
          background-color: ${colorMap.signalOrange[300]};
          border-color: ${colorMap.signalOrange[300]};
        }
        &:focus {
          background-color: ${colorMap.signalOrange[700]};
          border-color: ${colorMap.signalOrange[700]};
        }
        ${media.md} {
          width: auto;
        }
      }
    }
  }
`;

export default Wrapper;
