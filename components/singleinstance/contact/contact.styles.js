import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const ContactStyles = styled.section`
  padding: 40px 0;
  position: relative;
  background: linear-gradient(
    180deg,
    ${colorMap.white} 0%,
    ${colorMap.white} 32%,
    ${colorMap.clearBlue[200]} 32%,
    ${colorMap.clearBlue[200]} 100%
  );
  text-align: ${props => (props.align === 'Center' ? 'center' : 'left')};
  ${media.md} {
    background: linear-gradient(
      180deg,
      ${colorMap.white} 0%,
      ${colorMap.white} 35%,
      ${colorMap.clearBlue[200]} 35%,
      ${colorMap.clearBlue[200]} 100%
    );
    padding: 72px 0;
  }

  ${media.lg} {
    background: linear-gradient(
      90deg,
      ${colorMap.white} 0%,
      ${colorMap.white} 47%,
      ${colorMap.clearBlue[200]} 47%,
      ${colorMap.clearBlue[200]} 100%
    );
    padding: 96px 0;
  }

  .heading-content {
    max-width: 100%;
    ${media.lg} {
      max-width: 470px;
    }
  }

  .eyebrow {
    font: ${font('text-md', 'bold')};
    color: ${colorMap.clearBlue[700]};
    margin-bottom: 0.5rem;
    ${media.md} {
      font: ${font('display-xs', 'bold')};
    }
  }

  .heading {
    font: ${font('display-sm', 'bold')};
    color: ${colorMap.black};
    margin-bottom: 1rem;
    ${media.md} {
      font: ${font('display-lg', 'bold')};
    }
    .colorizeText {
      color: ${colorMap.clearBlue[700]};
    }
  }

  .body-content {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    p {
      width: 100%;
      color: ${colorMap.black};
      font: ${font('text-md')};
    }
  }

  .marker {
    position: relative;
    left: 40%;
    ${media.md} {
      left: 69%;
    }
    ${media.lg} {
      left: 28%;
    }
  }

  .form-wrapper {
    margin-top: 4rem;
    padding: 2rem;
    background: ${colorMap.white};
    box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
    ${media.lg} {
      margin-top: 0;
    }
    .kicker {
      color: ${colorMap.signalOrange[400]};
      font: ${font('text-md', 'bold')};
      margin-bottom: 0.5rem;
      text-align: center;
    }
    .title {
      color: ${colorMap.black};
      font: ${font('display-xs', 'bold')};
      .colorizeText {
        color: ${colorMap.clearBlue[700]};
      }
      margin-bottom: 0.5rem;
      text-align: center;
    }
    .subtitle {
      color: ${colorMap.black};
      font: ${font('text-md')};
      margin-bottom: 2rem;
      text-align: center;
    }
  }
`;

export default ContactStyles;
