import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font, fontWeight } from 'atoms/typography/fonts.ts';

export const PricingTableStyles = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colorMap.white};
  padding-top: 56px;
  justify-content: center;

  .pricing-table-card-swiper {
    width: 100%;
    max-width: 100%;
    contain: content;
    overflow: hidden;

    .swiper-slide-active {
      .swiper-pagination {
        display: block;
      }
    }
    .swiper-pagination {
      z-index: 0;
      position: relative;
      display: none;
    }

    .swiper-pagination-bullet {
      margin: 0 8px;
    }

    .card-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 24px;
      height: 230px;
    }
  }

  .heading-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: ${({ alignment }) => alignment};
    strong {
      color: ${colorMap.clearBlue[700]};
    }
  }

  .kicker {
    color: ${colorMap.signalOrange[800]};
    font: ${font('text-lg', 'bold')};
  }

  .button-wrapper {
    justify-content: ${({ alignment }) => alignment};
  }

  .pricing-table {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .pricing-card-deck {
    width: calc(100% - 300px);
  }

  .header-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
  }

  .header-label {
    display: flex;
    flex-direction: column;
    padding: 32px;
    max-width: 300px;
    width: 100%;
    justify-content: center;
    gap: 4px;
    .heading {
      font: ${font('text-xl', 'bold')};
    }
    .subhead {
      p {
        font: ${font('text-md', 'medium')};
        color: ${colorMap.gray[600]};
      }
      a {
        font-weight: ${fontWeight.medium};
        color: ${colorMap.clearBlue[700]} !important;
      }
    }
  }

  ${media.sm} {
    padding-top: 72px;
    padding-bottom: 120px;
  }

  ${media.md} {
    padding-top: 56px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  background: ${({ index }) => index % 2 === 1 && colorMap.clearBlue[50]};
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  width: 100%;

  .row-label {
    width: 100%;
    align-items: start;
    .label-wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      color: ${colorMap.gray[800]};
      font: ${font('text-lg', 'medium')};
      svg {
        stroke: ${colorMap.gray[400]};
      }
    }
  }

  .plan-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }

  .plan-field {
    display: flex;
    flex-direction: column;
    p {
      color: ${colorMap.gray[600]};
      margin: 0;
      font: ${font('text-md', 'medium')};
    }
  }

  ${media.lg} {
    padding: 0;
    gap: 0;
    flex-direction: row;
    .row-label {
      max-width: 300px;
      padding: 32px 32px;
      border-right: 1px solid ${colorMap.gray[200]};
      .label-wrapper {
        color: ${colorMap.gray[700]};
      }
    }
    .plan-field {
      padding: 32px 24px;
      p {
        color: ${colorMap.gray[700]};
      }
    }
  }
`;

export const StickyCard = styled.div`
  position: sticky;
  top: ${({ top }) => `${top}px`};
  z-index: 1000;
`;
