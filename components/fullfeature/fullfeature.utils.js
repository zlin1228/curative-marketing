import { css } from 'styled-components';

import colorMap from 'atoms/colors/colors';

export const getIconStyling = alignment => {
  const position = alignment === 'right' ? 'left' : 'right';

  return css`
    padding-${position}: 32px;
    margin-${position}: 8px;
    border-${position}: 1px solid ${colorMap.gray[300]};
  `;
};

export default getIconStyling;
