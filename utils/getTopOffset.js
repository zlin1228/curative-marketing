import { useEffect } from 'react';
import { useState } from 'react';

export const getHeaderHeight = document => document.querySelector('.navigation-header')?.offsetHeight || 0;

const getAnnouncementBarHeight = document => document.querySelector('.announcement-bar')?.offsetHeight || 0;

export const useTopOffset = () => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(getHeaderHeight(document) + getAnnouncementBarHeight(document));
  }, [setTop]);

  return top;
};
