import { Tab, Tabs } from 'react-bootstrap';

import { FeatureDescription, TabContainer } from 'components/switcher/switcher.styles';
import Title from 'components/switcher/switcherTitle.component';

import OptimizedRichText from 'utils/OptimizedRichText';

const SwitcherTabs = ({ bgColor, activeTabBackgroundColor, activeTabTextColor, switcherUnit }) => (
  <TabContainer
    bgColor={bgColor}
    activeTabBackgroundColor={activeTabBackgroundColor}
    activeTabTextColor={activeTabTextColor}
  >
    <Tabs defaultActiveKey="switcher_0">
      {switcherUnit.map((item, idx) => {
        const {
          heading,
          icon,
          subheading,
          backgroundColor,
          textColor,
          headingSize,
          headingWeight,
          subheadingSize,
          subheadingWeight,
        } = item?.fields || {};

        const title = (heading || icon) && (
          <Title
            heading={heading}
            icon={icon}
            backgroundColor={backgroundColor}
            textColor={textColor}
            titleSize={headingSize}
            titleWeight={headingWeight}
          />
        );

        return title ? (
          <Tab key={`switcher_${idx}`} eventKey={`switcher_${idx}`} title={title}>
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
          </Tab>
        ) : null;
      })}
    </Tabs>
  </TabContainer>
);

export default SwitcherTabs;
