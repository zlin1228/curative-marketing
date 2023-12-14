import ReactMarkdown from 'react-markdown';

import ComponentImage from 'components/image/image.component';
import { OffsetGridItem } from 'components/offsetGrid/offsetGrid.styles';
import InlineTooltip from 'components/tooltip/tooltip.component';

import OptimizedRichText from 'utils/OptimizedRichText';
import { getColor } from 'utils/colorUtils';

const DefaultItem = ({ backgroundColor, icon, heading, subheading, tooltip, theme }) => (
  <OffsetGridItem theme={theme} backgroundColor={getColor(backgroundColor, 'transparent')}>
    <div className="grid-item">
      {icon?.fields?.file?.url && (
        <ComponentImage
          className="grid-img"
          src={`https:${icon?.fields?.file?.url}`}
          alt={icon?.fields?.title}
          width="100%"
          maxWidth="48px"
          aspectRatio={1}
        />
      )}
      <div className="grid-content">
        {heading && <ReactMarkdown className="item-heading">{heading}</ReactMarkdown>}
        {subheading && <div className="item-subhead">{OptimizedRichText(subheading)}</div>}
      </div>
    </div>
    {tooltip?.fields?.body && (
      <div className="grid-tooltip-wrapper">
        <InlineTooltip content={tooltip?.fields?.body} />
      </div>
    )}
  </OffsetGridItem>
);

export default DefaultItem;
