import { getSpeaker } from 'components/card/card.utils';
import { SpeakerCardStyles } from 'components/carddeck/carddeck.styles';
import ComponentImage from 'components/image/image.component';

const SpeakerCard = ({ reference, speakerHeading }) =>
  reference && (
    <SpeakerCardStyles>
      <h2 className="heading">{speakerHeading || 'Our Speakers'}</h2>
      <div className="speaker-container">
        {reference.map(person => {
          const { fullName, role, company, headshot, id } = getSpeaker(person);

          return (
            <div key={id} className="speaker">
              <ComponentImage
                className="headshot"
                src={`https:${headshot?.fields?.file?.url}`}
                alt={headshot?.fields?.title}
                aspectRatio={1}
                objectFit="cover"
              />
              <h3 className="name">{fullName}</h3>
              <div className="role">
                {role && <span>{role}</span>}
                <span>{company}</span>
              </div>
            </div>
          );
        })}
      </div>
    </SpeakerCardStyles>
  );

export default SpeakerCard;
