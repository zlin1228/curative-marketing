import { ContentWrapper } from 'components/form/form.styles';
import FormImage from 'components/form/formImage.component';
import HeadingFragment from 'components/heading/headingFragment.component';

import OptimizedHeading from 'utils/OptimizedHeading';
import { stringToKebabCase } from 'utils/textFunctions';

const FormContent = ({
  variant = 'switchback',
  kicker,
  heading,
  headingSize,
  bodyCopy,
  displayOnMobile,
  scrollPopout,
  image,
  imagePosition,
  isMobile,
  isDarkBackground,
  alignment = 'left',
}) => {
  const kebabPosition = stringToKebabCase(imagePosition);

  const contentImage = <FormImage image={image} displayOnMobile={displayOnMobile} scrollPopout={scrollPopout} />;

  return (
    <ContentWrapper className="content" isDarkBackground={isDarkBackground} alignment={alignment}>
      <HeadingFragment
        image={contentImage}
        kicker={kicker}
        heading={heading && <OptimizedHeading type={headingSize} string={heading} />}
        subheading={bodyCopy}
        imagePosition={imagePosition}
        noImage={variant === 'full' || (isMobile && kebabPosition === 'default')}
      />
    </ContentWrapper>
  );
};

export default FormContent;
