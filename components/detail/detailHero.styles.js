import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const DetailHeroStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${media.md} {
    gap: 32px;
  }

  .kicker {
    color: ${colorMap.signalOrange[800]};
    font: ${font('display-xs', 'bold')};
  }

  .detail-heading {
    color: ${colorMap.clearBlue[700]};
    text-align: ${({ type }) => (type === 'press' ? 'left' : 'center')};
    font: ${font('display-sm', 'bold')};
    ${media.md} {
      font: ${font('display-xl', 'bold')};
    }

    ${media.lg} {
      font: ${font('display-xxl', 'bold')};
    }
  }
`;

export const UnderPhoto = styled.section`
  width: 100%;
  height: 200px;

  ${media.md} {
    height: 520px;
  }

  ${media.lg} {
    height: 840px;
  }
`;

const filteredColors = ['offWhite', 'gray', 'accentGray', 'black', 'white'];
const tagColorOrder = Object.keys(colorMap).filter(color => !filteredColors.includes(color));

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 16px 8px;

  flex-wrap: wrap;
  a {
    text-decoration: none;
  }

  ${media.md} {
    gap: 32px;
  }
`;

export const CategoryTag = styled.div`
  width: fit-content;
  height: auto;
  padding: 2px 10px;
  border: 1px solid ${props => colorMap[tagColorOrder[props.index % tagColorOrder.length]]?.[700]};
  border-radius: 16px;
  background: ${colorMap.gray[25]};
  color: ${props => colorMap[tagColorOrder[props.index % tagColorOrder.length]][900]};
  font: ${font('text-sm')};
  ${props => (props.href ? '' : 'pointer-events: none;')}
`;

export const CategoryLinkWrapper = styled.div`
  &:hover > * {
    color: ${props => colorMap[tagColorOrder[props.index % tagColorOrder.length]][900]};
    background: ${props => colorMap[tagColorOrder[props.index % tagColorOrder.length]][100]};
  }
`;

export const HeroSwiperWrapper = styled.div`
  --swiper-navigation-size: 16px;
  --swiper-navigation-color: ${colorMap.gray[700]};

  .swiper-button-prev,
  .swiper-button-next {
    top: calc(100% - 22px);
    z-index: 11;
  }
`;
