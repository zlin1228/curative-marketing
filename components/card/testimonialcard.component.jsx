import { CardDeckGrid, TestimonialCard } from 'components/carddeck/carddeck.styles';
import ComponentImage from 'components/image/image.component';

const Card = ({ cards }) => (
  <CardDeckGrid desktopColumns={2}>
    {cards.map(card => (
      <TestimonialCard key={card?.sys?.id}>
        {card?.fields?.attribution?.fields?.darkLogo && (
          <ComponentImage
            src={`https:${card?.fields?.attribution?.fields?.darkLogo?.fields?.desktopIcon?.fields?.file?.url}`}
            alt={card?.fields?.attribution?.fields?.darkLogo?.fields?.desktopIcon?.fields?.title}
            width={
              card?.fields?.attribution?.fields?.darkLogo?.fields?.desktopIcon?.fields?.file?.details?.image?.width
            }
            height={
              card?.fields?.attribution?.fields?.darkLogo?.fields?.desktopIcon?.fields?.file?.details?.image?.height
            }
          />
        )}
        {card?.fields?.quote && <p className="quote">{card?.fields?.quote}</p>}
        {card?.fields?.attribution?.fields?.Name && (
          <p className="company-name">— {card?.fields?.attribution?.fields?.Name}</p>
        )}
      </TestimonialCard>
    ))}
  </CardDeckGrid>
);

export default Card;
