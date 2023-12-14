import cookie from 'cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row, SSRProvider } from 'react-bootstrap';

import colorMap from 'atoms/colors/colors';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import AccentCorner from 'components/accentCorner/accentCorner.component';
import { StyledButton } from 'components/button/button.styles';
import PageContainer from 'components/container/container.component';
import { CustomMembershipStyles, LoginCard } from 'components/customMembershipAccess/customMembership.styles';
import Footer from 'components/footer/footer.component';
import Header from 'components/header/header.component';
import ComponentImage from 'components/image/image.component';

import { getButtonColor } from 'utils/colorUtils';
import { generateProps } from 'utils/componentGenerator';
import getLocale from 'utils/getLocale';
import { getLoginCookie } from 'utils/getLoginCookie';

const site = 'https://curative.com/';

const CustomMembership = ({ membershipData, password, setHasAccess }) => {
  const { header, footer, icon, heading, subheading, cornerAccents } = membershipData;
  const { locale } = useRouter();
  const language = getLocale(locale);
  const headerProps = generateProps(header);
  const footerProps = generateProps(footer);

  useEffect(() => {
    if (getLoginCookie(document)) {
      setHasAccess(true);
    }
  });

  const schema = {
    '@context': 'https://schema.org/',
    name: 'Curative Membership Access',
    author: { '@type': 'Organization', name: 'Team Curative' },
    headline: 'Curative Membership Access',
    inLanguage: language,
    mainEntityOfPage: site,
    sourceOrganization: site,
    url: site,
  };

  const inputRef = useRef(null);
  const [authStatus, setAuthStatus] = useState('initial');
  const descriptionMap = {
    initial: '',
    fail: 'Incorrect password',
    success: 'Successful password',
  };
  const authenticate = () => {
    const enteredPassword = inputRef.current['password'].value;
    const isRemember = inputRef.current['remember'].checked;

    if (enteredPassword === password) {
      if (isRemember) {
        document.cookie = cookie.serialize('curative_authorized', '1', {
          sameSite: true,
          path: '/',
          maxAge: 30 * 24 * 60 * 60,
        });
      }

      setAuthStatus('success');
      setHasAccess(true);
    } else {
      setAuthStatus('fail');
    }
  };

  return (
    <SSRProvider>
      <Layout>
        <SEO
          title="Membership Access"
          description="Curative Membership Access"
          keywords={['Curative']}
          noIndex={true}
          noFollow={true}
          schema={schema}
        />
        <Header {...headerProps} key={header.fields.internalName} component={header.fields} />
        <PageContainer backgroundColor={colorMap.offWhite[50]}>
          {cornerAccents &&
            cornerAccents.length > 0 &&
            cornerAccents.map((accent, index) => (
              <AccentCorner className="accent-corner" key={index} component={accent.fields} />
            ))}
          <CustomMembershipStyles>
            <Container className="px-0">
              <Row className="justify-content-center align-items-center mb-3">
                {icon && (
                  <ComponentImage
                    src={`https:${icon?.fields?.file?.url}`}
                    alt={icon?.fields?.fields?.title}
                    width={48}
                    height={48}
                  />
                )}
              </Row>
              <Row className="justify-content-center align-items-center mb-3">
                <Col>
                  {heading && <h2>{heading}</h2>}
                  {subheading && <p>{subheading}</p>}
                </Col>
              </Row>
              <Row className="justify-content-center align-items-center mb-3">
                <LoginCard>
                  {descriptionMap && descriptionMap[authStatus] && <p>{descriptionMap[authStatus]}</p>}
                  <form ref={inputRef} onSubmit={authenticate}>
                    <label>Password</label>
                    <input className="password-input" type="password" id="pass" name="password" required />
                    <input className="remember-input" type="checkbox" id="remember" name="remember" />
                    <label>Remember for 30 days</label>
                    <StyledButton
                      className="sign-in-button"
                      colorMap={getButtonColor('primary-blue')}
                      buttonStyle="solid"
                      type="submit"
                      disabled={false}
                      onClick={authenticate}
                    >
                      Sign in
                    </StyledButton>
                  </form>
                </LoginCard>
              </Row>
            </Container>
          </CustomMembershipStyles>
        </PageContainer>
        <Footer {...footerProps} key={footer.fields.internalName} component={footer.fields} />
      </Layout>
    </SSRProvider>
  );
};

export default CustomMembership;
