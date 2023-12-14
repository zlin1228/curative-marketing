import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import HeadingFragment from 'components/heading/headingFragment.component';
import DesktopTable from 'components/pricingTable/desktopTable.component';
import MobileTable from 'components/pricingTable/mobileTable.component';
import { PricingTableStyles } from 'components/pricingTable/pricingTable.styles';

const PricingTable = ({ component }) => {
  const isDesktop = useMediaQuery(media.lg);

  const {
    kicker,
    heading,
    subheading,
    rowLabels,
    pricingPlans,
    alignment = 'center',
    cardAlignment = 'center',
  } = component;

  const [planLabel, ...labels] = rowLabels;

  return (
    <PricingTableStyles alignment={alignment}>
      <Container>
        {heading && (
          <div className="heading-container">
            <HeadingFragment
              kicker={kicker}
              heading={<ReactMarkdown>{heading}</ReactMarkdown>}
              subheading={subheading}
            />
          </div>
        )}
        {pricingPlans && rowLabels && (
          <div className="pricing-table">
            {isDesktop && (
              <DesktopTable
                planLabel={planLabel}
                labels={labels}
                pricingPlans={pricingPlans}
                cardAlignment={cardAlignment}
              />
            )}
          </div>
        )}
      </Container>
      {pricingPlans && rowLabels && !isDesktop && <MobileTable pricingPlans={pricingPlans} labels={labels} />}
    </PricingTableStyles>
  );
};

export default PricingTable;
