import MiniPricingCardDeck from 'components/card/miniPricingCard.component';
import HeadingFragment from 'components/heading/headingFragment.component';
import { TableRow } from 'components/pricingTable/pricingTable.styles';
import InlineTooltip from 'components/tooltip/tooltip.component';

import OptimizedRichText from 'utils/OptimizedRichText';

const DesktopTable = ({ planLabel, labels, pricingPlans, cardAlignment }) => (
  <>
    <div className="header-label">
      <HeadingFragment {...planLabel.fields} />
    </div>
    <MiniPricingCardDeck cards={pricingPlans} cardAlignment={cardAlignment} />
    {labels.map(({ sys: { id }, fields: { tooltip, ...fields } }, idx) => (
      <TableRow key={id} index={idx}>
        <div className="row-label">
          <div className="label-wrapper">
            <HeadingFragment {...fields} />
            {tooltip?.fields?.body && <InlineTooltip content={tooltip?.fields?.body} />}
          </div>
        </div>
        <div className="plan-container">
          {pricingPlans.map(
            ({ sys: { id }, fields: { features } }) =>
              features[idx] && (
                <div key={id} className="plan-field">
                  {OptimizedRichText(features[idx]?.fields.subheading)}
                </div>
              ),
          )}
        </div>
      </TableRow>
    ))}
  </>
);

export default DesktopTable;
