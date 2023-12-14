export const getLogo = (stickyState, curative, windowSize) => {
  const params = {
    logo: null,
    width: null,
    height: null,
  };
  if (windowSize.width >= 1200) {
    if (stickyState) {
      params.logo = curative?.fields?.darkLogo?.fields?.desktopIcon?.fields?.file?.url;
    } else {
      params.logo = curative?.fields?.lightLogo?.fields?.desktopIcon?.fields?.file?.url;
    }
    params.width = 170;
    params.height = 35;
  } else {
    if (stickyState) {
      params.logo = curative?.fields?.darkLogo?.fields?.tabletIcon?.fields?.file?.url;
    } else {
      params.logo = curative?.fields?.lightLogo?.fields?.tabletIcon?.fields?.file?.url;
    }
    params.width = 137;
    params.height = 29;
  }

  return params;
};

export const LOCALE_DATA = {
  'en-US': 'English',
  es: 'Spanish',
  zh: 'Chinese',
};

const MINUTE_MS = 60_000;
const EXPIRATION_MINUTES = 30;

const setLocaleCodeCookie = (localeCode, document) => {
  const expiration = new Date(Date.now() + EXPIRATION_MINUTES * MINUTE_MS);
  document.cookie = `locale=${localeCode}; expires=${expiration.toUTCString()}; domain=curative.com; path=/`;
};

export const handleLocale = (str, setLocale, document) => {
  setLocale(str);
  if (str === 'Spanish') {
    setLocaleCodeCookie('ES', document);
  }
  if (str === 'English') {
    setLocaleCodeCookie('EN', document);
  }
  if (str === 'Chinese') {
    setLocaleCodeCookie('ZH', document);
  }
};

export const setListeners = (window, setStickyState, setWindowSize) => {
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const scrollHandler = () => {
    if (window.scrollY > 1) {
      setStickyState(true);
    } else {
      setStickyState(false);
    }
  };

  handleResize();
  window.addEventListener('scroll', scrollHandler);
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('scroll', scrollHandler);
    window.removeEventListener('resize', handleResize);
  };
};
