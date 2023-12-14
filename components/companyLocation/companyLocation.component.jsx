import AccentCorner from 'components/accentCorner/accentCorner.component';
import Button from 'components/button/button.component';
import { ContentWrapper, LocationLink } from 'components/companyLocation/companyLocation.styles';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';
import { SwitchbackStyles } from 'components/switchback/switchback.styles';

import { getColor } from 'utils/colorUtils';
import { generateProps } from 'utils/componentGenerator';

const CompanyLocation = ({ component }) => {
  const { image, locations, cornerAccents, heading, backgroundColor, button } = component;

  const colors = getColor(backgroundColor);

  const contentContainerColor = colorMap.right;

  return (
    <SwitchbackStyles theme={contentContainerColor} color={colors} reversed={false}>
      <div className="wrapper">
        <ContentWrapper>
          {heading && <h2>{heading}</h2>}
          {image?.fields?.file?.url && (
            <ComponentImage
              src={`https:${image?.fields?.file?.url}`}
              alt={image?.fields?.title}
              width={image?.fields?.file?.details?.image?.width}
              height={image?.fields?.file?.details?.image?.height}
            />
          )}
        </ContentWrapper>
        <div className="content-side location-list">
          {locations &&
            locations.map(location => (
              <ComponentLink
                href={`https://book.curative.com/search#${location?.fields?.zoom}/${location?.fields?.coordinates?.lat}/${location?.fields?.coordinates?.lon}`}
                key={location?.fields?.label}
              >
                <LocationLink>{location?.fields?.label}</LocationLink>
              </ComponentLink>
            ))}
          <p className="more-text">And more...</p>
          {button && <Button {...generateProps(button)} />}
          <span className="hover-icon" />
          {cornerAccents &&
            cornerAccents.length > 0 &&
            cornerAccents.map((accent, index) => <AccentCorner key={index} component={accent.fields} />)}
        </div>
      </div>
    </SwitchbackStyles>
  );
};

export default CompanyLocation;
