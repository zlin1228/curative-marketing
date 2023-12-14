import styled from 'styled-components';

import { motion } from 'styles/motion';

import { getInset, getMargin } from 'components/parallax/parallax.utils';

export const ParallaxItemStyles = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  z-index: 999;
  ${motion.standard}
  margin: ${({ vertical, horizontal }) => getMargin({ vertical, horizontal })};
  inset: ${({ vertical, horizontal }) => getInset({ vertical, horizontal })};
`;

export default ParallaxItemStyles;
