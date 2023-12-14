import { css } from 'styled-components';

const getEvenWidth = (count, gap) => {
  const baseWidth = 100 / count;
  const difference = count === 2 ? gap : (gap * (count - 1)) / count;

  return css`
    width: calc(${baseWidth}% - ${difference}px);
  `;
};

export default getEvenWidth;
