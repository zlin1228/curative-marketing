import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import Container from 'components/container/container.component';
import { Wrapper } from 'components/form/form.styles';
import FormContent from 'components/form/formContent.component';
import FullForm from 'components/form/formFull.component';
import FormImage from 'components/form/formImage.component';
import WsHubSpotForm from 'components/form/hubspotForm/hubSpotForm.component';
import PopupForm from 'components/form/popupForm.component';

import { isLight } from 'utils/colorUtils';
import { getColor } from 'utils/colorUtils';
import getContentPosition from 'utils/getContentPosition';
import ReverseChildren from 'utils/reverseChildren';

const Form = ({ component }) => {
  const {
    kicker,
    heading,
    bodyCopy,
    formId,
    headingSize,
    cornerImage,
    redirect,
    scrollPopout,
    image,
    componentVariant = 'switchback',
    variation: formVariant = 'standard',
    alignment,
    backgroundColor = 'ClearBlue800',
    hideImageOnMobile,
    imagePosition,
    reversed,
    thankYouKicker,
    thankYouHeading,
    thankYouSubheading,
    thankYouLinks,
  } = component;
  const router = useRouter();
  const isMobile = useMediaQuery(media.max('sm'));
  const containerRef = useRef(null);
  const [hasPopped, setHasPopped] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const bgColor = getColor(backgroundColor);
  const isDarkBackground = !isLight(bgColor);
  const displayOnMobile = !(isMobile && hideImageOnMobile);
  const { isTop, isBottom, isDefault } = getContentPosition(imagePosition);
  const isSwitchback = componentVariant === 'switchback';

  useEffect(() => {
    const intersectCallback = entries => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasPopped) {
        setHasPopped(true);
        setIsOpen(true);
      }
    };

    const current = containerRef.current;
    const observer = new IntersectionObserver(intersectCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [containerRef, hasPopped, isOpen]);

  const formImage = <FormImage image={image} displayOnMobile={displayOnMobile} scrollPopout={scrollPopout} />;

  const formContent = (
    <FormContent
      alignment={alignment}
      variant={componentVariant}
      kicker={kicker}
      heading={heading}
      headingSize={headingSize}
      bodyCopy={bodyCopy}
      displayOnMobile={displayOnMobile}
      scrollPopout={scrollPopout}
      image={image}
      imagePosition={imagePosition}
      isMobile={isMobile}
      isDarkBackground={isDarkBackground}
    />
  );

  const form = formId && (
    <div className="form">
      <WsHubSpotForm
        key={router.pathname}
        formId={formId}
        redirected={redirect}
        variation={formVariant}
        thankYouKicker={thankYouKicker}
        thankYouHeading={thankYouHeading}
        thankYouSubheading={thankYouSubheading}
        thankYouLinks={thankYouLinks}
      />
      {isSwitchback && isMobile && isDefault && formImage}
    </div>
  );

  return scrollPopout ? (
    <div ref={containerRef}>
      <PopupForm isOpen={isOpen} setIsOpen={setIsOpen} formId={formId} isLargeVariant={false}>
        {formContent}
      </PopupForm>
    </div>
  ) : (
    <Container backgroundColor={bgColor} accentImage={cornerImage}>
      <Wrapper
        className={`${componentVariant} ${formVariant}`}
        isDarkBackground={isDarkBackground}
        variation={formVariant}
        position={{ isTop, isBottom, isDefault }}
      >
        {isSwitchback ? (
          <ReverseChildren reversed={reversed}>
            {formContent}
            {form}
          </ReverseChildren>
        ) : (
          <FullForm
            className="full-form"
            formContent={formContent}
            formImage={formImage}
            form={form}
            reversed={reversed}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Form;
