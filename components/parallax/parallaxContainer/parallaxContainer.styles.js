import { Row } from 'react-bootstrap';
import styled from 'styled-components';

import { motion } from 'styles/motion';

import { media } from 'atoms/breakpoints/breakpoints';

export const ParallaxContainerStyles = styled.div`
  display: flex;
  align-self: center;
  position: relative;
  pointer-events: none;
  width: 100%;
  height: ${props => props.height || 'inherit'};

  ${media.lg} {
    &.desktop-lg {
      max-width: 1170px;
    }

    &.desktop-md {
      max-width: 770px;
    }

    &.desktop-sm {
      max-width: 370px;
    }
  }

  ${media.lgOnly} {
    &.tablet-lg {
      max-width: 100%;
    }

    &.tablet-md {
      max-width: 770px;
    }

    &.tablet-sm {
      max-width: 370px;
    }
  }

  ${media.max('sm')} {
    &.mobile-lg,
    &.mobile-md {
      max-width: 100%;
    }

    &.mobile-sm {
      max-width: 370px;
    }
  }

  ${media.max('lg')} {
    margin: 0 0 20%;
  }
`;

export const MotionRow = styled(Row)`
  ${motion.standard}
`;
