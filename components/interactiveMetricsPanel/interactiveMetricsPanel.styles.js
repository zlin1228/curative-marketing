import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

const sectionInlinePadding = {
  default: '24px',
  sm: '24px',
  desktop: '0px',
};

export const Section = styled.section`
  padding: 32px ${sectionInlinePadding.default};
  background: ${colorMap.offWhite[50]};
  contain: content;

  ${media.sm} {
    padding: 72px ${sectionInlinePadding.sm};
  }

  ${media.xl} {
    padding: 96px ${sectionInlinePadding.desktop};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  gap: 27px;
  margin: auto;

  ${media.sm} {
    gap: 30px;
    max-width: 818px;
  }

  ${media.xl} {
    flex-direction: row;
    max-width: 1170px;
  }
`;

export const Container = styled.div`
  flex: 1 0 100%;

  ${media.xl} {
    flex: 1 1 50%;
  }
`;

export const ContentContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 24px;
`;

export const Heading = styled.h2`
  color: ${colorMap.black};
  font: ${font('display-md', 'bold')};
`;

export const Content = styled.div`
  color: ${colorMap.black};
  font: ${font('text-lg')};
`;

export const ScrollWrapper = styled.div`
  position: relative;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    left: calc(100vw - 70px);
    top: 0;
    bottom: 0;
    height: 100%;
    width: 70px;
    background: linear-gradient(270deg, ${colorMap.offWhite[50]} 40%, rgba(246, 243, 235, 0) 100%);

    ${media.md} {
      display: none;
    }
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
  overflow-x: scroll;
  padding-block: 8px;
  margin-block: -8px;
  width: calc(100% + (${sectionInlinePadding.default} * 2));
  left: -${sectionInlinePadding.default};
  padding-inline: ${sectionInlinePadding.default};
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${media.sm} {
    width: calc(100% + (${sectionInlinePadding.sm} * 2));
    left: -${sectionInlinePadding.sm};
    padding-inline: ${sectionInlinePadding.sm};
  }

  ${media.md} {
    width: 100%;
    flex-wrap: wrap;
    overflow-x: visible;
  }
`;

export const MetricsContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  gap: 24px 32px;
  padding: 40px 30px;
  background-color: ${colorMap.gray[25]};
  border: 1px solid ${colorMap.gray[200]};

  ${media.sm} {
    padding: 56px 62px;
  }
`;

export const Metric = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 8px;
  grid-column: ${({ wide }) => (wide ? '1 / span 2' : undefined)};
`;

export const MetricFigure = styled.h3`
  color: ${colorMap.clearBlue[700]};
  font: ${font('display-sm', 'bold')};
`;

export const MetricDescription = styled.div`
  color: ${colorMap.black};
  font: ${font('text-md')};
`;
