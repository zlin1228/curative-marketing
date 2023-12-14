/* eslint-disable react/destructuring-assignment */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

import ItemBlock from 'components/blocks/block.component';
import Button from 'components/button/button.component';
import ButtonWrapper from 'components/buttonWrapper/buttonWrapper.component';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';
import InlineTooltip from 'components/tooltip/tooltip.component';
import Video from 'components/videoComponent/video.component';

import { generateProps } from 'utils/componentGenerator';
import { colorizeText } from 'utils/textFunctions';
import wrapRichTextElements from 'utils/wrapRichText';

const OptimizedRichText = contentObject => {
  const content = contentObject;
  const renderOptions = {
    renderText: text => colorizeText(text),
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.ITALIC]: text => <i>{text}</i>,
      [MARKS.UNDERLINE]: text => <span className="text-underline">{text}</span>,
      [MARKS.SUPERSCRIPT]: text => <sup>{text}</sup>,
      [MARKS.SUBSCRIPT]: text => <sub>{text}</sub>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.QUOTE]: (node, children) => <div className="quote">{children}</div>,
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (node.content.length === 1 && node.content[0].marks?.find(x => x.type === 'code')) {
          return <div>{children}</div>;
        }

        return <p>{children}</p>;
      },
      [BLOCKS.UL_LIST]: (node, children) => <ul className="ul-list">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="ol-list">{children}</ol>,
      [BLOCKS.HR]: (node, children) => <div className="hr">{children}</div>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        if (node?.data?.target?.fields?.file?.url) {
          const aspectRatio =
            node?.data?.target?.fields?.file?.details?.image?.width /
            node?.data?.target?.fields?.file?.details?.image?.height;

          return (
            <ComponentImage
              src={`https:${node?.data?.target?.fields?.file?.url}`}
              alt={node?.data?.target?.fields?.title}
              aspectRatio={aspectRatio}
            />
          );
        }

        return null;
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const props = generateProps(node?.data?.target);

        switch (props._contentTypeId) {
          case 'button':
            return <Button {...props} />;
          case 'itemBlock':
            return <ItemBlock {...props} />;
          case 'componentVideo':
            return (
              <Video
                {...props}
                component={{
                  ...props.component,
                  variant: 'iframe',
                }}
              />
            );
          default:
            return null;
        }
      },
      [INLINES.EMBEDDED_ENTRY]: node => {
        const type = node?.data?.target?.sys?.contentType?.sys?.id;

        switch (type) {
          case 'button': {
            const { label, link, openInNewWindow } = node?.data?.target?.fields || {};

            return (
              label &&
              link && (
                <ComponentLink
                  href={link}
                  target={openInNewWindow ? '_blank' : ''}
                  style={{ color: 'inherit', fontSize: 'inherit' }}
                >
                  {label}
                </ComponentLink>
              )
            );
          }
          case 'linkAsset': {
            const { label, fileToDownload } = node?.data?.target?.fields || {};

            return (
              label &&
              fileToDownload && (
                <ComponentLink
                  href={`https:${fileToDownload.fields.file.url}`}
                  style={{ color: 'inherit', fontSize: 'inherit' }}
                >
                  {label}
                </ComponentLink>
              )
            );
          }
          case 'tooltip':
            return <InlineTooltip content={node?.data?.target?.fields?.body} />;
          default:
            return null;
        }
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const { data } = node;

        return (
          <ComponentLink href={data.uri} style={{ color: 'inherit', fontSize: 'inherit' }}>
            {children}
          </ComponentLink>
        );
      },
    },
  };

  const componentWrappers = [
    {
      title: 'button',
      componentWrapper: ButtonWrapper,
    },
  ];

  return wrapRichTextElements(documentToReactComponents(content, renderOptions), componentWrappers);
};

export default OptimizedRichText;
