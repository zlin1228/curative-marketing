import ComponentImage from 'components/image/image.component';

const FeaturedContent = ({ component, reversed }) => {
  const { width, height } = component?.fields?.image?.fields?.file?.details?.image || {};

  const type = component?.sys?.contentType?.sys?.id;

  switch (type) {
    case 'component_image':
      return (
        <ComponentImage
          src={`https:${component?.fields?.image?.fields?.file?.url}`}
          alt={component?.fields?.image?.fields?.title}
          width="100%"
          aspectRatio={width / height}
        />
      );
    case 'backgroundImage':
      return (
        <ComponentImage
          src={`https:${component?.fields?.image?.fields?.file?.url}`}
          alt={component?.fields?.image?.fields?.title}
          aspectRatio={width / height}
          width="100%"
          tablet={{
            position: 'absolute',
            width: '50%',
            height: '100%',
            top: 0,
            left: !reversed && 0,
            right: reversed && 0,
          }}
        />
      );
    default:
      return null;
  }
};

export default FeaturedContent;
