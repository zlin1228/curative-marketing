import { Wrapper } from 'components/feature/feature.styles';
import ComponentImage from 'components/image/image.component';

// Double check h3 sizes... Might need to adjust if different from global
const Feature = ({ component }) => {
  const { heading, subheading, icon } = component;

  return (
    <Wrapper>
      <ComponentImage
        src={icon?.url}
        alt={icon?.title}
        width={icon?.width} /* Maybe hard code size */
        height={icon?.height}
      />
      <div>
        <h3>{heading}</h3>
        <p>{subheading}</p>
      </div>
    </Wrapper>
  );
};

export default Feature;
