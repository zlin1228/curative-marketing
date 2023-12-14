import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';

export const DetailCategoryWrapper = styled.div`
  &:before {
    content: '';
    position: absolute;
    width: 160px;
    height: 160px;
    top: -80px;
    left: -80px;
    transform: rotate(45deg);
    background: ${colorMap.signalOrange[400]};
  }

  ${media.md} {
    &:before {
      top: -50px;
    }
  }
  ${media.lg} {
    &:before {
      top: 0px;
    }
  }
`;

export default DetailCategoryWrapper;
