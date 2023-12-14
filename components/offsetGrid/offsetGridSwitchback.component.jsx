import { Col, Row } from 'react-bootstrap';

const SwitchbackOffsetGrid = ({ contentSection, gridSection, reverse, ...props }) => (
  <Row className="grid-container justify-content-center align-items-center" {...props}>
    <Col lg={reverse ? { order: 2, span: 6 } : { order: 1, span: 6 }} md={{ order: 1, span: 12 }}>
      {contentSection}
    </Col>
    <Col lg={reverse ? { order: 1, span: 6 } : { order: 2, span: 6 }} md={{ order: 2, span: 12 }} className="px-4">
      {gridSection}
    </Col>
  </Row>
);

export default SwitchbackOffsetGrid;
