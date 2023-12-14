import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import HeadingFragment from 'components/heading/headingFragment.component';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';
import { OffsetGridCardStyles } from 'components/offsetGrid/offsetGrid.styles';

import { getColor } from 'utils/colorUtils';

const OffsetGridCard = ({ media, heading, link, backgroundColor, body }) => {
  const mediaImage =
    media?.fields?.desktopIcon?.fields?.file?.url ||
    media?.fields?.desktopImage?.fields?.file?.url ||
    media?.fields?.image?.fields?.file?.url;

  return (
    <OffsetGridCardStyles backgroundColor={getColor(backgroundColor)}>
      <ComponentLink href={link}>
        {mediaImage && (
          <ComponentImage
            className="image-wrapper"
            src={`https:${mediaImage}`}
            alt={media?.fields?.desktopIcon?.fields?.title}
            width={48}
            height={48}
          />
        )}
        <HeadingFragment heading={heading && <ReactMarkdown>{heading}</ReactMarkdown>} subheading={body} />
      </ComponentLink>
    </OffsetGridCardStyles>
  );
};

export default OffsetGridCard;
