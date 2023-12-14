const setNoIndex = (host, seoFields) => {
  const noIndexDomains = ['marketing.prepod.curative.com', 'preview-curative.vercel.app', 'curative.vercel.app'];
  if (noIndexDomains.includes(host) && seoFields) {
    seoFields.no_index = true;
    seoFields.no_follow = true;
  }
};
export default setNoIndex;
