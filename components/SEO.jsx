import PropTypes from 'prop-types';
import React from 'react';

import Meta from 'components/meta';

const SEO = props => {
  const tags = props;

  return <Meta tags={tags} />;
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  title: 'Curative',
  keywords: ['Curative'],
  description: 'Curative',
  canonical: null,
  image: '',
  noIndex: false,
  noFollow: false,
  schema: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  canonical: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  noIndex: PropTypes.bool,
  noFollow: PropTypes.bool,
  schema: PropTypes.string,
};

export default SEO;
