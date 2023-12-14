import colorMap from 'atoms/colors/colors';

import Column from 'components/column/column.component';
import PageContainer from 'components/container/container.component';
import { ColumnsWrapper, PrivacyBar, Wrapper } from 'components/footer/footer.styles';
import FooterBadge from 'components/footer/footerBadge.component';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';

const DefaultFooter = ({ component }) => {
  const {
    menu,
    logo: { fields: logo },
    privacyBar: { fields: privacyBar },
  } = component;

  const columnData = menu.map(item => ({
    id: item.sys.id,
    label: item.fields.label,
    contents: item.fields.content.map(links => links.fields),
  }));

  return (
    <PageContainer backgroundColor={colorMap.clearBlue[700]} footer>
      <Wrapper>
        {logo?.file?.url && (
          <ComponentImage
            className="footer--logo"
            src={`https:${logo.file?.url}`}
            alt={logo.title || 'Curative Logo'}
            width="50px"
            aspectRatio={1}
          />
        )}
        <ColumnsWrapper>
          {columnData?.map(column => (
            <Column key={column.id} component={{ column }} />
          ))}
        </ColumnsWrapper>
      </Wrapper>
      <PrivacyBar>
        <p>{privacyBar.copywrite}</p>
        {privacyBar?.links?.map(({ sys: { id }, fields: link }) => (
          <ComponentLink key={id} href={link.slug}>
            {link.label}
          </ComponentLink>
        ))}
        {privacyBar?.badges?.map(({ sys: { id }, fields: link }) => (
          <FooterBadge key={id} link={link} />
        ))}
      </PrivacyBar>
    </PageContainer>
  );
};

export default DefaultFooter;
