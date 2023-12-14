import styled from 'styled-components';

import type { FC } from 'react';

const iconIds = ['chevron-up', 'close'] as const;
const styleProps = ['width', 'height', 'fill', 'stroke'] as const;

type IconIds = typeof iconIds[number];

export const SVG = styled('svg').withConfig({
  shouldForwardProp: (props: typeof styleProps[number]) => !styleProps.includes(props),
})(({ width, height, fill, stroke }) => ({
  width,
  minWidth: width,
  height,
  minHeight: height,
  fill,
  stroke,
}));

export interface IconProps {
  icon: IconIds;
  size?: string;
  iconColor?: string | null;
  ariaLabel?: string;
}

const Icon: FC<IconProps> = ({ icon, size = '24px', iconColor, ariaLabel, ...props }) =>
  iconIds.includes(icon) ? (
    <SVG
      role="img"
      width={size}
      height={size}
      fill={iconColor || 'currentColor'}
      stroke={iconColor || 'currentColor'}
      aria-label={ariaLabel || icon}
      {...props}
    >
      <use href={`/icons/sprites.svg#${icon}`} />
    </SVG>
  ) : null;

export default Icon;
