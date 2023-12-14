import { Col } from 'react-bootstrap';
import styled from 'styled-components';

import { breakpoints, media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { fontWeight } from 'atoms/typography/fonts';

export const JobBoardWrapper = styled.div`
  position: relative;
  .colorizeText {
    color: ${colorMap.clearBlue[700]};
  }
  b,
  strong {
    color: ${colorMap.clearBlue[700]};
  }

  background: linear-gradient(
    180deg,
    ${colorMap.clearBlue[200]} 0%,
    ${colorMap.clearBlue[200]} 28%,
    #fafbfd 28%,
    #fafbfd 100%
  );

  ${media.sm} {
    background: linear-gradient(
      180deg,
      ${colorMap.clearBlue[200]} 0%,
      ${colorMap.clearBlue[200]} 35%,
      #fafbfd 35%,
      #fafbfd 100%
    );
  }

  ${media.lg} {
    background: linear-gradient(
      90deg,
      ${colorMap.clearBlue[200]} 0%,
      ${colorMap.clearBlue[200]} 50%,
      #fafbfd 50%,
      #fafbfd 100%
    );
  }

  .wrapper {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: 1fr;
    place-items: center stretch;
    align-content: center;
    row-gap: 20px;
    margin: auto;

    .grid-container {
      padding: 40px 20px;
      grid-column: 1;
    }

    .grid-container:first-child {
      grid-row: ${props => (props.reversed ? 2 : 1)};
    }

    .grid-container:nth-child(2) {
      grid-row: ${props => (props.reversed ? 1 : 2)};
    }

    ${media.md} {
      row-gap: 50px;
      grid-template-columns: repeat(auto-fit, minmax(calc(${breakpoints.md} / 2), 1fr));
    }

    ${media.lg} {
      row-gap: 144px;

      .grid-container {
        justify-items: end;
        padding: 96px 24px;
        grid-row: 1 !important;
      }

      .grid-container:first-child {
        grid-column: 1;
        padding-right: clamp(24px, 5vw, 116px);
        max-width: 600px;
      }

      .grid-container:nth-child(2) {
        grid-column: 2;
        padding-left: clamp(24px, 5vw, 116px);
      }
    }
  }
`;
export const TextCol = styled.div`
  padding: 96px 24px;
  place-self: center;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  button {
    border: 1px solid ${colorMap.clearBlue[700]};
  }

  ${media.md} {
    max-width: 770px;
  }
  ${media.lg} {
    place-self: center end;
  }
`;
export const JobCol = styled(Col)`
  place-self: center;
  padding: 96px 40px;
  width: 100%;
  max-width: 540px;

  ${media.md} {
    max-width: 770px;
  }
  ${media.lg} {
    place-self: center start;
    width: 90%;
  }

  h3 {
    color: ${colorMap.clearBlue[700]};
    margin-bottom: 32px;
    font-size: 24px;

    ${media.lg} {
      margin-bottom: 36px;
      min-width: 300px;
      max-width: 100%;
    }
  }
`;
export const JobList = styled.div`
  ${media.lg} {
    padding-left: 1.5rem;
  }
`;
export const JobSingle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-between;
  padding: 20px 0;

  &:not(.no-jobs) {
    border-bottom: 1px solid ${colorMap.gray[400]};
  }

  ${media.sm} {
    flex-direction: row;
  }
  ${media.xl} {
    gap: 80px;
  }

  .job-meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    max-width: 350px;
  }
  .job-title {
    font-size: 18px;
    font-weight: 900;
  }
  .job-location {
    margin: 0;
  }
  .apply-btn-container {
    grid-column: 2;
    grid-row: 1/3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const JobBoardLink = styled.div`
  display: block;
  background: ${colorMap.clearBlue[700]};
  color: white;
  border-radius: 2rem;
  padding: 14px 48px;
  text-decoration: none;
  font-weight: ${fontWeight.bold};
  width: 100%;
  text-align: center;

  &:hover,
  &:focus-visible {
    color: white;
    background: ${colorMap.clearBlue[900]};
  }
  &:active {
    color: ${colorMap.clearBlue[300]};
  }
`;
