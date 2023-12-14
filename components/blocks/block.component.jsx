import ReactMarkdown from 'react-markdown';

import { ItemBlockStyles } from 'components/blocks/block.styles';
import ComponentImage from 'components/image/image.component';

const ItemBlock = ({ component }) => (
  <ItemBlockStyles>
    {component?.icon && (
      <ComponentImage
        className="icon"
        src={`https:${component?.icon?.fields?.file?.url}`}
        alt={component?.icon?.fields?.title}
        width={32}
        height={32}
      />
    )}
    <div className="content">
      {component?.heading && <span className="title">{component?.heading}</span>}
      {component?.subheading && <ReactMarkdown className="subheading">{component?.subheading}</ReactMarkdown>}
    </div>
  </ItemBlockStyles>
);

export default ItemBlock;
