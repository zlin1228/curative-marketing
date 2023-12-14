import { FollowIconsWrapper } from 'components/followIcons/followIcons.styles';
import IconLink from 'components/link/iconLink.component';

const FollowIcons = ({ heading, followLinks, inline = false }) => (
  <FollowIconsWrapper inline={inline} className="follow-us-container">
    {heading && <h3 className="follow-us-heading">{heading}</h3>}
    {followLinks && (
      <div className="d-flex flex-row follow-row">
        {followLinks.map(
          ({ sys: { id }, fields: { slug, icon, label } }) =>
            slug && (
              <div className="follow-link-container" key={id}>
                <IconLink
                  href={slug}
                  icon={`https://${icon?.fields?.file?.url}`}
                  alt={label}
                  width={28}
                  target="_blank"
                />
              </div>
            ),
        )}
      </div>
    )}
  </FollowIconsWrapper>
);

export default FollowIcons;
