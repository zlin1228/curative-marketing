import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import { ParallaxContainerStyles } from 'components/parallax/parallaxContainer/parallaxContainer.styles';
import ParallaxItem from 'components/parallax/parallaxItem/parallaxItem.component';
import useRelativeSize from 'components/parallax/useRelativeSize';

const heightPadding = 24;

const ParallaxContainer = ({ component }) => {
  const { internalName, title, parallaxItems, desktopSize = 'lg', tabletSize = 'sm', mobileSize = 'lg' } = component;

  const largeMobile = mobileSize === 'lg';
  const isMobile = useMediaQuery(media.max('sm')) && largeMobile;

  const height = Math.max(...parallaxItems.map(item => item?.fields?.image?.fields?.file?.details?.image?.height));

  const relativeHeight = useRelativeSize(height) + heightPadding;

  return parallaxItems?.length ? (
    <ParallaxContainerStyles
      className={`parallax-container desktop-${desktopSize} tablet-${tabletSize} mobile-${mobileSize}`}
      height={`${isMobile ? relativeHeight * 2 : relativeHeight}px`}
      role="img"
      aria-label={title || internalName || 'parallax container'}
    >
      {parallaxItems.map(parallax => (
        <ParallaxItem key={parallax?.fields?.internalName} component={parallax.fields} largeMobile={isMobile} />
      ))}
    </ParallaxContainerStyles>
  ) : (
    <></>
  );
};

export default ParallaxContainer;
