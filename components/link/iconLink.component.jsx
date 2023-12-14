import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';

const IconLink = ({ href, icon, alt, width, height, ...props }) =>
  href && icon ? (
    <ComponentLink href={href} {...props}>
      <ComponentImage src={icon} alt={alt || 'Link Icon'} width={width} height={height || width} />
    </ComponentLink>
  ) : null;

export default IconLink;
