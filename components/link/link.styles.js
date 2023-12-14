import styled, { css } from 'styled-components';

export const StyledA = styled.a`
  text-decoration: ${props => props.textDecoration};
  width: ${props => props.width};

  ${({ colorMap }) =>
    colorMap &&
    css`
      border-radius: 39px;
      &:focus-visible {
        outline: 5px solid ${colorMap.solid.focus};
        outline-offset: 3px;
      }
    `}
`;

export default StyledA;
