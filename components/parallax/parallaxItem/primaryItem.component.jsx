import ComponentImage from 'components/image/image.component';
import { getMobileWidth } from 'components/parallax/parallax.utils';
import useRelativeSize from 'components/parallax/useRelativeSize';

const PrimaryItem = ({ component, largeMobile }) => {
  const { image } = component;
  const { width, height } = image?.fields?.file?.details?.image || {};
  const relativeWidth = useRelativeSize(width);

  const imageWidth = largeMobile ? getMobileWidth(relativeWidth * 2) : relativeWidth;

  return (
    <ComponentImage src={`https:${image?.fields?.file?.url}`} alt="" aspectRatio={width / height} width={imageWidth} />
  );
};

export default PrimaryItem;
