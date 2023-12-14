import { breakpointValues } from 'atoms/breakpoints/breakpoints';

const parallaxSizes = {
  square: {
    sm: {
      mobile: 63,
      tablet: 85,
      desktop: 140,
    },
    lg: {
      mobile: 96,
      tablet: 135,
      desktop: 225,
    },
  },
  rectangle: {
    sm: {
      mobile: 115,
      tablet: 140,
      desktop: 180,
    },
    lg: {
      mobile: 150,
      tablet: 210,
      desktop: 350,
    },
  },
};

const maxMobile = breakpointValues.xs - 24;

export const getMobileWidth = width => (width >= maxMobile ? maxMobile : width);

const formatSize = size => ({ width: size });

export const getSize = (aspectRatio, size) => {
  if (!parallaxSizes[aspectRatio]?.[size]) {
    return undefined;
  }

  const data = parallaxSizes[aspectRatio]?.[size];

  return {
    ...formatSize(data.mobile),
    mobile: formatSize(data.tablet),
    tablet: formatSize(data.desktop),
  };
};

export const getMargin = ({ vertical, horizontal }) => {
  const verticalShorthand = vertical === 'center' ? 'auto' : '0';
  const horizontalShorthand = horizontal === 'center' ? 'auto' : '0';

  return `${verticalShorthand} ${horizontalShorthand}`;
};

const getPosition = (prop, position) => {
  switch (prop) {
    case position:
    case 'center':
      return '0';
    default:
      return 'auto';
  }
};

export const getInset = ({ vertical, horizontal }) => {
  const top = getPosition(vertical, 'top');
  const left = getPosition(horizontal, 'left');
  const bottom = getPosition(vertical, 'bottom');
  const right = getPosition(horizontal, 'right');

  return `${top} ${right} ${bottom} ${left}`;
};
