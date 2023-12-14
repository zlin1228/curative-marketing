import styled from 'styled-components';

import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts';

import generateTransitions from 'utils/generateTransitions';

const badgeTheme = {
  size: {
    sm: { padding: '2px 8px', font: font('text-xs', 'semiBold') },
    md: { padding: '2px 10px', font: font('text-sm', 'semiBold') },
    lg: { padding: '4px 12px', font: font('text-sm', 'semiBold') },
  },
  color: {
    filled: {
      blue: {
        backgroundColor: colorMap.clearBlue[300],
        color: colorMap.clearBlue[900],
        borderColor: colorMap.clearBlue[300],
      },
      orange: {
        backgroundColor: colorMap.signalOrange[50],
        color: colorMap.signalOrange[700],
        borderColor: colorMap.signalOrange[50],
      },
      yellow: {
        backgroundColor: colorMap.orange[50],
        color: colorMap.orange[700],
        borderColor: colorMap.orange[50],
      },
      green: {
        backgroundColor: colorMap.green[50],
        color: colorMap.green[700],
        borderColor: colorMap.green[50],
      },
    },
    outline: {
      blue: {
        background: 'transparent',
        color: colorMap.clearBlue[700],
        borderColor: colorMap.clearBlue[700],
      },
    },
  },
} as const;

export type BadgeTheme = keyof typeof badgeTheme;
export type BadgeSizes = keyof typeof badgeTheme['size'];
export type BadgeTypes = keyof typeof badgeTheme['color'];
export type BadgeColors = keyof typeof badgeTheme['color']['filled'];
interface BadgeStyleProps {
  size: BadgeSizes;
  type: BadgeTypes;
  color: BadgeColors;
  hasAction: boolean;
}

const BadgeStyle = styled.div<BadgeStyleProps>`
  width: fit-content;
  white-space: nowrap;
  border-radius: 100px;
  border: 1px solid;
  transition: ${generateTransitions(['color', 'background-color', 'border-color'], 100)};

  ${({ type, color }) => badgeTheme.color[type][color]};
  ${({ size }) => badgeTheme.size[size]};

  &:focus-visible {
    outline: 2px solid ${colorMap.skyBlue[400]};
    outline-offset: 2px;
  }

  ${({ hasAction }) =>
    hasAction &&
    `
      cursor: pointer;
    `};
`;

export default BadgeStyle;
