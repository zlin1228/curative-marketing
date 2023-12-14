import { css } from 'styled-components';

export const shadows = {
  card: css`
    box-shadow: -1px 16px 20px rgb(0 0 0 / 25%);
  `,
  pricing: css`
    box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08);
  `,
  transition: css`
    transition: box-shadow 0.3s ease;
  `,
};

export default shadows;
