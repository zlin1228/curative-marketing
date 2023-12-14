import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { selectCard } from 'components/card/card.utils';
import { CardDeckGrid, TeamCard } from 'components/carddeck/carddeck.styles';
import ComponentImage from 'components/image/image.component';

const Card = ({ cards }) => {
  const [selected, setSelected] = useState(null);

  return (
    <CardDeckGrid>
      {cards.map((card, idx) => (
        <TeamCard
          className={selected === idx ? 'active' : ''}
          key={card?.sys?.id}
          onClick={() => selectCard(selected, idx, setSelected)}
        >
          {card?.fields?.headshot && (
            <ComponentImage
              src={`https:${card?.fields?.headshot?.fields?.file?.url}`}
              alt={card?.fields?.headshot?.fields?.title}
              width="100%"
              aspectRatio={1}
              objectFit="cover"
            />
          )}
          <div className="user-container">
            <div className="user-info">
              <h3 className="heading">
                {card?.fields?.firstName}
                <br />
                {card?.fields?.lastName}
              </h3>
              <p className="role">{card?.fields?.role}</p>
            </div>
            <div className="arrow-icon-up">
              <FiChevronUp />
            </div>
          </div>
          <div className="detail" onClick={() => selectCard(selected, idx, setSelected)}>
            <div className="heading-container">
              <h3 className="heading">
                {card?.fields?.firstName}
                <br />
                {card?.fields?.lastName}
              </h3>
              <div className="arrow-icon-down">
                <FiChevronDown />
              </div>
            </div>
            {card?.fields?.role && <p className="role">{card.fields.role}</p>}
            {card?.fields?.excerpt && <div className="excerpt">{card.fields.excerpt}</div>}
          </div>
        </TeamCard>
      ))}
    </CardDeckGrid>
  );
};

export default Card;
