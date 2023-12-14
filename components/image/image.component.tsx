import Image from 'next/image';

import { ImageWrapper } from 'components/image/image.styles';
import PopupImage from 'components/modal/PopupImage';

const ComponentImage = ({
  src,
  alt,
  layout,
  objectFit,
  aspectRatio,
  width,
  height,
  maxWidth,
  loading,
  position,
  popupImage,
  ...props
}) => {
  const image = (
    <ImageWrapper
      aspectRatio={aspectRatio || 'auto'}
      width={width || 'auto'}
      height={height || 'auto'}
      maxWidth={maxWidth || '100%'}
      position={position || 'relative'}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        layout={layout || 'fill'}
        objectFit={objectFit || 'contain'}
        objectPosition="center"
        loading={loading || 'lazy'}
      />
    </ImageWrapper>
  );

  return popupImage ? <PopupImage image={image} /> : image;
};

export default ComponentImage;
