import { useRef } from 'react';
import { Col, Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import HeadingFragment from 'components/heading/headingFragment.component';
import ComponentImage from 'components/image/image.component';
import { MotionRow } from 'components/parallax/parallaxContainer/parallaxContainer.styles';
import useParallaxScroll from 'components/parallax/useParallaxScroll';
import { TrustBarStyles } from 'components/trustbar/trustbar.styles';

import { getColor } from 'utils/colorUtils';

const TrustBar = ({ component }) => {
  const { heading, subheading, companies, backgroundColor: backgroundKey, alignment, animate = false } = component;

  const backgroundColor = getColor(backgroundKey);

  const headingParallaxRef = useRef(null);
  const companiesParallaxRef = useRef(null);
  const transformDirection = 'Y';
  const headingDelta = 30;
  const companiesDelta = 60;

  useParallaxScroll(headingParallaxRef, transformDirection, headingDelta, animate);
  useParallaxScroll(companiesParallaxRef, transformDirection, companiesDelta, animate);

  return (
    <TrustBarStyles backgroundColor={backgroundColor} alignment={alignment}>
      <Container>
        <MotionRow ref={headingParallaxRef}>
          <Col lg={12}>
            <div className="heading-content">
              <HeadingFragment
                heading={heading && <ReactMarkdown className="heading">{heading}</ReactMarkdown>}
                subheading={subheading}
              />
            </div>
          </Col>
        </MotionRow>
        <MotionRow className="justify-content-between" ref={companiesParallaxRef}>
          {companies &&
            companies.map(item => (
              <Col lg="auto" md="auto" sm={6} xs={6} key={item?.fields?.heading}>
                <div className="company-item">
                  {item?.fields?.lightLogo && (
                    <ComponentImage
                      src={`https:${item?.fields?.lightLogo?.fields?.desktopImage?.fields?.file?.url}`}
                      alt={item?.fields?.lightLogo?.fields?.desktopImage?.fields?.title}
                      width={136}
                      height={136}
                    />
                  )}
                </div>
              </Col>
            ))}
        </MotionRow>
      </Container>
    </TrustBarStyles>
  );
};

export default TrustBar;
