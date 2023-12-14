import Head from 'next/head';
import React, { useEffect } from 'react';

import getUrlStrings from 'utils/getUrlStrings';

const Layout = ({ children, location, schema = [] }) => {
  const UTMs = location ? getUrlStrings(location.search) : {};

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const utmObj = {
    utm_campaign: UTMs.utm_campaign || '',
    utm_source: UTMs.utm_source || '',
    utm_medium: UTMs.utm_medium || '',
    utm_term: UTMs.utm_term || '',
    utm_content: UTMs.utm_content || '',
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('utms', JSON.stringify(utmObj));
    }
  }, [utmObj]);

  return (
    <>
      <Head>
        {schema.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <script key={`script-${index}`} type="application/ld+json">
            {item}
          </script>
        ))}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default Layout;
