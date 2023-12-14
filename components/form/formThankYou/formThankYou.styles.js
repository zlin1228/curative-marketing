import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  padding: 40px;
  color: ${colorMap.black};
  font: ${font('text-md')};
  text-align: center;
  background-color: ${colorMap.white};
  border-radius: 4px;

  h2 {
    font: ${font('display-xs')};
  }

  .kicker {
    color: ${colorMap.clearBlue[700]};
    font: ${font('overline', 'semiBold')};
  }

  ${media.md} {
    font: ${font('text-lg')};

    h2 {
      font: ${font('display-sm')};
    }
  }
`;
export const SocialIconWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;
`;
