import 'styles/layout.scss';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import theme from 'src/theme/theme';
import GlobalStyle from 'styles/global';

import { useApollo } from 'lib/graphClient';

import 'src/assets/fonts/fonts.css';

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PQMT7CB');`,
          }}
        ></script>
        <script async type="text/javascript" src="/hash-router-redirect.js"></script>
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html:
            '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQMT7CB" height="0" width="0" style="display:none;visibility:hidden" />',
        }}
      />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
      <GlobalStyle />
    </>
  );
};

export default MyApp;
