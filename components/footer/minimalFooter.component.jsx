import colorMap from 'atoms/colors/colors';

import PageContainer from 'components/container/container.component';
import { MinimalFooterStyles, PrivacyBar } from 'components/footer/footer.styles';
import FooterBadge from 'components/footer/footerBadge.component';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';

const MinimalFooter = ({ component }) => {
  const {
    logo: { fields: logo },
    privacyBar: { fields: privacyBar },
  } = component;

  return (
    <PageContainer backgroundColor={colorMap.clearBlue[700]} footer>
      <PrivacyBar>
        <MinimalFooterStyles>
          {logo && (
            <ComponentImage
              className="footer--logo"
              src={`https://${logo.file?.url}`}
              alt={logo.title || 'Curative Logo'}
              aspectRatio={logo.file?.details?.image?.width / logo.file?.details?.image?.height}
            />
          )}
          <div className="badge-wrapper">
            {privacyBar?.badges?.map(({ sys: { id }, fields: link }) => (
              <FooterBadge key={id} link={link} />
            ))}
          </div>
          <div className="links-wrapper">
            <p>{privacyBar.copywrite}</p>
            {privacyBar?.links?.map(({ sys: { id }, fields: link }) => (
              <ComponentLink key={id} href={link.slug}>
                {link.label}
              </ComponentLink>
            ))}
          </div>
        </MinimalFooterStyles>
      </PrivacyBar>
    </PageContainer>
  );
};

export default MinimalFooter;
