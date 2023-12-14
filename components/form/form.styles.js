import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  color: ${props => (props?.isDarkBackground ? colorMap.offWhite[50] : colorMap.gray[700])};
  margin-bottom: 32px;
  ${media.md} {
    margin-bottom: 64px;
  }

  ${media.lg} {
    margin-bottom: 128px;
  }

  .hubspotForm {
    color: ${props => (props?.isDarkBackground && props?.variation === 'box' ? colorMap.gray[700] : 'unset')};
  }

  ${media.lg} {
    flex-flow: row;
    margin-bottom: unset;
  }

  > div.form {
    display: flex;
    flex-flow: column nowrap;
    gap: 24px;
    width: 100%;
  }

  .image-wrapper {
    display: flex;
    max-width: 370px;
    width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
    ${media.lg} {
      max-width: 100%;
      .form-image {
        max-width: 370px;
      }
    }
  }

  .parallax-container {
    ${media.lg} {
      margin: ${props => (props.position?.isDefault ? '0 0 20%' : '0 0 10%')};
    }
  }

  > * {
    flex-basis: auto;

    ${media.md} {
      flex: 0 1 47%;
    }
  }

  .full-form {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    width: 100%;
    gap: 30px;

    .content {
      align-self: center;
      max-width: 770px;
    }

    .form-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      ${media.sm} {
        flex-direction: row;
        .image-wrapper,
        .form {
          width: 100%;
          max-width: 50%;
        }
        .image-wrapper {
          align-self: center;
        }
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 24px;
  max-width: 100%;
  align-items: center;
  text-align: ${({ alignment }) => alignment};

  .heading {
    width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    width: 100%;
    color: ${props => (props?.isDarkBackground ? colorMap.white : colorMap.clearBlue[700])};
  }

  h2 {
    font: ${font('display-sm')};

    ${media.md} {
      font: ${font('display-lg')};
    }

    ${media.lg} {
      font: ${font('display-lg', 'bold')};
    }
  }

  p {
    margin: 0;
    font: ${font('text-md')};

    ${media.md} {
      font: ${font('text-lg')};
    }
  }

  .kicker {
    width: 100%;
    margin: 0;
    font: ${font('display-xs', 'bold')};
    color: ${props => (props.isDarkBackground ? colorMap.white : colorMap.signalOrange[700])};
  }
`;
