import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import colorMap from 'atoms/colors/colors';

import { ConversionPanelStyles } from 'components/conversionpanel/conversionpanel.styles';
import HeadingFragment from 'components/heading/headingFragment.component';
import ParallaxContainer from 'components/parallax/parallaxContainer/parallaxContainer.component';

import { getColor } from 'utils/colorUtils';

const ConversionPanel = ({ component, subheadMaxWidth = '770px' }) => {
  const { backgroundColor, backgroundImage, mobileImage, tabletImage, heading, subheading, parallax } = component;

  const bgColor = getColor(backgroundColor, colorMap.offWhite[50]);

  return (
    <ConversionPanelStyles
      backgroundColor={bgColor}
      backgroundImg={backgroundImage?.fields?.file?.url}
      tabletImage={tabletImage?.fields?.file?.url}
      mobileImage={mobileImage?.fields?.file?.url}
      subheadMaxWidth={subheadMaxWidth}
    >
      <Container>
        <Row>
          <Col>
            <HeadingFragment
              heading={heading && <ReactMarkdown className="heading">{heading}</ReactMarkdown>}
              subheading={subheading}
            />
          </Col>
        </Row>
      </Container>
      {parallax && <ParallaxContainer component={parallax.fields} />}
    </ConversionPanelStyles>
  );
};

export default ConversionPanel;
