import Button from 'components/button/button.component';
import { MiniPricingCardContainer, MiniPricingCardStyles } from 'components/carddeck/carddeck.styles';
import HeadingFragment from 'components/heading/headingFragment.component';

import { getColor } from 'utils/colorUtils';
import { generateProps } from 'utils/componentGenerator';
import { useTopOffset } from 'utils/getTopOffset';
import { colorizeText } from 'utils/textFunctions';

export const MiniPricingCard = ({ planName, coPay, subheading, cta, color, alignment }) => (
  <MiniPricingCardStyles color={getColor(color)} noCoPay={!coPay} alignment={alignment}>
    <div className="heading-container">
      {planName && <HeadingFragment heading={planName && colorizeText(planName)} subheading={!coPay && subheading} />}
      {coPay && <div className="copay">{`$${coPay} co-pay*`}</div>}
    </div>
    {cta && <Button {...generateProps(cta)} />}
  </MiniPricingCardStyles>
);

const Card = ({ cards, cardAlignment }) => {
  const top = useTopOffset();

  return (
    <MiniPricingCardContainer className="pricing-card-deck sticky" top={top}>
      {cards?.map(({ sys: { id }, fields }) => (
        <MiniPricingCard key={id} alignment={cardAlignment} {...fields} />
      ))}
    </MiniPricingCardContainer>
  );
};

export default Card;
