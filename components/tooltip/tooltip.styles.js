import styled from 'styled-components';

import colorMap from 'atoms/colors/colors';

export const TooltipIcon = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;
  z-index: 999;

  svg {
    stroke: ${colorMap.clearBlue[700]};
    width: 16px;
    height: 16px;
  }
`;

export default TooltipIcon;
