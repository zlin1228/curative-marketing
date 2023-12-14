import { css } from 'styled-components';

export const motion = {
  standard: css`
    transition: transform 0.3s ease-in-out;
    @media (prefers-reduced-motion) {
      transition: none;
    }
  `,
};

export default motion;
