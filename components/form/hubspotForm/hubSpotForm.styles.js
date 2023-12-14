import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

import { getButtonStyles } from 'components/button/button.utils';

import { getButtonColor } from 'utils/colorUtils';

export const FormWrapper = styled.div`
  width: 100%;
  padding: ${props => (props?.isContainedForm ? '32px' : '0')};
  background: ${props => (props?.isContainedForm ? colorMap.white : 'transparent')};
  box-shadow: ${props =>
    props?.isContainedForm
      ? '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)'
      : 'unset'};
  border-radius: ${props => (props?.isContainedForm ? '4px' : 'unset')};
  .hubspotForm {
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
      &.form-columns-2 div.hs-form-field {
        width: 100%;
        margin-bottom: 24px;
        ${media.md} {
          width: 48%;
        }
      }
      &.form-columns-1 div.hs-form-field {
        width: 100%;
        margin-bottom: 24px;
      }
      &.form-columns-1 div.hs-dependent-field {
        width: 100%;
        div.hs_are_you_an_employer_or_broker_ legend {
          font: ${font('text-sm')};
        }
      }
      .hs-form-field {
        label {
          font: ${font('text-sm', 'semiBold')};
          margin-bottom: 6px;
        }
        div.input {
          max-width: 100%;
          input {
            width: 100%;
            border: 1px solid ${props => (props?.isContainedForm ? colorMap.gray[300] : colorMap.red[50])};
            border-radius: 4px;
            padding: 12px 16px;
            height: 51px;
            background: ${props => (props?.isContainedForm ? colorMap.white : colorMap.red[50])};
            color: ${colorMap.black};
            &::placeholder {
              color: ${colorMap.gray[600]};
            }
            &:focus-visible {
              outline: none;
            }
            &.error,
            &:invalid {
              border-color: ${colorMap.signalOrange[500]};
            }
          }
          select {
            border: 1px solid ${props => (props?.isContainedForm ? colorMap.gray[300] : colorMap.red[50])};
            border-radius: 4px;
            padding: 12px 16px;
            width: 100%;
            height: 51px;
            background: ${props => (props?.isContainedForm ? colorMap.white : colorMap.red[50])};
            color: ${colorMap.black};
            &::placeholder {
              color: ${colorMap.gray[600]};
            }
            &:focus-visible {
              outline: none;
            }
          }
        }
        .hs-error-msgs {
          list-style-type: none;
          margin-bottom: 0;
          position: relative;
          padding: 0;
          & label {
            font: ${font('text-xs', 'regular')};
            color: ${colorMap.white};
            margin-bottom: 0;
          }
        }
      }
    }
    .hs-submit {
      padding: 0;
      margin: 0;
      input {
        border: none;
        position: relative;
        display: inline-flex;
        width: fit-content;
        align-items: center;
        justify-content: center;
        ${getButtonStyles('sm', 'outline', getButtonColor())};
        line-height: 1;
        transition: 0.2s;
        text-align: center;

        svg,
        .spinner-border {
          margin-right: 13px;
        }

        span {
          vertical-align: middle;
          img {
            padding-left: 8px !important;
          }
        }
      }
    }
    .hs_error_rollup {
      & ul {
        list-style-type: none;
        padding: 0;
        margin-bottom: 0;
        & label {
          font: ${font('text-xs', 'regular')};
          color: ${colorMap.white};
        }
      }
    }

    fieldset.form-columns-1 div.hs_newsletter_type_preference {
      margin-bottom: 0;
    }

    .hs_recaptcha {
      margin-bottom: 24px;
    }

    ul.inputs-list {
      list-style-type: none;
      padding-left: 0;

      li.hs-form-checkbox,
      li.hs-form-booleancheckbox {
        display: flex;
        flex-direction: column-reverse;
        gap: 8px;

        &:last-of-type {
          label.hs-form-checkbox-display {
            margin-bottom: 0;
          }
        }

        label.hs-form-checkbox-display {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .hs-input {
          width: 24px !important;
          height: 24px !important;
        }
      }
    }
  }
`;

export default FormWrapper;
