import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';

const FooterBadge = ({ link }) => (
  <div className="badge-container">
    <ComponentImage
      className="badge-image-container"
      src={`https:${link?.icon?.fields?.file?.url}`}
      alt={link?.icon?.fields?.title || 'footer-badge'}
      width={40}
      height={40}
    />
    <ComponentLink href={link.slug} key={link.label}>
      {link.label}
    </ComponentLink>
  </div>
);

export default FooterBadge;
