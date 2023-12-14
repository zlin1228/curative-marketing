import styled from 'styled-components';

import { shadows } from 'styles/shadows';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const DetailCardListingStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 36px;
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .listing-heading {
      font: ${font('display-sm', 'bold')};
      color: ${colorMap.signalOrange[800]};
    }
  }

  .post-count {
    font: ${font('text-lg', 'bold')};
  }
`;

export const DetailCardDeckStyles = styled.section`
  height: ${({ isPress }) => isPress && '100%'};
  .feature-card {
    height: ${({ isPress }) => isPress && '100%'};
  }

  .deck-heading-container {
    margin-bottom: 56px;
  }

  .deck-heading {
    font: ${font('display-lg', 'bold')};
  }

  .signal-orange {
    color: ${colorMap.signalOrange[800]};
  }

  .text-sm {
    font: ${font('display-sm')};
  }
`;

export const DetailCardGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${media.lg} {
    grid-template-columns: ${({ desktopColumns }) => `repeat(${desktopColumns}, 1fr)`};
  }
`;

export const DetailCardStyles = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: ${({ height }) => (height ? height : '100%')};
  width: 100%;
  margin: 0 auto;
  border: 1px solid ${colorMap.gray[200]};
  background: ${colorMap.white};
  ${shadows.transition};
  transform: translateY(${({ isAnimated }) => (isAnimated ? '0px' : '80px')});
  opacity: ${({ isAnimated }) => (isAnimated ? 1 : 0)};
  transition: 1s cubic-bezier(0.5, 0, 0, 1);

  .feature-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info {
      width: 100%;
      max-width: 500px;
      height: 446px;
    }
  }

  ${media.md} {
    .feature-card {
      flex-direction: row;

      .info {
        max-width: 370px;
        height: 266px;
      }
    }
  }

  ${media.lg} {
    .feature-card {
      flex-direction: row;

      .info {
        max-width: 500px;
        height: 446px;
      }
    }
  }

  img {
    object-position: top;
    object-fit: cover;
  }

  .card-link {
    text-decoration: none;
  }

  .info {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: ${({ isPress }) => (isPress ? '100%' : 'calc(100% - 320px)')};
    height: ${({ isPress }) => (isPress ? '100%' : 'calc(100% - 320px)')};
    padding: 2rem;
    background: ${colorMap.white};
    overflow: hidden;
    &:before {
      content: '';
      position: absolute;
      transform: rotate(90deg);
      border: 40px solid transparent;
      border-right-color: ${colorMap.signalOrange[400]};
      border-top-color: ${colorMap.signalOrange[400]};
      bottom: 16px;
      right: 16px;
    }
  }

  .category-scroller {
    padding-bottom: 8px;
  }

  .category-slider {
    display: flex;
    width: max-content;
    gap: 8px;
    margin-right: 8px;
  }

  .category-scroller .rfm-marquee,
  .category-scroller .marquee {
    min-width: fit-content;
  }

  .category-scroller .marquee-container .overlay::before {
    width: 10px;
  }

  .category-scroller .marquee-container .overlay::after {
    width: 10px;
  }

  .related-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  .related-heading {
    font: ${font('text-xl', 'bold')};
    color: ${colorMap.black};
    margin-bottom: 16px;
  }

  .related-subhead {
    font: ${font('text-md')};
    color: ${colorMap.black};
  }

  .card-info {
    display: flex;
    flex-direction: column;
    color: ${colorMap.black};
    span {
      font: ${font('text-sm')};
    }
  }

  .related-date {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .red-dot {
    border-radius: 50%;
    background-color: ${colorMap.signalOrange[400]};
    width: 4px;
    height: 4px;
    margin: 0px 8px;
  }

  &:hover {
    ${shadows.card}
  }
`;
