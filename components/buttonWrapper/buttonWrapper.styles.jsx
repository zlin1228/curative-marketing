import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';

export const ButtonWrapperStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 16px;
  justify-content: inherit;
  align-items: stretch;

  ${media.sm} {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  .button {
    width: 100%;
    height: 100%;
    ${media.sm} {
      width: fit-content;
    }
  }
`;

export default ButtonWrapperStyles;
