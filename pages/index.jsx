import React from 'react';
import { SSRProvider } from 'react-bootstrap';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import AutoModal from 'components/modal/AutoModal';

import setNoIndex from 'utils/addNoIndex';
import client from 'utils/client';
import componentGenerator from 'utils/componentGenerator';

const Index = ({ data, seo, slug, modal }) => (
  <SSRProvider>
    <Layout>
      <SEO
        title={seo?.fields?.title}
        description={seo?.fields?.description}
        keywords={seo?.fields?.keywords || ['Curative']}
        image={seo?.fields?.openGraphImage?.fields?.file?.url}
        canonical={seo?.fields?.canonical || 'https://curative.com/'}
        noIndex={seo?.fields?.no_index || null}
        noFollow={seo?.fields?.no_follow || null}
        schema={seo?.fields?.schema || null}
      />
      {componentGenerator(data, slug, seo)}
    </Layout>
    {modal && <AutoModal {...modal} />}
  </SSRProvider>
);

export const getServerSideProps = async ({ locale, req }) => {
  const res = await client.getEntries({
    content_type: 'page',
    'fields.slug[in]': 'homepage,/',
    include: 10,
    locale,
  });

  const fields = res?.items[0]?.fields;
  setNoIndex(req?.headers?.host, fields?.seo?.fields);

  return {
    props: {
      data: fields?.content || null,
      seo: fields?.seo || null,
      slug: 'homepage',
      modal: fields?.modal?.fields,
    },
  };
};

export default Index;
