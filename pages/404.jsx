import React from 'react';

import Custom404 from 'components/custom404/custom404.component';

import setNoIndex from 'utils/addNoIndex';
import client from 'utils/client';

const Custom404Page = ({ custom404Data }) => <Custom404 {...custom404Data} />;

export const getStaticProps = async ({ locale, req }) => {
  const res = await client.getEntries({
    content_type: 'template404',
    include: 10,
    'fields.internalName': '404 Page Data',
    limit: 1,
    locale,
  });

  setNoIndex(req?.headers?.host, res?.items[0]?.fields?.seo?.fields);

  return {
    props: {
      custom404Data: {
        ...res?.items[0]?.fields,
      },
    },
    revalidate: 60,
  };
};

export default Custom404Page;
