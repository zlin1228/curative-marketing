import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';

import getBackgroundImage from 'utils/getBackgroundImage';

export const SingleImageStyles = styled.div`
  background: ${({ background }) => getBackgroundImage(background)};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 500px;
  ${media.lg} {
    min-height: 800px;
  }
`;

export default SingleImageStyles;
