import ReactMarkdown from 'react-markdown';

import { CardDeckGrid, SimpleCard } from 'components/carddeck/carddeck.styles';

import OptimizedRichText from 'utils/OptimizedRichText';

const Card = ({ cards, className = '' }) => (
  <CardDeckGrid className={className}>
    {cards.map(card => {
      const alignment = card?.fields?.alignment?.toLowerCase();

      return (
        <SimpleCard key={card?.sys?.id}>
          {card?.fields?.heading && (
            <h3 className={`heading align-${alignment || 'left'}`}>
              <ReactMarkdown>{card.fields.heading}</ReactMarkdown>
            </h3>
          )}
          {card?.fields?.body && (
            <div className={`subhead align-${alignment || 'left'}`}>{OptimizedRichText(card.fields.body)}</div>
          )}
        </SimpleCard>
      );
    })}
  </CardDeckGrid>
);
export default Card;
