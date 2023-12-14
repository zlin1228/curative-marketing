import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import colorMap from 'atoms/colors/colors';

import Card from 'components/card/detailcard.component';
import PageContainer from 'components/container/container.component';
import { DetailCardDeckStyles } from 'components/detail/detailCardDeck.styles';

import { colorizeText } from 'utils/textFunctions';

const DetailCardDeck = ({ relatedPosts, heading, headingClass, type, ...props }) => (
  <PageContainer backgroundColor={colorMap.offWhite[50]} {...props}>
    <DetailCardDeckStyles>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="deck-heading-container">
              <h2 className={`deck-heading ${headingClass}`}>{colorizeText(heading)}</h2>
            </div>
          </Col>
        </Row>
        <Card cards={relatedPosts} type={type} />
      </Container>
    </DetailCardDeckStyles>
  </PageContainer>
);

export default DetailCardDeck;
