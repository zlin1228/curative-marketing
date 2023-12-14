import colorMap from 'atoms/colors/colors';

import { stringToKebabCase } from 'utils/textFunctions';

export const ColorMap = {
  AccentGray25: colorMap.accentGray[25],
  AccentGray50: colorMap.accentGray[50],
  ClearBlue50: colorMap.clearBlue[50],
  Black: colorMap.black,
  Blue100: colorMap.clearBlue[100],
  Blue: colorMap.clearBlue[700],
  Blue700: colorMap.clearBlue[700],
  ClearBlue700: colorMap.clearBlue[700],
  'Clear Blue': colorMap.clearBlue[700],
  ClearBlue800: colorMap.clearBlue[800],
  Blue800: colorMap.clearBlue[800],
  'Sky Blue': colorMap.skyBlue[500],
  Gray25: colorMap.gray[25],
  'Gray/25': colorMap.gray[25],
  Gray50: colorMap.gray[50],
  Gray: colorMap.gray[100],
  Grey: colorMap.gray[100],
  'Gray/100': colorMap.gray[100],
  'Off-White': colorMap.offWhite[50],
  Orange: colorMap.signalOrange[400],
  Offwhite: colorMap.offWhite[50],
  White: colorMap.white,
  'Main White': colorMap.white,
  'Blue/White': {
    left: colorMap.clearBlue[700],
    right: colorMap.white,
  },
  'Blue/Off-White': {
    left: colorMap.clearBlue[700],
    right: colorMap.offWhite[50],
  },
  'Blue/Gray25': {
    left: colorMap.clearBlue[700],
    right: colorMap.gray[25],
  },
  'Grey/Light Blue': {
    left: colorMap.gray[100],
    right: colorMap.skyBlue[500],
  },
  'Off-White/Light Blue': {
    left: colorMap.offWhite[50],
    right: colorMap.skyBlue[500],
  },
  'White/Blue': {
    left: colorMap.white,
    right: colorMap.clearBlue[700],
  },
  'White/Light Blue': {
    left: colorMap.white,
    right: colorMap.skyBlue[500],
  },
  transparent: 'transparent',
  Transparent: 'transparent',
};

export const getColor = (key, fallback = colorMap.white) => (ColorMap[key] ? ColorMap[key] : fallback);

export const getGradient = key => {
  const color = getColor(key);

  return typeof color === 'string' ? { left: color, right: color } : color;
};

const ButtonColor = {
  'primary-blue': {
    solid: {
      background: colorMap.clearBlue[700],
      text: colorMap.offWhite[50],
      hover: colorMap.clearBlue[500],
      focus: colorMap.clearBlue[500],
      active: {
        background: colorMap.clearBlue[900],
        text: colorMap.offWhite[50],
      },
      disabled: {
        background: colorMap.clearBlue[100],
        text: colorMap.accentGray[300],
      },
    },
    outline: {
      background: colorMap.white,
      border: colorMap.clearBlue[700],
      text: colorMap.clearBlue[700],
      hover: colorMap.clearBlue[100],
      focus: colorMap.clearBlue[500],
      active: {
        background: colorMap.clearBlue[700],
        text: colorMap.offWhite[50],
      },
      disabled: {
        background: colorMap.clearBlue[50],
        border: colorMap.clearBlue[200],
        text: colorMap.accentGray[300],
      },
    },
  },
  'secondary-blue': {
    solid: {
      background: colorMap.clearBlue[200],
      text: colorMap.clearBlue[700],
      hover: colorMap.clearBlue[50],
      focus: colorMap.clearBlue[600],
      active: {
        background: colorMap.clearBlue[400],
        text: colorMap.clearBlue[700],
      },
      disabled: {
        background: colorMap.clearBlue[100],
        text: colorMap.accentGray[300],
      },
    },
    outline: {
      background: colorMap.white,
      border: colorMap.clearBlue[400],
      text: colorMap.clearBlue[700],
      hover: colorMap.clearBlue[100],
      focus: colorMap.clearBlue[400],
      active: {
        background: colorMap.clearBlue[400],
        text: colorMap.clearBlue[700],
      },
      disabled: {
        background: colorMap.clearBlue[100],
        border: colorMap.clearBlue[400],
        text: colorMap.accentGray[300],
      },
    },
  },
  'tertiary-white': {
    solid: {
      background: colorMap.white,
      text: colorMap.clearBlue[700],
      hover: colorMap.clearBlue[100],
      focus: colorMap.white,
      active: {
        background: colorMap.gray[500],
        text: colorMap.white,
      },
      disabled: {
        background: colorMap.accentGray[100],
        text: colorMap.accentGray[300],
      },
    },
    outline: {
      background: colorMap.black,
      border: colorMap.white,
      text: colorMap.white,
      hover: colorMap.accentGray[700],
      focus: colorMap.accentGray[400],
      active: {
        background: colorMap.accentGray[200],
        text: colorMap.black,
      },
      disabled: {
        background: colorMap.accentGray[100],
        border: colorMap.white,
        text: colorMap.accentGray[300],
      },
    },
    'text-only': {
      background: 'transparent',
      border: 'none',
      text: colorMap.white,
      active: {
        background: 'transparent',
        text: colorMap.white,
      },
      disabled: {
        background: 'transparent',
        text: colorMap.white,
        border: 'none',
      },
    },
  },
  orange: {
    solid: {
      focus: colorMap.skyBlue[500],
    },
    'text-only': {
      background: 'transparent',
      border: 'none',
      text: colorMap.signalOrange[700],
      active: {
        background: 'transparent',
        text: colorMap.signalOrange[700],
      },
      disabled: {
        background: 'transparent',
        text: colorMap.signalOrange[700],
        border: 'none',
      },
    },
  },
};

export const getButtonColor = color => {
  if (typeof color !== 'string') {
    return ButtonColor['primary-blue'];
  }
  const colorKey = stringToKebabCase(color);

  return ButtonColor[colorKey] || ButtonColor['primary-blue'];
};

export const isLight = color => {
  if (!color) {
    return true;
  }

  return [
    colorMap.accentGray[25],
    colorMap.accentGray[50],
    colorMap.clearBlue[50],
    colorMap.clearBlue[100],
    colorMap.gray[25],
    colorMap.gray[50],
    colorMap.gray[100],
    colorMap.offWhite[50],
    colorMap.white,
  ].includes(color);
};
