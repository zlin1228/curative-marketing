import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';

export const Triangle = styled.div.attrs({ className: 'triangle' })`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    ${props => (props.reversed ? '152deg' : '208deg')},
    ${props => props.accentColor || colorMap.signalOrange[400]} 0%,
    ${props => props.accentColor || colorMap.signalOrange[400]} 50%,
    transparent 50%,
    transparent 1000%
  );
`;

export const AccentWrapper = styled.div`
  position: absolute;
  width: 88px;
  height: 47px;
  top: ${props => (props.isTop ? '0' : 'unset')};
  bottom: ${props => (props.isTop ? 'unset' : '0')};
  left: ${props => (props.isRight ? 'unset' : '0')};
  right: ${props => (props.isRight ? '0' : 'unset')};
  transform: ${props => (props.isRight && props.accentType ? 'scaleX(1)' : 'scaleX(-1)')}
    ${props => (props.isTop && props.accentType ? 'scaleY(1)' : 'scaleY(-1)')};
  z-index: 0;

  ${media.md} {
    width: 181px;
    height: 96px;
  }

  ${media.lg} {
    width: 284px;
    height: 153px;
  }
`;
