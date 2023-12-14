import { useWindowSize } from '@react-hookz/web';
import { useEffect, useState } from 'react';

import { HEADER_ID } from 'utils/constants';

const useHeaderHeight = () => {
  const [height, setHeight] = useState(0);
  const { width } = useWindowSize();

  const handleHeaderHeight = () => {
    const header = document.getElementById(HEADER_ID);

    if (header) {
      const rect = header.getBoundingClientRect();
      setHeight(rect.height);
    }
  };

  const effect = () => {
    window.addEventListener('scroll', () => handleHeaderHeight());
    window.addEventListener('resize', () => handleHeaderHeight());

    return () => {
      window.removeEventListener('scroll', () => handleHeaderHeight());
      window.removeEventListener('resize', () => handleHeaderHeight());
    };
  };

  useEffect(effect, [width]);

  return height;
};

export default useHeaderHeight;
