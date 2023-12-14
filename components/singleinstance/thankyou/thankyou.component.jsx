import { Col, Container, Row } from 'react-bootstrap';

import { ThankyouStyles } from 'components/singleinstance/thankyou/thankyou.styles';

import OptimizedRichText from 'utils/OptimizedRichText';

const Thankyou = ({ component }) => {
  const { eyebrow, heading, body, textAlignment } = component;

  return (
    <ThankyouStyles align={textAlignment}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="heading-content">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {heading && <h3 className="heading">{heading}</h3>}
              {body && <div className="body-content">{OptimizedRichText(body)}</div>}
            </div>
          </Col>
        </Row>
      </Container>
    </ThankyouStyles>
  );
};

export default Thankyou;
