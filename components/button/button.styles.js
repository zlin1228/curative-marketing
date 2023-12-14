import styled from 'styled-components';

import { getButtonStyles } from 'components/button/button.utils';

export const StyledButton = styled.div.attrs(({ buttonStyle, variant, ...props }) => ({
  className: `button ${variant} ${buttonStyle}`,
  ...props,
}))`
  position: relative;
  display: inline-flex;
  width: ${({ buttonStyle }) => (buttonStyle === 'text-only' ? 'fit-content' : '100%')};
  align-items: center;
  justify-content: center;
  ${({ size, buttonStyle, colorMap }) => getButtonStyles(size, buttonStyle, colorMap)};
  line-height: 1;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
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
`;

export default StyledButton;
