import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';

import type { StandardLonghandProperties } from 'csstype';

const getSize = size => (typeof size === 'number' ? `${size}px` : size);
const getPosition = position => (position || position === 0 ? position : 'auto');

interface ImageWrapperProps extends StandardLonghandProperties {
  mobile?: StandardLonghandProperties;
  tablet?: StandardLonghandProperties;
  desktop?: StandardLonghandProperties;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  aspect-ratio: ${props => props.aspectRatio};
  width: ${props => getSize(props.width)};
  height: ${props => getSize(props.height)};
  min-width: ${props => getSize(props.minWidth)};
  min-height: ${props => getSize(props.minHeight)};
  max-width: ${props => getSize(props.maxWidth)};
  max-height: ${props => getSize(props.maxHeight)};
  position: ${props => props.position};
  ${props =>
    props.position === 'absolute' &&
    `
      top: ${getPosition(props.top)};
      right: ${getPosition(props.right)};
      bottom: ${getPosition(props.bottom)};
      left: ${getPosition(props.left)};
    `}

  ${media.md} {
    width: ${props => getSize(props.mobile?.width)};
    height: ${props => getSize(props.mobile?.height)};
    min-width: ${props => getSize(props.mobile?.minWidth)};
    min-height: ${props => getSize(props.mobile?.minHeight)};
    max-width: ${props => getSize(props.mobile?.maxWidth)};
    max-height: ${props => getSize(props.mobile?.maxHeight)};
    position: ${props => props.mobile?.position};
    ${props =>
      props.mobile?.position === 'absolute' &&
      `
        top: ${getPosition(props.mobile?.top)};
        right: ${getPosition(props.mobile?.right)};
        bottom: ${getPosition(props.mobile?.bottom)};
        left: ${getPosition(props.mobile?.left)};
      `}
  }

  ${media.lg} {
    width: ${props => getSize(props.tablet?.width)};
    height: ${props => getSize(props.tablet?.height)};
    min-width: ${props => getSize(props.tablet?.minWidth)};
    min-height: ${props => getSize(props.tablet?.minHeight)};
    max-width: ${props => getSize(props.tablet?.maxWidth)};
    max-height: ${props => getSize(props.tablet?.maxHeight)};
    position: ${props => props.tablet?.position};
    ${props =>
      props.tablet?.position === 'absolute' &&
      `
        top: ${getPosition(props.tablet?.top)};
        right: ${getPosition(props.tablet?.right)};
        bottom: ${getPosition(props.tablet?.bottom)};
        left: ${getPosition(props.tablet?.left)};
      `}
  }

  ${media.xl} {
    width: ${props => getSize(props.desktop?.width)};
    height: ${props => getSize(props.desktop?.height)};
    min-width: ${props => getSize(props.desktop?.minWidth)};
    min-height: ${props => getSize(props.desktop?.minHeight)};
    max-width: ${props => getSize(props.desktop?.maxWidth)};
    max-height: ${props => getSize(props.desktop?.maxHeight)};
    position: ${props => props.desktop?.position};
    ${props =>
      props.desktop?.position === 'absolute' &&
      `
        top: ${getPosition(props.desktop?.top)};
        right: ${getPosition(props.desktop?.right)};
        bottom: ${getPosition(props.desktop?.bottom)};
        left: ${getPosition(props.desktop?.left)};
      `}
  }
`;

export default ImageWrapper;
