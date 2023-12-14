import { Col, Container, Row } from 'react-bootstrap';

import { ContentBlockStyles } from 'components/contentblock/contentblock.styles';

import OptimizedRichText from 'utils/OptimizedRichText';
import { getColor } from 'utils/colorUtils';

const ContentBlock = ({ component }) => {
  const { backgroundColor, content } = component;

  const bgColor = getColor(backgroundColor, '');

  return (
    <ContentBlockStyles backgroundColor={bgColor}>
      <Container>
        <Row>
          <Col>{content && <div className="subhead">{OptimizedRichText(content)}</div>}</Col>
        </Row>
      </Container>
    </ContentBlockStyles>
  );
};

export default ContentBlock;
