import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  color: ${colorMap.offWhite[50]};
  margin-bottom: 175px;

  ${media.md} {
    flex-flow: row nowrap;
    margin-bottom: unset;
  }

  > div.content {
    display: flex;
    flex-flow: column nowrap;
    gap: 24px;
    max-width: 100%;
    ${media.md} {
      max-width: 370px;
    }
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
    font: ${font('text-md')};

    ${media.md} {
      font: ${font('text-lg')};
    }
  }

  > * {
    flex-basis: auto;

    ${media.md} {
      flex: 0 1 47%;
    }
  }
`;

export default Wrapper;
