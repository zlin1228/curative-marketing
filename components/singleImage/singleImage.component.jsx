import { SingleImageStyles } from 'components/singleImage/singleImage.styles';

const SingleImage = ({ component }) => {
  const { desktopImage } = component;

  return <SingleImageStyles background={desktopImage?.fields?.file?.url} />;
};

export default SingleImage;
