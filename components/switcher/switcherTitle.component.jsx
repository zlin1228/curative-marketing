import { FiChevronRight } from 'react-icons/fi';

import colorMap from 'atoms/colors/colors';

import ComponentImage from 'components/image/image.component';
import { FeatureTitle } from 'components/switcher/switcher.styles';

import { getColor } from 'utils/colorUtils';

const Title = ({
  heading,
  icon,
  iconSize = 60,
  backgroundColor,
  textColor,
  titleSize,
  titleWeight,
  endIcon = false,
  isSelected = false,
  activeTabBackgroundColor,
  activeTabTextColor,
}) => (
  <FeatureTitle
    className="tab-title"
    backgroundColor={backgroundColor}
    textColor={getColor(textColor, colorMap.black)}
    titleSize={titleSize}
    titleWeight={titleWeight}
    isSelected={isSelected}
    activeTabBackgroundColor={activeTabBackgroundColor}
    activeTabTextColor={activeTabTextColor}
  >
    <div className="title-group">
      {icon?.fields?.file?.url && (
        <ComponentImage
          src={`https:${icon?.fields?.file?.url}`}
          alt={icon?.fields?.file?.title || 'Switcher Icon'}
          width={iconSize}
          height={iconSize}
        />
      )}
      <h3 className="title">{heading}</h3>
    </div>
    {endIcon && (
      <span className={`arrowIcon ${isSelected && 'expand'}`}>
        <FiChevronRight />
      </span>
    )}
  </FeatureTitle>
);

export default Title;
