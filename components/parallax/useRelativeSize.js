import { useWindowSize } from 'react-use';

import { breakpointValues, media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

const desktopSize = breakpointValues.xl;
const tabletSize = breakpointValues.md;
const mobileSize = breakpointValues.xs;

const useWindowWidth = () => {
  const isDesktop = useMediaQuery(media.lg);
  const isTablet = useMediaQuery(media.sm);
  const { width } = useWindowSize(1440);

  let fallback = isTablet ? tabletSize : mobileSize;
  fallback = isDesktop ? desktopSize : fallback;

  return Math.min(width, fallback);
};

/**
 * @param {number} value the original dimension
 * @returns {number} a new dimension relative to the current width of the window
 */
const useRelativeSize = value => (useWindowWidth() / desktopSize) * value;

export default useRelativeSize;
