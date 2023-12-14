import { Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import { BannerStyles } from 'components/banner/banner.styles';
import HeadingFragment from 'components/heading/headingFragment.component';
import ComponentImage from 'components/image/image.component';

import { getColor } from 'utils/colorUtils';

const Banner = ({ component }) => {
  const { heading, subheading, features, backgroundColor, alignment } = component;

  const bgColor = getColor(backgroundColor);

  return (
    <BannerStyles backgroundColor={bgColor} alignment={alignment}>
      <Container>
        {(heading || subheading) && (
          <Row>
            <Col lg={12}>
              <div className="heading-content">
                <HeadingFragment
                  heading={heading && <ReactMarkdown className="heading">{heading}</ReactMarkdown>}
                  subheading={subheading}
                />
              </div>
            </Col>
          </Row>
        )}
        {features && (
          <Row className="justify-content-center">
            {features.map(item => (
              <Col lg="auto" md="auto" sm={6} xs={6} key={item?.sys?.id}>
                <div className="featured-item">
                  {item?.fields?.icon && (
                    <ComponentImage
                      src={`https:${item?.fields?.icon?.fields?.file?.url}`}
                      alt={item?.fields?.icon?.fields?.title}
                      width={80}
                      height={80}
                    />
                  )}
                  {item?.fields?.heading && <p className="featured-heading">{item?.fields?.heading}</p>}
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </BannerStyles>
  );
};

export default Banner;
