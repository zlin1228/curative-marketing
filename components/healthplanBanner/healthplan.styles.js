import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const Container = styled.section`
  background: linear-gradient(
    0deg,
    ${colorMap.clearBlue[700]} 0%,
    ${colorMap.clearBlue[700]} 33.3%,
    ${colorMap.signalOrange[400]} 33.3%,
    ${colorMap.signalOrange[400]} 66.7%,
    ${colorMap.skyBlue[500]} 66.7%,
    ${colorMap.skyBlue[500]} 100%
  );

  ${media.lg} {
    background: linear-gradient(
      180deg,
      ${colorMap.clearBlue[700]} 0%,
      ${colorMap.clearBlue[700]} 33.3%,
      ${colorMap.signalOrange[400]} 33.3%,
      ${colorMap.signalOrange[400]} 66.7%,
      ${colorMap.skyBlue[500]} 66.7%,
      ${colorMap.skyBlue[500]} 100%
    );
  }
`;

export const Wrapper = styled.div`
  display: grid;
  max-width: 1600px;
  margin: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-auto-flow: row dense;
  gap: 0;
  place-items: stretch stretch;
  justify-content: stretch;

  ${media.lg} {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: 1fr 1fr 1fr;

    grid-auto-flow: column dense;
  }

  .healthPortraits {
    grid-column: auto;
    grid-row: 1 / span 1;

    ${media.lg} {
      grid-column: 1 / span 1;
      grid-row: auto;

      &:nth-child(n + 4) {
        grid-column: 6 / span 1;
      }
    }

    ${media.max('lg')} {
      &:nth-child(n + 4) {
        grid-row: 3 / span 1;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  background-color: ${colorMap.offWhite[50]};
  grid-area: 2 / 1 / span 1 / span 3;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 32px;
  text-align: left;
  padding: 40px 12px;
  font: ${font('text-xl')};

  h2 {
    color: ${colorMap.clearBlue[700]};
    font: ${font('display-md')};
    max-width: 650px;
  }

  p {
    max-width: 770px;
  }

  button {
    margin-top: 12px;
  }

  .button-container {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 12px 24px;
    width: 100%;
    .button {
      width: 100%;
      ${media.sm} {
        width: fit-content;
      }
    }
  }

  ${media.md} {
    font: ${font('display-sm')};
    padding: 72px 111px;
    text-align: center;

    h2 {
      font: ${font('display-xl')};
    }
  }

  ${media.lg} {
    grid-area: 1 / 2 / span 3 / 6;
    padding: 185px 100px;

    h2 {
      font: ${font('display-xl')};
    }
  }
`;

export const HealthPortraits = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
