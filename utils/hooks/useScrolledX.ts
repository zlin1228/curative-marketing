import { useEffect, useState } from 'react';

import type { RefObject } from 'react';

const useScrolledX = (ref: RefObject<HTMLDivElement>) => {
  const [scrolled, setScrolled] = useState({ left: true, right: false });

  const handleScroller = () => {
    const scroller = ref?.current;
    const rect = scroller && scroller?.getBoundingClientRect();
    const scrollWidth = scroller && scroller?.scrollWidth;
    const scrollLeft = scroller && scroller?.scrollLeft;

    setScrolled({
      left: scrollLeft === 0,
      right: scrollLeft >= scrollWidth - rect?.width,
    });
  };

  useEffect(() => {
    ref?.current.addEventListener('scroll', () => handleScroller());

    return () => {
      ref?.current.removeEventListener('scroll', () => handleScroller());
    };
  }, []);

  return scrolled;
};

export default useScrolledX;
