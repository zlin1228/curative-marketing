import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import { FullFeatureStyles } from 'components/fullfeature/fullfeature.styles';
import ComponentImage from 'components/image/image.component';

import OptimizedRichText from 'utils/OptimizedRichText';
import ReverseChildren from 'utils/reverseChildren';

const FullFeature = ({ component }) => {
  const {
    heading,
    content,
    icon,
    subheading,
    footnote,
    footnoteFontSize,
    headingAlignment,
    subheadingAlignment,
    contentAlignment,
  } = component;

  return (
    <FullFeatureStyles
      footnoteFontSize={footnoteFontSize}
      headingAlignment={headingAlignment}
      subheadingAlignment={subheadingAlignment}
      contentAlignment={contentAlignment}
    >
      <Container>
        <Row>
          <Col>{heading && <ReactMarkdown className="heading">{heading}</ReactMarkdown>}</Col>
        </Row>
        <Row className="subhead-content">
          <ReverseChildren reversed={subheadingAlignment === 'right'}>
            <Col lg="auto" md="auto" sm={12}>
              {subheading && <div className={`subhead${icon ? ' with-icon' : ''}`}>{subheading}</div>}
            </Col>
            <Col lg="auto" md="auto" sm={12}>
              {icon && (
                <ComponentImage
                  src={`https:${icon?.fields?.file?.url}`}
                  alt={icon?.fields?.title}
                  width={160}
                  height={73}
                />
              )}
            </Col>
          </ReverseChildren>
        </Row>
        <Row>
          <Col>
            {content && <div className="content">{OptimizedRichText(content)}</div>}
            {footnote && <div className="footnote">{OptimizedRichText(footnote)}</div>}
          </Col>
        </Row>
      </Container>
    </FullFeatureStyles>
  );
};

export default FullFeature;
