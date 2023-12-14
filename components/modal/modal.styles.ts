import { Close, Overlay } from '@radix-ui/react-dialog';
import styled, { css, keyframes } from 'styled-components';

import colorMap from 'atoms/colors/colors';

import { getButtonStyles } from 'components/button/button.utils';

import { getButtonColor } from 'utils/colorUtils';

const overlayShow = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -30%) scale(0.8)',
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
});

const contentSlide = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(30%) scale(0.96)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0) scale(1)',
  },
});

export const ModalOverlay = styled(Overlay)`
  position: fixed;
  background-color: ${colorMap.gray[900]}80;
  backdrop-filter: blur(4px);
  inset: 0;
  animation: ${overlayShow} 250ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1000;
`;

export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  z-index: 10001;

  ${({ isPopupModal, isLargeVariant }) =>
    isPopupModal
      ? css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: fit-content;
          overflow: auto;
          max-width: ${isLargeVariant ? '1250px' : '592px'};
          max-height: 90dvh;
          border-radius: 4px;
          border: 1px solid ${colorMap.clearBlue[900]};
          padding: 32px;
          gap: 32px;
          background: ${colorMap.clearBlue[50]};
          box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
          animation: ${contentShow} 250ms cubic-bezier(0.16, 1, 0.3, 1);
        `
      : css`
          top: 0;
          right: 0px;
          width: 100%;
          height: 100dvh;
          overflow: auto;
          max-width: ${isLargeVariant ? '1250px' : '485px'};
          padding: 48px 24px 20px;
          background: ${colorMap.white};
          animation: ${contentSlide} 250ms cubic-bezier(0.16, 1, 0.3, 1);
        `}
`;

export const JustifiedCloseModal = styled(Close)`
  justify-self: flex-end;
`;

export const FloatingCloseModal = styled(Close)`
  position: absolute;
  top: 12px;
  right: 12px
`

interface ModalWrapperProps {
  isPopupModal: boolean;
  isLargeVariant: boolean;
}

export const ModalFormWrapper = styled.div`
  .hubspotForm {
    .hs-form {
      .hs-button {
        border: none;
        position: relative;
        display: inline-flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        ${getButtonStyles('md', 'solid', getButtonColor())};
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

    .hs-form-field input,
    select {
      border: 1px solid ${colorMap.gray[50]} !important;
      border-radius: 4px;
      padding: 12px 16px;
      background: ${colorMap.gray[50]} !important;
      color: ${colorMap.gray[600]} !important;
    }

    .hs-richtext {
      p,
      span {
        font-family: 'Sohne', sans-serif !important;
        color: ${colorMap.black} !important;
      }
    }
  }
`;

export const PopupImageStyles = styled.div`
  width: 100%;
  cursor: pointer;
`;
