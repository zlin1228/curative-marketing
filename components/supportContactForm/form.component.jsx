import colorMap from 'atoms/colors/colors';

import Container from 'components/container/container.component';
import { Wrapper } from 'components/supportContactForm/form.styles';
import SupportContactForm from 'components/supportContactForm/supportContactForm.component';

import OptimizedHeading from 'utils/OptimizedHeading';
import OptimizedRichText from 'utils/OptimizedRichText';

const SupportForm = ({ component }) => {
  const { heading, bodyCopy, headingSize, cornerImage } = component;

  return (
    <Container backgroundColor={colorMap.clearBlue[800]} accentImage={cornerImage} id="demo-form">
      <Wrapper>
        <div className="content">
          {heading && <OptimizedHeading type={headingSize} string={heading} />}
          {bodyCopy && OptimizedRichText(bodyCopy)}
        </div>
        <SupportContactForm />
      </Wrapper>
    </Container>
  );
};

export default SupportForm;
