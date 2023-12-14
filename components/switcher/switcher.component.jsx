import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';

import HeadingFragment from 'components/heading/headingFragment.component';
import { SwitcherStyles } from 'components/switcher/switcher.styles';
import SwitcherAccordion from 'components/switcher/switcherAccordion.component';
import SwitcherTabs from 'components/switcher/switcherTabs.component';

import { getColor } from 'utils/colorUtils';

const Switcher = ({ component }) => {
  const {
    heading,
    subheading,
    switcherUnit,
    backgroundColor,
    alignment,
    activeTabBackgroundColor,
    activeTabTextColor,
  } = component;

  const isDesktop = useMediaQuery(media.lg);

  if (!switcherUnit) {
    return null;
  }

  const bgColor = getColor(backgroundColor, 'transparent');

  const switcherProps = {
    bgColor,
    activeTabBackgroundColor: getColor(activeTabBackgroundColor),
    activeTabTextColor: getColor(activeTabTextColor, colorMap.clearBlue[700]),
    switcherUnit,
  };

  return (
    <SwitcherStyles bgColor={bgColor} alignment={alignment}>
      <Container className="switcher">
        <HeadingFragment heading={heading && <ReactMarkdown>{heading}</ReactMarkdown>} subheading={subheading} />
        {isDesktop ? <SwitcherTabs {...switcherProps} /> : <SwitcherAccordion {...switcherProps} />}
      </Container>
    </SwitcherStyles>
  );
};

export default Switcher;
