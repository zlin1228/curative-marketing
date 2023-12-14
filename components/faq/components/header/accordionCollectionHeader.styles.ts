import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts';

import { BreadcrumbsStyles } from 'components/breadcrumbs/breadcrumbs.styles';

export const HeadingWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 24px;

  ${BreadcrumbsStyles} {
    ${media.sm} {
      margin-bottom: 24px;
    }

    ${media.xl} {
      margin-bottom: 48px;
    }
  }
`;

export const Heading = styled(ReactMarkdown)`
  & strong {
    color: ${colorMap.clearBlue[700]};
  }
`;

export const Eyebrow = styled.span`
  font: ${font('text-lg', 'bold')};
  color: ${colorMap.signalOrange[800]};

  ${media.sm} {
    font: ${font('display-xs', 'bold')};
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 12px;
  margin-top: 12px;
`;
