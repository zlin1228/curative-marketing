import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import colorMap from 'atoms/colors/colors';

import LargeCard from 'components/card/largecard.component';
import LinkCard from 'components/card/linkcard.component';
import PricingCard from 'components/card/pricingCard.component';
import ServiceCard from 'components/card/servicecard.component';
import SimpleCard from 'components/card/simplecard.component';
import SpeakerCard from 'components/card/speakerCard.component';
import TeamCard from 'components/card/teamcard.component';
import TestimonialCard from 'components/card/testimonialcard.component';
import { CarddeckStyles } from 'components/carddeck/carddeck.styles';
import HeadingFragment from 'components/heading/headingFragment.component';

import OptimizedRichText from 'utils/OptimizedRichText';
import { getColor, isLight } from 'utils/colorUtils';

const Carddeck = ({ component, hasTopPadding = true }) => {
  const {
    kicker,
    alignment,
    heading,
    subheading,
    subheadingBelowCardDeck,
    backgroundColor,
    variant,
    reference,
    columnCount,
    speakerHeading,
  } = component;

  const bgColor = getColor(backgroundColor, colorMap.gray[25]);
  const isDark = !isLight(bgColor);

  const getCard =
    reference &&
    (() => {
      switch (variant) {
        case 'Testimonials':
          return <TestimonialCard cards={reference} />;
        case 'Simple':
          return <SimpleCard cards={reference} className="justify-content-center" />;
        case 'Large':
          return <LargeCard cards={reference} />;
        case 'Services':
          return <ServiceCard cards={reference} />;
        case 'Team':
          return <TeamCard cards={reference} />;
        case 'Link (Image)':
        case 'Link (Icon)':
          return <LinkCard cards={reference} columnCount={columnCount} variant={variant} />;
        case 'Speaker':
          return <SpeakerCard reference={reference} heading={speakerHeading} />;
        default:
          return null;
      }
    });

  return (
    <CarddeckStyles
      bgColor={bgColor}
      darkMode={isDark}
      hasTopPadding={hasTopPadding}
      alignment={alignment?.toLowerCase() || 'center'}
    >
      <Container>
        {heading && (
          <Row>
            <Col lg={12}>
              {kicker && <div className="kicker">{kicker}</div>}
              <div className="heading-content">
                <HeadingFragment
                  heading={heading && <ReactMarkdown>{heading}</ReactMarkdown>}
                  subheading={!subheadingBelowCardDeck && subheading}
                />
              </div>
            </Col>
          </Row>
        )}
        {variant !== 'Pricing' && getCard()}
        {subheadingBelowCardDeck && subheading && (
          <Row>
            <Col lg={12} className="mt-4">
              <div className="heading-content">
                <div className="subhead">{OptimizedRichText(subheading)}</div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
      {variant === 'Pricing' && <PricingCard cards={reference} />}
    </CarddeckStyles>
  );
};

export default Carddeck;
