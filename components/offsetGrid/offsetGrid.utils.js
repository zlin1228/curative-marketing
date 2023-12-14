import colorMap from 'atoms/colors/colors';

import { isLight } from 'utils/colorUtils';

const gradientDegree = 360;

export const getContainerColors = ({ color: { left, right }, reverse }) => ({
  contentContainerColor: reverse ? right : left,
  gridContainerColor: reverse ? left : right,
});

export const getEscapedId = id => (isNaN(parseInt(id[0])) ? id : `\\3${id}`);

export const getHeightRatio = ({ heightBuffer = 48, wholeHeight, contentHeight, reversed }) => {
  if (
    typeof wholeHeight !== 'number' ||
    wholeHeight <= 0 ||
    typeof contentHeight !== 'number' ||
    contentHeight < 0 ||
    typeof reversed !== 'boolean'
  ) {
    return 50;
  }

  const heightRatio = ((contentHeight + heightBuffer) / wholeHeight) * 100;

  return reversed ? 100 - heightRatio : heightRatio;
};

export const getOffsetGridGradient = ({
  color: { left, right },
  wholeHeight,
  contentHeight,
  reversed,
  heightBuffer,
}) => {
  const midPercent = getHeightRatio({
    wholeHeight,
    contentHeight,
    reversed,
    heightBuffer,
  });

  return `linear-gradient(
    ${gradientDegree}deg,
    ${left} 0%,
    ${left} ${midPercent}%,
    ${right} ${midPercent}%,
    ${right} 100%
  )`;
};

export const getOffsetGridTextColor = (theme, backgroundColor, textColor = colorMap.black) => {
  if (!backgroundColor || backgroundColor === 'transparent') {
    return isLight(theme) ? textColor : colorMap.white;
  }

  return isLight(backgroundColor) ? textColor : colorMap.white;
};
