import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

import colorMap from 'atoms/colors/colors';

import { selectCard } from 'components/card/card.utils';
import { CardDeckGrid, LargeCard } from 'components/carddeck/carddeck.styles';
import ComponentImage from 'components/image/image.component';

import OptimizedRichText from 'utils/OptimizedRichText';
import { getColor } from 'utils/colorUtils';

const Card = ({ cards }) => {
  const [selected, setSelected] = useState(null);

  return (
    <CardDeckGrid desktopColumns={2}>
      {cards.map((card, idx) => {
        const { heading, backgroundColor, body } = card?.fields || {};
        const headingContainer = (
          <>
            {card?.fields?.media?.fields?.desktopIcon && (
              <ComponentImage
                src={`https:${card?.fields?.media?.fields?.desktopIcon?.fields?.file?.url}`}
                alt={card?.fields?.media?.fields?.desktopIcon?.fields?.title}
                width="100%"
                height={80}
                minHeight={80}
                aspectRatio={1}
              />
            )}
            {heading && (
              <h3 className="heading">
                <ReactMarkdown>{heading}</ReactMarkdown>
              </h3>
            )}
          </>
        );

        return (
          <LargeCard
            key={card?.sys?.id}
            className={`large-card${selected === idx ? ' active' : ''}`}
            theme={getColor(backgroundColor, colorMap.gray[25])}
            onClick={() => selectCard(selected, idx, setSelected)}
          >
            <div className="heading-container">{headingContainer}</div>
            <div className="arrow-icon-up">
              <FiChevronUp />
            </div>
            <div className="detail">
              <div className="arrow-icon-down">
                <FiChevronDown />
              </div>
              {headingContainer}
              {body && <div className="subhead">{OptimizedRichText(body)}</div>}
            </div>
          </LargeCard>
        );
      })}
    </CardDeckGrid>
  );
};

export default Card;
