import ComponentImage from 'components/image/image.component';
import ParallaxContainer from 'components/parallax/parallaxContainer/parallaxContainer.component';

const FormImage = ({ image, displayOnMobile, scrollPopout }) => {
  if (!image?.fields || !displayOnMobile || scrollPopout) {
    return null;
  }

  return (
    <div className="image-wrapper">
      {image.fields.parallaxItems && <ParallaxContainer component={image.fields} />}
      {image.fields.image && (
        <ComponentImage
          className="form-image"
          src={`https:${image.fields.image.fields?.file?.url}`}
          alt={image.fields.image.fields?.title || 'form image'}
          aspectRatio={
            image.fields.image.fields?.file?.details?.image?.width /
            image.fields.image.fields?.file?.details?.image?.height
          }
          width="100%"
        />
      )}
    </div>
  );
};

export default FormImage;
