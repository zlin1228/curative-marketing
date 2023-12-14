import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import AccentCorner from 'components/accentCorner/accentCorner.component';
import HeadingFragment from 'components/heading/headingFragment.component';
import ComponentImage from 'components/image/image.component';
import { OffsetGridStyles } from 'components/offsetGrid/offsetGrid.styles';
import { getContainerColors, getEscapedId } from 'components/offsetGrid/offsetGrid.utils';
import GridSection from 'components/offsetGrid/offsetGridSection.component';
import SwitchbackOffsetGrid from 'components/offsetGrid/offsetGridSwitchback.component';
import ParallaxContainer from 'components/parallax/parallaxContainer/parallaxContainer.component';

import { getGradient } from 'utils/colorUtils';
import { stringToKebabCase } from 'utils/textFunctions';

const OffsetGrid = ({ component }) => {
  const {
    internalName,
    backgroundColor,
    grid,
    heading,
    kicker,
    numberedList,
    reverse,
    subheading,
    cornerAccents,
    featuredImage,
    parallax,
    hideImageOnMobile,
    componentVariant,
    gridVariant,
  } = component;
  const isTablet = useMediaQuery(media.max('lg'));
  const [contentHeight, setContentHeight] = useState(null);
  const [wholeHeight, setWholeHeight] = useState(null);
  const mainRef = useRef();
  const hideMobileImage = useMediaQuery(media.max('sm')) && hideImageOnMobile;

  const id = stringToKebabCase(internalName);

  const logoCorner = cornerAccents && cornerAccents.filter(_item => !_item?.fields?.accentType);

  const { contents, ctas } =
    grid?.[0]?.fields?.content?.reduce(
      (accumulator, { sys, fields }) => {
        const isButton = sys?.contentType?.sys?.id === 'button';

        accumulator[isButton ? 'ctas' : 'contents'].push({
          id: sys?.id,
          ...fields,
        });

        return accumulator;
      },
      { contents: [], ctas: [] },
    ) || {};

  const color = getGradient(backgroundColor);

  const { contentContainerColor, gridContainerColor } = getContainerColors({
    color,
    reverse,
  });

  useEffect(() => {
    const handleResize = () => {
      const element = document.querySelector(`#${getEscapedId(id)} .content-section`);
      if (element) {
        const height = element.offsetHeight;
        setContentHeight(height);
        setWholeHeight(mainRef?.current?.offsetHeight);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  const isFull = componentVariant === 'full';
  const hasImage = (featuredImage || parallax) && !hideMobileImage;
  const featuredImageFragment = hasImage && (
    <>
      {featuredImage && (
        <ComponentImage
          className="featured-img"
          src={`https:${featuredImage?.fields?.image?.fields?.file?.url}`}
          alt={featuredImage?.fields?.image?.fields?.title}
          width={featuredImage?.fields?.image?.fields?.file?.details?.image?.width}
          height={featuredImage?.fields?.image?.fields?.file?.details?.image?.height}
        />
      )}
      {parallax && <ParallaxContainer component={parallax.fields} />}
    </>
  );

  const contentSection = (
    <div className="content-section">
      <div className="heading-content">
        <HeadingFragment
          kicker={kicker}
          heading={heading && <ReactMarkdown>{heading}</ReactMarkdown>}
          subheading={subheading}
          hideImage={!isFull || isTablet}
        />
      </div>
      {(!isFull || isTablet) && featuredImageFragment}
    </div>
  );

  const gridSection = (
    <GridSection
      theme={gridContainerColor}
      numberedList={numberedList}
      reverse={reverse}
      contents={contents}
      ctas={ctas}
      gridVariant={gridVariant}
    />
  );

  return (
    <OffsetGridStyles
      id={id}
      theme={contentContainerColor}
      color={color}
      reversed={reverse}
      contentHeight={contentHeight}
      wholeHeight={wholeHeight}
      corner={logoCorner && logoCorner.length > 0}
      numberedList={numberedList}
      ref={mainRef}
      isFull={isFull}
    >
      <Container>
        {isFull ? (
          <>
            {!isTablet && contentSection}
            {isTablet || hasImage ? (
              <SwitchbackOffsetGrid
                contentSection={isTablet ? contentSection : featuredImageFragment}
                gridSection={gridSection}
                reverse={reverse}
              />
            ) : (
              <div className="grid-container">{gridSection}</div>
            )}
          </>
        ) : (
          <SwitchbackOffsetGrid contentSection={contentSection} gridSection={gridSection} reverse={reverse} />
        )}
      </Container>
      {cornerAccents &&
        cornerAccents.length > 0 &&
        cornerAccents.map(
          (accent, index) => accent?.fields?.accentType && <AccentCorner key={index} component={accent.fields} />,
        )}
    </OffsetGridStyles>
  );
};

export default OffsetGrid;
