import { site } from 'utils/getCanonicalLink';
import { capitalize } from 'utils/textFunctions';

export const listingLimit = 12;
export const queryLimit = 1000;
export const isPost = slug => isNaN(parseInt(slug));
export const isCategory = (slug, categorySet) => categorySet.includes(slug);

const getUrl = (slug, base) => (slug ? `${site}${base}/${slug}` : `${site}${base}`);

const getExcerpt = (excerpt, base, slug) => {
  if (excerpt) {
    return `${excerpt}`;
  }

  const defaultExcerpt = ['Curative', capitalize(base)];

  if (slug && isPost(slug)) {
    defaultExcerpt.push('Article');
  }

  return defaultExcerpt.join(' ');
};

const getAuthor = author =>
  author
    ? {
        '@type': 'Person',
        name: `${author?.fields?.firstName} ${author?.fields?.lastName}`,
      }
    : { '@type': 'Organization', name: 'Team Curative' };

export const getArticleSchema = ({ title, excerpt, author, publishDate, featuredImage, language, slug, base }) => {
  const schema = {
    '@context': 'https://schema.org/',
    '@type': isPost(slug) ? 'Article' : 'Blog',
    name: title,
    about: { '@type': 'CreativeWork', name: getExcerpt(excerpt, base, slug) },
    author: getAuthor(author),
    datePublished: `${publishDate}`,
    headline: `${title}`,
    inLanguage: language,
    mainEntityOfPage: getUrl(slug, base),
    sourceOrganization: site,
    url: getUrl(slug, base),
  };
  if (featuredImage?.fields?.file?.url) {
    schema.image = featuredImage?.fields?.file?.url;
  }

  return JSON.stringify(schema);
};

export const getSliceLength = (isDesktop, isTablet, count) => {
  const { desktop, tablet, mobile } = count || {};
  if (isDesktop) {
    return desktop || 3;
  }
  if (isTablet) {
    return tablet || 2;
  }

  return mobile || 1;
};

export const getPaginationSpread = (pageArray, currentPage, totalPages) => {
  const start = pageArray.splice(0, 2),
    end = pageArray.splice(-2, 2),
    currentInStart = start.includes(currentPage),
    currentInEnd = end.includes(currentPage),
    inStartOrEnd = currentInStart || currentInEnd,
    currentCloseToStart = currentPage === 3,
    currentCloseToEnd = currentPage === totalPages - 2,
    closeToStartOrEnd = currentCloseToStart || currentCloseToEnd,
    getMiddleNumber = currentCloseToStart ? currentPage + 1 : currentPage - 1,
    getMiddle = closeToStartOrEnd ? getMiddleNumber : '...',
    first = inStartOrEnd || currentCloseToStart ? 3 : '...',
    second = !inStartOrEnd && !closeToStartOrEnd ? currentPage : getMiddle,
    third = inStartOrEnd || currentCloseToEnd ? totalPages - 2 : '...';

  return [...start, ...[first, second, third], ...end];
};

export const errorData = async destination => ({
  redirect: {
    permanent: true,
    destination: `/${destination}`,
  },
});
