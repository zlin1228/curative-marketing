import * as Toggle from '@radix-ui/react-toggle';

import BadgeStyle, { type BadgeColors, type BadgeSizes, type BadgeTypes } from 'molecules/badge/badge.styles';

import onKeyDown from 'utils/onKeyDown';

import type { FC } from 'react';

interface BadgeProps {
  label: string;
  size: BadgeSizes;
  color: BadgeColors;
  type: BadgeTypes;
  action?: () => void;
}

const Badge: FC<BadgeProps> = ({ label, action, ...rest }) => (
  <BadgeStyle
    as={action ? Toggle.Root : 'div'}
    onClick={action}
    onKeyDown={e => onKeyDown(e, action)}
    hasAction={!!action}
    {...rest}
  >
    {label}
  </BadgeStyle>
);

export default Badge;
