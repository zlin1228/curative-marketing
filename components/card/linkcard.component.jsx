import { FaArrowRight } from 'react-icons/fa';

import { CardDeckGrid, LinkCardIcon, LinkCardImage } from 'components/carddeck/carddeck.styles';
import ComponentImage from 'components/image/image.component';
import ComponentLink from 'components/link/link.component';

import OptimizedRichText from 'utils/OptimizedRichText';

const LinkCard = ({ variant, card }) => {
  switch (variant) {
    case 'Link (Icon)':
      return (
        <LinkCardIcon>
          <ComponentLink
            href={card?.fields?.link || '#!'}
            className="d-flex flex-column justify-content-between align-items-center"
          >
            {card?.fields?.media?.fields?.desktopIcon && (
              <ComponentImage
                className="d-flex card-image-wrapper"
                src={`https:${card?.fields?.media?.fields?.desktopIcon?.fields?.file?.url}`}
                alt={card?.fields?.media?.fields?.desktopIcon?.fields?.title}
                width="100%"
              />
            )}
            {card?.fields?.heading && (
              <div>
                <div className="d-flex justify-content-center card-heading">
                  <h2>{card?.fields?.heading}</h2>
                </div>
                {card?.fields?.body && (
                  <div className="d-flex text-center card-subhead">{OptimizedRichText(card.fields.body)}</div>
                )}
              </div>
            )}
            {card?.fields?.heading && (
              <div className="d-flex align-items-center card-link">
                <span>{card?.fields?.heading}</span>
                <FaArrowRight />
              </div>
            )}
          </ComponentLink>
        </LinkCardIcon>
      );
    case 'Link (Image)':
      return (
        <LinkCardImage>
          <ComponentLink href={card?.fields?.link || '#!'}>
            {card?.fields?.media?.fields?.desktopImage?.fields?.file?.url && (
              <ComponentImage
                className={card?.fields?.hoverAnimation && 'card-image'}
                src={`https:${card?.fields?.media?.fields?.desktopImage?.fields?.file?.url}`}
                alt={card?.fields?.media?.fields?.desktopImage?.fields?.title}
                width="100%"
                height={370}
              />
            )}
            {card?.fields?.heading && (
              <div className="card-link">
                <span>{card?.fields?.heading}</span>
                <FaArrowRight />
              </div>
            )}
          </ComponentLink>
        </LinkCardImage>
      );
  }
};

const Card = ({ columnCount, cards, variant }) => (
  <CardDeckGrid className="link-card-deck" desktopColumns={columnCount} cardCount={cards.length}>
    {cards.map(card => (
      <LinkCard key={card?.sys?.id} variant={variant} card={card} />
    ))}
  </CardDeckGrid>
);

export default Card;
