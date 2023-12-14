export const site = 'https://curative.com/';

const getCanonicalLink = (slug, base, canonical) =>
  slug && isNaN(parseInt(slug)) ? canonical || `${site}${base}/${slug}` : `${site}${base}`;

export default getCanonicalLink;
