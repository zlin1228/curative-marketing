import colorMap from 'atoms/colors/colors';

import { AccentWrapper, Triangle } from 'components/accentCorner/accentCorner.styles';
import ComponentImage from 'components/image/image.component';

const AccentCorner = ({ component, accentColor = colorMap.signalOrange[400], ...props }) => {
  const { accentLocation, accentType, customImage } = component;
  const [vertical, horizontal] = accentLocation.toLowerCase().split(' ');
  const isTop = vertical === 'top';
  const isRight = horizontal === 'right';

  return (
    <AccentWrapper accentType={accentType} isTop={isTop} isRight={isRight} {...props}>
      {accentType ? (
        <Triangle accentColor={accentColor} />
      ) : (
        <ComponentImage
          src={`https:${customImage?.fields?.file?.url}`}
          alt={customImage?.fields?.title || 'Accent Corner Image'}
          width={80}
          height={80}
        />
      )}
    </AccentWrapper>
  );
};

export default AccentCorner;
