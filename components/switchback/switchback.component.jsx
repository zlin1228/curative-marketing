import ReactMarkdown from 'react-markdown';

import { media, useMediaQuery } from 'atoms/breakpoints/breakpoints';

import AccentCorner from 'components/accentCorner/accentCorner.component';
import Breadcrumbs from 'components/breadcrumbs/breadcrumbs';
import Button from 'components/button/button.component';
import ParallaxContainer from 'components/parallax/parallaxContainer/parallaxContainer.component';
import FeaturedContent from 'components/switchback/featuredContent/featuredContent.component';
import { SwitchbackStyles } from 'components/switchback/switchback.styles';

import OptimizedRichText from 'utils/OptimizedRichText';
import { getGradient } from 'utils/colorUtils';
import { generateProps } from 'utils/componentGenerator';
import getContentPosition from 'utils/getContentPosition';
import ReverseChildren from 'utils/reverseChildren';

const Switchback = ({ component, breadcrumbs }) => {
  const {
    kicker,
    heading,
    subheading,
    button: buttons,
    featuredComponent,
    parallax,
    backgroundColor,
    reversed,
    cornerAccents,
    featuredText,
    showBreadcrumbs,
    featuredContentMobilePosition: position,
    hideFeaturedContentOnMobile,
  } = component;

  const isMobile = useMediaQuery(media.max('sm'));
  const colors = getGradient(backgroundColor);

  const { isDefault, isBottom } = getContentPosition(position);

  const contentContainerColor = reversed ? colors.left : colors.right;

  const displayOnMobile = !(isMobile && hideFeaturedContentOnMobile);
  const displayFeaturedContent = (featuredComponent || parallax || featuredText) && displayOnMobile;

  const displayTopContentFeatureSide = isMobile && isBottom;
  const displayTopContentContentSide = !isMobile || !isBottom || hideFeaturedContentOnMobile;

  const reverseContent = isMobile ? isDefault : reversed;

  const topContent = (
    <>
      {showBreadcrumbs && <Breadcrumbs pages={breadcrumbs} />}
      {kicker && <p className="kicker">{kicker}</p>}
    </>
  );

  return (
    <SwitchbackStyles
      theme={contentContainerColor}
      color={colors}
      featuredText={featuredText && true}
      showBreadcrumbs={showBreadcrumbs}
      className="switchback-container"
    >
      {cornerAccents &&
        cornerAccents.length > 0 &&
        cornerAccents.map((accent, index) => (
          <AccentCorner className="accent-corner" key={index} component={accent.fields} />
        ))}
      <div className="wrapper">
        <ReverseChildren reversed={reverseContent}>
          {displayFeaturedContent && (
            <div className="featured-content">
              {displayTopContentFeatureSide && topContent}
              {featuredComponent && (
                <FeaturedContent className="featured-image" component={featuredComponent} reversed={reversed} />
              )}
              {parallax && <ParallaxContainer component={parallax.fields} />}
              {featuredText && <h2 className="featured-text">{featuredText}</h2>}
            </div>
          )}
          <div className="content-side">
            {displayTopContentContentSide && topContent}
            {heading && <ReactMarkdown className="heading">{heading}</ReactMarkdown>}
            {subheading && <div className="subhead">{OptimizedRichText(subheading)}</div>}
            {buttons &&
              buttons.map(button => {
                const props = generateProps(button);

                return <Button key={props.internalTitle} {...props} />;
              })}
          </div>
        </ReverseChildren>
      </div>
    </SwitchbackStyles>
  );
};

export default Switchback;
