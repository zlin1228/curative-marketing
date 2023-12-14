import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import Breadcrumbs from 'components/breadcrumbs/breadcrumbs';
import Button from 'components/button/button.component';
import PageContainer from 'components/container/container.component';
import HeadingFragment from 'components/heading/headingFragment.component';
import { HeroBackgroundImage, HeroStyles } from 'components/hero/hero.styles';
import { getAlignClasses } from 'components/hero/hero.utils';
import ParallaxContainer from 'components/parallax/parallaxContainer/parallaxContainer.component';

import { getColor } from 'utils/colorUtils';
import { generateProps } from 'utils/componentGenerator';
import getContentPosition from 'utils/getContentPosition';

const Hero = ({ component, breadcrumbs }) => {
  const {
    background,
    heading,
    kicker,
    subheading,
    buttons,
    backgroundImage,
    parallax,
    showBreadcrumbs,
    alignment = '',
    hideImagesOnMobile,
    imagePosition,
    theme,
  } = component;

  const { isDefault, isTop, isBottom } = getContentPosition(imagePosition);
  const backgroundColor = getColor(background, '');

  const alignClasses = getAlignClasses(alignment);
  const imageClasses = hideImagesOnMobile ? 'd-none d-sm-block' : '';

  const heroBackgroundImage = backgroundImage && (
    <HeroBackgroundImage className={imageClasses} image={backgroundImage} />
  );

  const heroParallax = parallax && (
    <Row className={`justify-content-center ${imageClasses}`}>
      <Col xs={12}>
        {isBottom && kicker && <div className="kicker">{kicker}</div>}
        <ParallaxContainer component={parallax.fields} />
      </Col>
    </Row>
  );

  return (
    <>
      {isTop && heroBackgroundImage}
      <PageContainer backgroundColor={backgroundColor}>
        <HeroStyles
          background={background}
          alignment={alignment.toLowerCase() || 'centered'}
          showBreadcrumbs={showBreadcrumbs}
          position={{ isDefault, isTop, isBottom }}
          theme={theme}
        >
          <Container className="px-0">
            {showBreadcrumbs && <Breadcrumbs pages={breadcrumbs} />}
            {!isDefault && heroParallax}
            <Row className={`pb-4 ${alignClasses}`}>
              <Col>
                <HeadingFragment
                  kicker={!isBottom && kicker}
                  heading={heading && <ReactMarkdown>{heading}</ReactMarkdown>}
                  subheading={subheading}
                />
                {buttons && (
                  <div className="button-container">
                    {buttons.map(button => {
                      const props = generateProps(button);

                      return <Button key={props.internalTitle} {...props} />;
                    })}
                  </div>
                )}
              </Col>
            </Row>
            {isDefault && heroParallax}
          </Container>
        </HeroStyles>
      </PageContainer>
      {!isTop && heroBackgroundImage}
    </>
  );
};

export default Hero;
