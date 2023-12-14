import { useRef } from 'react';

import ComponentImage from 'components/image/image.component';
import { getSize } from 'components/parallax/parallax.utils';
import { ParallaxItemStyles } from 'components/parallax/parallaxItem/parallaxItem.styles';
import PrimaryItem from 'components/parallax/parallaxItem/primaryItem.component';
import useParallaxScroll from 'components/parallax/useParallaxScroll';

const ParallaxItem = ({ component, largeMobile }) => {
  const { image, direction, delta, verticalPositioning, horizontalPositioning, aspectRatio, size } = component;
  const { width, height } = image?.fields?.file?.details?.image || {};
  const parallaxRef = useRef(null);

  const accentSize = getSize(aspectRatio, size);
  const transformDirection = direction === 'horizontal' ? 'X' : 'Y';

  useParallaxScroll(parallaxRef, transformDirection, delta);

  return (
    <ParallaxItemStyles ref={parallaxRef} vertical={verticalPositioning} horizontal={horizontalPositioning}>
      {accentSize ? (
        <ComponentImage src={`https:${image?.fields?.file?.url}`} alt="" aspectRatio={width / height} {...accentSize} />
      ) : (
        <PrimaryItem component={component} largeMobile={largeMobile} />
      )}
    </ParallaxItemStyles>
  );
};

export default ParallaxItem;
