import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts';

export const CountdownClockWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  gap: 24px;
`;

export const CountdownClockHeaderStyles = styled.div`
  width: 100%;
  font: ${font('text-lg', 'medium')};
  text-align: center;
  color: ${colorMap.black};

  ${media.sm} {
    font: ${font('text-xl', 'medium')};
  }
`;

export const CountdownClockFooterStyles = styled.div`
  width: 100%;
  font: ${font('text-md', 'medium')};
  text-align: center;
  color: ${colorMap.black};

  ${media.md} {
    font: ${font('text-xl', 'medium')};
  }
`;

export const ClockStyles = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  gap: 6px;
`;

export const NumberWrapperStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 68px;
  border-radius: 3.43px;
  border: 1px solid ${colorMap.gray[300]};
  background-color: ${colorMap.white};
`;

export const NumberStyles = styled.span`
  font: ${font('display-md', 'medium')};
  color: ${colorMap.black};
`;
