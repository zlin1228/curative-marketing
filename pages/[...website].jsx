import React from 'react';
import { SSRProvider } from 'react-bootstrap';
import { useSessionStorage } from 'react-use';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Custom404 from 'components/custom404/custom404.component';
import CustomMembership from 'components/customMembershipAccess/customMembership.component';
import AutoModal from 'components/modal/AutoModal';

import setNoIndex from 'utils/addNoIndex';
import client from 'utils/client';
import componentGenerator from 'utils/componentGenerator';

const Website = ({ data, seo, slug, password, login, custom404Data, modal }) => {
  const [hasAccess, setHasAccess] = useSessionStorage('logged-in', false);

  if (!data) {
    return <Custom404 {...custom404Data} />;
  }

  if (password && !hasAccess) {
    return <CustomMembership membershipData={login} password={password} setHasAccess={setHasAccess} />;
  }

  return (
    <SSRProvider>
      <Layout>
        <SEO
          title={seo?.fields?.title}
          description={seo?.fields?.description}
          keywords={seo?.fields?.keywords || ['Curative']}
          canonical={seo?.fields?.canonical || `https://curative.com${slug}`}
          image={seo?.fields?.openGraphImage?.fields?.file?.url}
          noIndex={seo?.fields?.no_index || null}
          noFollow={seo?.fields?.no_follow || null}
          schema={seo?.fields?.schema || null}
        />
        {componentGenerator(data, slug, seo)}
      </Layout>
      {modal && <AutoModal {...modal.fields} />}
    </SSRProvider>
  );
};

export const getServerSideProps = async ({ params, locale, req }) => {
  const res = await client.getEntries({
    content_type: 'page',
    'fields.slug[in]': '/' + params.website.join('/'),
    include: 10,
    locale,
  });

  const resLogin = await client.getEntries({
    content_type: 'templateLogin',
    include: 10,
    'fields.internalName': 'Employee Login',
    limit: 1,
    locale,
  });

  const fields = res?.items[0]?.fields;
  setNoIndex(req?.headers?.host, fields?.seo?.fields);
  const isSamplePage = req?.headers?.host.includes('curative.com') && params.website.join('/').includes('test');

  if (fields && !isSamplePage) {
    return {
      props: {
        data: fields?.content || null,
        seo: fields?.seo || null,
        password: fields?.password || null,
        login: resLogin.items[0]?.fields || null,
        slug: '/' + params.website.join('/'),
        modal: fields?.modal,
      },
    };
  } else {
    const res404 = await client.getEntries({
      content_type: 'template404',
      include: 10,
      'fields.internalName': '404 Page Data',
      limit: 1,
      locale,
    });

    return {
      props: {
        custom404Data: {
          ...res404?.items[0]?.fields,
        },
      },
    };
  }
};

export default Website;
