import { Col, Container, Row } from 'react-bootstrap';

import { RichTextStyles } from 'components/richtext/richtext.styles';

import OptimizedRichText from 'utils/OptimizedRichText';

const RichText = ({ component }) => {
  const { body } = component;

  return (
    <RichTextStyles>
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <div className="legal-content">{body && OptimizedRichText(body)}</div>
          </Col>
        </Row>
      </Container>
    </RichTextStyles>
  );
};

export default RichText;
