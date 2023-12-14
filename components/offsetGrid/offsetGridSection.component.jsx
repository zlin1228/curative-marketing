import Button from 'components/button/button.component';
import OffsetGridCard from 'components/card/offsetGridCard.component';
import { GridItem, OffsetGridCardDeck } from 'components/offsetGrid/offsetGrid.styles';
import DefaultItem from 'components/offsetGrid/offsetGridItem.component';

const GridSection = ({ theme, numberedList, reverse, contents, ctas, gridVariant }) => {
  let contentSection = contents?.length > 0;

  switch (gridVariant) {
    case 'card':
      contentSection = contentSection && (
        <OffsetGridCardDeck>
          {contents.map(item => item && <OffsetGridCard key={item.id} {...item} />)}
        </OffsetGridCardDeck>
      );
      break;
    default:
      contentSection = contentSection && (
        <GridItem numberedList={numberedList} reversed={reverse} theme={theme}>
          {contents.map(item => item && <DefaultItem key={item.id} theme={theme} {...item} />)}
        </GridItem>
      );
  }

  return (
    <>
      {contentSection}
      {ctas?.length > 0 && (
        <div className="ctas-section">
          {ctas.map(button => (
            <Button component={button} key={button?.sys?.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default GridSection;
