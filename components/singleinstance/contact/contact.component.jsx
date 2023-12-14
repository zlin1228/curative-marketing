import { Col, Container, Row } from 'react-bootstrap';

import heartIcon from 'assets/images/heartIcon.svg';

import HubSpotForm from 'components/form/hubspotForm/hubSpotForm.component';
import ComponentImage from 'components/image/image.component';
import { ContactStyles } from 'components/singleinstance/contact/contact.styles';

import OptimizedRichText from 'utils/OptimizedRichText';
import { colorizeText } from 'utils/textFunctions';

const Contact = ({ component }) => {
  const { heading, body, formId, textAlignment } = component;

  return (
    <ContactStyles align={textAlignment}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={6}>
            <div className="heading-content">
              <span className="marker">
                <ComponentImage src={heartIcon} width={61} height={73} alt="Heart Icon" />
              </span>
              {heading && <h3 className="heading">{colorizeText(heading)}</h3>}
              {body && <div className="body-content">{OptimizedRichText(body)}</div>}
            </div>
          </Col>
          {formId && (
            <Col lg={6}>
              <div className="form-wrapper">
                <p className="kicker">For brokers and employers</p>
                <h5 className="title">
                  Make Curative a Health Plan for
                  <span className="colorizeText">Your Organization</span>
                </h5>
                <p className="subtitle">Fill out this form and one of our team members will be in touch.</p>
                <HubSpotForm formId={formId} redirected={true} />
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </ContactStyles>
  );
};

export default Contact;
