import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const ThankyouStyles = styled.section`
  padding: 40px 0;
  position: relative;
  background: ${colorMap.white};
  text-align: ${props => (props.align === 'Center' ? 'center' : 'left')};
  ${media.md} {
    padding: 72px 0;
  }

  ${media.lg} {
    padding: 96px 0;
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
    font: ${font('display-xs', 'bold')};
    color: ${colorMap.black};
    margin-bottom: 1.5rem;
    ${media.md} {
      font: ${font('display-sm', 'bold')};
    }
  }

  .body-content {
    p {
      max-width: 470px;
      margin: 32px auto;
      font: ${font('text-sm')};
      ${media.md} {
        font: ${font('text-xl')};
      }
    }
    img {
      max-width: 470px;
      max-height: 470px;
    }
    button {
      margin: 6px 0;
      ${media.md} {
        margin: 0 6px;
      }
    }
  }
`;

export default ThankyouStyles;
