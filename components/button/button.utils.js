import { css } from 'styled-components';

import color from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const ButtonFont = {
  sm: `
    font: ${font('text-sm', 'bold')};
  `,
  md: `
     font: ${font('text-lg', 'bold')};
  `,
  lg: `
    font: ${font('text-xl', 'medium')};
  `,
};

const getButtonPadding = (size, buttonStyle) => {
  if (buttonStyle === 'text-only') {
    return '0';
  }

  switch (size) {
    case 'sm':
      return '14px 48px';
    case 'lg':
      return '18px 56px';
    case 'md':
    default:
      return '16px 48px';
  }
};

export const getButtonStyles = (size, buttonStyle, colorMap) => {
  const styles = colorMap[buttonStyle];
  const isTextOnly = buttonStyle === 'text-only';
  const disabled = styles?.disabled || {};

  return css`
    ${ButtonFont[size]}
    padding: ${getButtonPadding(size, buttonStyle)};
    color: ${styles?.text || color.clearBlue[700]};
    background-color: ${styles?.background || 'transparent'};
    border: ${styles?.border && `1px solid ${styles.border}`};
    border-radius: ${!isTextOnly && '39px'};
    text-decoration: none;

    &:hover {
      background-color: ${styles?.hover || 'transparent'};
      text-decoration: ${isTextOnly && 'underline'};
    }

    &:focus-visible {
      outline: ${styles?.focus && `5px solid ${styles.focus}`};
      outline-offset: 3px;
    }

    &:active {
      background-color: ${styles?.active.background || 'transparent'};
      color: ${styles?.active.text || color.offWhite[50]};
      text-decoration: ${isTextOnly && 'underline'};
    }

    &[disabled] {
      background: ${disabled?.background || 'transparent'};
      color: ${disabled?.text || color.accentGray[300]};
      border: ${disabled?.border && `1px solid ${disabled.border}`};
    }
  `;
};
