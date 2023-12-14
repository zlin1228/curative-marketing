const parseUrl = href => {
  if (!href || href === '#!') {
    return {
      as: 'div',
    };
  }

  const domain = 'curative.com';
  if (href.charAt(0) !== '/' && !href.includes('http') && !href.includes('tel:') && !href.includes('mailto:')) {
    href = `https://${domain}/${href}`;
  }
  if (href[0] === '/') {
    href = `https://${domain}${href}`;
  }

  try {
    const url = new URL(href);
    const isInternal = url.hostname === `www.${domain}` || url.hostname === domain;

    return {
      isInternal,
      rel: isInternal ? '' : 'noreferrer noopener',
      target: isInternal || href.includes('tel:') ? '' : '_blank',
      href: isInternal ? url.href.split(url.host)[1] : href,
    };
  } catch (error) {
    return {
      as: 'div',
    };
  }
};

export default parseUrl;
