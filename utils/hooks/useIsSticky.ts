import { useWindowSize } from '@react-hookz/web';
import { useEffect, useState } from 'react';

import type { RefObject } from 'react';

const useIsSticky = <T extends HTMLElement>(elementRef: RefObject<T>, top: number) => {
  const [scrolled, setScrolled] = useState(false);
  const { width } = useWindowSize();

  const handleIsSticky = () => {
    if (elementRef?.current) {
      const refTop = elementRef.current.getBoundingClientRect().top;
      setScrolled(Math.floor(refTop) <= top);
    }
  };

  const effect = () => {
    window.addEventListener('scroll', () => handleIsSticky());
    window.addEventListener('resize', () => handleIsSticky());

    return () => {
      window.removeEventListener('scroll', () => handleIsSticky());
      window.removeEventListener('resize', () => handleIsSticky());
    };
  };

  useEffect(effect, [width]);

  return scrolled;
};

export default useIsSticky;
