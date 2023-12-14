import { useState } from 'react';
import { Accordion } from 'react-bootstrap';

import { AccordionContainer, FeatureDescription } from 'components/switcher/switcher.styles';
import Title from 'components/switcher/switcherTitle.component';

import OptimizedRichText from 'utils/OptimizedRichText';

const SwitcherAccordion = ({ bgColor, activeTabBackgroundColor, activeTabTextColor, switcherUnit }) => {
  const [selected, setSelected] = useState(null);

  return (
    <AccordionContainer
      bgColor={bgColor}
      activeTabBackgroundColor={activeTabBackgroundColor}
      activeTabTextColor={activeTabTextColor}
    >
      <Accordion defaultActiveKey="0">
        {switcherUnit.map((item, idx) => {
          const { heading, icon, subheading, textColor, headingSize, headingWeight, subheadingSize, subheadingWeight } =
            item?.fields || {};

          const isSelected = selected === idx + 1;
          const title = (heading || icon) && (
            <Title
              heading={heading}
              icon={icon}
              iconSize={32}
              backgroundColor={bgColor}
              textColor={activeTabTextColor}
              titleSize={headingSize}
              titleWeight={headingWeight}
              endIcon={true}
              isSelected={isSelected}
              activeTabBackgroundColor={activeTabBackgroundColor}
              activeTabTextColor={activeTabTextColor}
            />
          );

          return title ? (
            <Accordion.Item
              key={item.sys.id}
              eventKey={idx + 1}
              onClick={() => (selected !== idx + 1 ? setSelected(idx + 1) : setSelected(null))}
            >
              <Accordion.Header>{title}</Accordion.Header>
              <Accordion.Body>
                {subheading && (
                  <FeatureDescription
                    className="desc"
                    textColor={textColor}
                    textSize={subheadingSize}
                    textWeight={subheadingWeight}
                  >
                    {OptimizedRichText(subheading)}
                  </FeatureDescription>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ) : null;
        })}
      </Accordion>
    </AccordionContainer>
  );
};

export default SwitcherAccordion;
