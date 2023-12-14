const getLocale = locale => {
  switch (locale) {
    case 'es':
      return 'Spanish';
    case 'zh':
      return 'Chinese';
    case 'en':
    default:
      return 'English';
  }
};

export default getLocale;
