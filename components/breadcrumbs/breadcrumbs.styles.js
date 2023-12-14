import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

import { isLight } from 'utils/colorUtils';

export const BreadcrumbsStyles = styled.div`
  padding-top: ${({ paddingTop }) => paddingTop};
  margin-bottom: ${({ marginMobileBottom }) => marginMobileBottom || '24px'};
  display: flex;
  align-items: center;
  gap: 16px;

  ${media.sm} {
    margin-bottom: ${({ marginTabletBottom }) => marginTabletBottom || '48px'};
  }

  ${media.desktop} {
    margin-bottom: ${({ marginBottom }) => marginBottom || '72px'};
  }

  a,
  span {
    color: ${({ backgroundColor }) => (isLight(backgroundColor) ? colorMap.black : colorMap.white)};
  }

  .breadcrumb {
    min-width: max-content;
  }

  .last-breadcrumb {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    min-width: 100px;
    overflow: hidden;
  }

  .last-breadcrumb a {
    color: ${({ backgroundColor }) => (isLight(backgroundColor) ? colorMap.gray[700] : colorMap.white)};
  }
`;

export const MenuItem = styled.span`
  margin-bottom: 0;
  display: flex;
  align-items: center;

  a {
    margin-right: 16px;
    text-decoration: none;
    font: ${font('text-sm', 'medium')};
  }
`;

export const Spacer = styled.span`
  font: ${font('text-sm', 'medium')};
`;

export const NoLink = styled.span`
  font: ${font('text-sm', 'medium')};
`;
