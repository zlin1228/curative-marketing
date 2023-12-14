import { useEffect } from 'react';
import { useWindowSize } from 'react-use';

const clamp = percent => Math.max(0, Math.min(1, percent));

const useParallaxScroll = (parallaxRef, transformDirection, delta, active = true) => {
  const { height } = useWindowSize();
  useEffect(() => {
    if (active && parallaxRef?.current) {
      const { parentElement, style } = parallaxRef.current;
      const onScroll = () => {
        const containerHeight = parentElement.getBoundingClientRect().height;
        const containerBottom = parentElement.getBoundingClientRect().bottom;

        const relativePercent = clamp(1 - containerBottom / (containerHeight + height));

        const cur = delta * relativePercent;

        style.transform = `translate${transformDirection}(${cur}px)`;
      };
      window.addEventListener('scroll', onScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', onScroll, { passive: true });
      };
    }
  }, [parallaxRef, delta, height, transformDirection, active]);
};

export default useParallaxScroll;
