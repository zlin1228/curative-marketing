import { useRouter } from 'next/router';
import React from 'react';
import { Col, Container, Row, SSRProvider } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import colorMap from 'atoms/colors/colors';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Button from 'components/button/button.component';
import ButtonWrapper from 'components/buttonWrapper/buttonWrapper.component';
import Carddeck from 'components/carddeck/carddeck.component';
import PageContainer from 'components/container/container.component';
import ConversionPanel from 'components/conversionpanel/conversionpanel.component';
import Footer from 'components/footer/footer.component';
import Header from 'components/header/header.component';
import { HeadingStyles, HeadingSubHead } from 'components/heading/heading.styles';

import { generateProps } from 'utils/componentGenerator';
import getLocale from 'utils/getLocale';
import { colorizeText } from 'utils/textFunctions';

const site = 'https://curative.com/';

const Custom404 = ({ header, footer, eyebrow, heading, subheading, cta, cardDeck, conversionPanel }) => {
  const { locale } = useRouter();
  const language = getLocale(locale);
  const headerProps = generateProps(header);
  const footerProps = generateProps(footer);
  const schema = {
    '@context': 'https://schema.org/',
    '@type': '404',
    name: 'Curative 404',
    author: { '@type': 'Organization', name: 'Team Curative' },
    headline: 'Curative 404',
    inLanguage: language,
    mainEntityOfPage: site,
    sourceOrganization: site,
    url: site,
  };

  return (
    <SSRProvider>
      <Layout>
        <SEO
          title="404 Error"
          description="Curative 404"
          keywords={['Curative', '404']}
          noIndex={true}
          noFollow={true}
          schema={schema}
        />
        <Header {...headerProps} key={header.fields.internalName} component={header.fields} />
        <PageContainer backgroundColor={colorMap.gray[100]}>
          <HeadingStyles theme="contained" isCorner={false}>
            <Container className="px-0">
              <Row className="justify-content-center align-items-center">
                <Col className="justify-content-center">
                  {eyebrow && <div className="eyebrow">{eyebrow}</div>}
                  {heading && <h1 className="heading">{colorizeText(heading)}</h1>}
                  {subheading && (
                    <HeadingSubHead>
                      <ReactMarkdown>{subheading}</ReactMarkdown>
                    </HeadingSubHead>
                  )}
                  {cta && (
                    <ButtonWrapper>
                      <Button component={cta.fields} key={cta.sys?.id} />
                    </ButtonWrapper>
                  )}
                </Col>
              </Row>
            </Container>
          </HeadingStyles>
        </PageContainer>
        {cardDeck && <Carddeck component={{ ...cardDeck.fields, backgroundColor: 'Gray/100' }} hasTopPadding={false} />}
        {conversionPanel && <ConversionPanel component={conversionPanel.fields} subheadMaxWidth="550px" />}
        <Footer {...footerProps} key={footer.fields.internalName} component={footer.fields} />
      </Layout>
    </SSRProvider>
  );
};

export default Custom404;
