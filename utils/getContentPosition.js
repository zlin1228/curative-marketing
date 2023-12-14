import { stringToKebabCase } from 'utils/textFunctions';

const getContentPosition = position => {
  const kebabPosition = position ? stringToKebabCase(position) : 'default';

  return {
    isDefault: kebabPosition === 'default',
    isTop: kebabPosition === 'above-kicker',
    isBottom: kebabPosition === 'below-kicker',
    position: kebabPosition,
  };
};

export default getContentPosition;
