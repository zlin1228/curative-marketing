import { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import colorMap from 'atoms/colors/colors';

import AccentCorner from 'components/accentCorner/accentCorner.component';
import Button from 'components/button/button.component';
import PageContainer from 'components/container/container.component';
import { HeadingStyles, HeadingSubHead } from 'components/heading/heading.styles';
import ComponentImage from 'components/image/image.component';
import useParallaxScroll from 'components/parallax/useParallaxScroll';

import OptimizedRichText from 'utils/OptimizedRichText';
import { getColor, isLight } from 'utils/colorUtils';
import { generateProps } from 'utils/componentGenerator';

const Heading = ({ component }) => {
  const {
    backgroundColor,
    eyebrowIcon: kickerIcon,
    kicker,
    kickerAlignment = 'center',
    heading,
    headingAlignment = 'center',
    subheading,
    subheadingAlignment = 'center',
    buttons,
    size,
    cornerAccents,
    featuredImage,
    animate = false,
    popupImage,
  } = component;

  const bgColor = getColor(backgroundColor);
  const isDarkMode = !isLight(bgColor);

  const parallaxRef = useRef(null);
  const transformDirection = 'Y';
  const delta = 30;

  useParallaxScroll(parallaxRef, transformDirection, delta, animate);

  return (
    <PageContainer backgroundColor={bgColor}>
      <HeadingStyles
        theme={size}
        darkMode={isDarkMode}
        ref={parallaxRef}
        kickerAlignment={kickerAlignment}
        headingAlignment={headingAlignment}
        buttonAlignment={subheadingAlignment}
      >
        <Container className="px-0">
          <Row className="justify-content-center align-items-center">
            <Col className="d-flex flex-column align-items-center">
              {kickerIcon && (
                <ComponentImage
                  className="kicker-icon"
                  src={`https:${kickerIcon?.fields?.file?.url}`}
                  alt={kickerIcon?.fields?.title}
                  width="100%"
                  aspectRatio={1}
                  maxWidth="80px"
                />
              )}
              {kicker && <div className="kicker">{kicker}</div>}
              {heading && <ReactMarkdown className="heading">{heading}</ReactMarkdown>}
              {subheading && (
                <HeadingSubHead theme={size} darkMode={isDarkMode} alignment={subheadingAlignment}>
                  {OptimizedRichText(subheading)}
                </HeadingSubHead>
              )}
              {featuredImage && (
                <ComponentImage
                  className="heading-featured-image"
                  src={`https:${featuredImage?.fields?.file?.url}`}
                  alt={featuredImage?.fields?.title}
                  aspectRatio={
                    featuredImage?.fields?.file?.details?.image?.width /
                    featuredImage?.fields?.file?.details?.image?.height
                  }
                  width="100%"
                  popupImage={popupImage}
                />
              )}
              {buttons && (
                <div className="heading-cta-container">
                  {buttons.map(button => {
                    const props = generateProps(button);

                    return <Button key={props.internalTitle} {...props} />;
                  })}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </HeadingStyles>
      {cornerAccents &&
        cornerAccents.length > 0 &&
        cornerAccents.map((accent, index) => (
          <AccentCorner
            key={index}
            component={accent.fields}
            accentColor={isDarkMode ? colorMap.skyBlue[500] : colorMap.signalOrange[400]}
          />
        ))}
    </PageContainer>
  );
};

export default Heading;
