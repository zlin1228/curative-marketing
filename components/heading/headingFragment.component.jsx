import OptimizedRichText from 'utils/OptimizedRichText';
import getContentPosition from 'utils/getContentPosition';

const HeadingFragment = ({ image, kicker, heading, subheading, imagePosition = 'default', hideImage }) => {
  const { isTop, isBottom, isDefault } = image && !hideImage ? getContentPosition(imagePosition) : {};

  return (
    <>
      {isTop && image}
      {kicker && <div className="kicker">{kicker}</div>}
      {isBottom && image}
      {heading && <div className="heading">{heading}</div>}
      {subheading && <div className="subhead">{OptimizedRichText(subheading)}</div>}
      {isDefault && image}
    </>
  );
};

export default HeadingFragment;
