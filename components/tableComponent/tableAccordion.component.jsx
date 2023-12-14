import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { FiChevronRight } from 'react-icons/fi';

import ComponentImage from 'components/image/image.component';
import { AccordionContainer } from 'components/tableComponent/tableComponent.styles';
import InlineTooltip from 'components/tooltip/tooltip.component';

import OptimizedRichText from 'utils/OptimizedRichText';

const TableAccordion = ({ columns }) => {
  const [selected, setSelected] = useState(null);

  return (
    <AccordionContainer>
      <Accordion defaultActiveKey="0">
        {columns.map((item, idx) => {
          if (!item?.fields?.label) {
            return null;
          }

          return (
            <Accordion.Item
              key={item?.sys?.id}
              eventKey={idx}
              onClick={() => (selected !== idx ? setSelected(idx) : setSelected(null))}
            >
              <Accordion.Header className={selected === idx && 'active-item'}>
                {item?.fields?.icon?.fields?.desktopIcon?.fields?.file?.url && (
                  <ComponentImage
                    src={`https:${item?.fields?.icon?.fields?.desktopIcon?.fields?.file?.url}`}
                    alt={item?.fields?.icon?.fields?.desktopIcon?.fields?.file?.title}
                    width={24}
                    height={24}
                  />
                )}
                <h3 className="title mb-0">{item?.fields?.label}</h3>
                <span className={`arrowIcon ${selected === idx && 'expend'}`}>
                  <FiChevronRight />
                </span>
              </Accordion.Header>
              <Accordion.Body>
                {item?.fields?.Subheading && <div className="desc">{OptimizedRichText(item?.fields?.Subheading)}</div>}
                <div className="content-items">
                  {item?.fields?.content &&
                    item.fields.content.map(subitem => (
                      <div className="content-feature" key={subitem?.sys?.id}>
                        <h6>
                          {subitem?.fields?.heading}
                          {subitem?.fields?.toolTip?.fields?.body && (
                            <span className="tooltip-mark">
                              <InlineTooltip content={subitem?.fields?.toolTip?.fields?.body} />
                            </span>
                          )}
                        </h6>
                        {subitem?.fields?.subheading && (
                          <div className="feature-subhead">{OptimizedRichText(subitem?.fields?.subheading)}</div>
                        )}
                      </div>
                    ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </AccordionContainer>
  );
};

export default TableAccordion;
