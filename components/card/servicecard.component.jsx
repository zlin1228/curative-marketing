import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

import { selectCard } from 'components/card/card.utils';
import { CardDeckGrid, ServiceCard } from 'components/carddeck/carddeck.styles';

import OptimizedRichText from 'utils/OptimizedRichText';

const Card = ({ cards }) => {
  const [selected, setSelected] = useState(null);

  return (
    <CardDeckGrid desktopColumns={2}>
      {cards.map((card, idx) => (
        <ServiceCard
          key={card?.sys?.id}
          className={`service-card${selected === idx ? ' active' : ''}`}
          background={card?.fields?.media?.fields?.image?.fields?.file?.url}
          onClick={() => selectCard(selected, idx, setSelected)}
        >
          <div className="overlay" />
          {card?.fields?.heading && (
            <h3 className="heading">
              <ReactMarkdown>{card.fields.heading}</ReactMarkdown>
            </h3>
          )}
          <div className="arrow-icon-up">
            <FiChevronUp />
          </div>
          <div className="detail">
            <div className="arrow-icon-down">
              <FiChevronDown />
            </div>
            <div className="heading-container">
              {card?.fields?.heading && (
                <h3 className="heading">
                  <ReactMarkdown>{card.fields.heading}</ReactMarkdown>
                </h3>
              )}
              {card?.fields?.body && <div className="subhead">{OptimizedRichText(card.fields.body)}</div>}
            </div>
          </div>
        </ServiceCard>
      ))}
    </CardDeckGrid>
  );
};

export default Card;
