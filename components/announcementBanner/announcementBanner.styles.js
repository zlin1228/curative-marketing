import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

import { getColor } from 'utils/colorUtils';

const bannerBorderMap = {
  ClearBlue50: colorMap.clearBlue[700],
  ClearBlue800: colorMap.clearBlue[800],
  AccentGray25: colorMap.accentGray[300],
};

const contentColorMap = {
  ClearBlue50: colorMap.clearBlue[700],
  ClearBlue800: colorMap.white,
  AccentGray25: colorMap.black,
};

export const AnnouncementBannerStyles = styled.section`
  position: sticky;
  top: 0;
  z-index: 1001;
  width: 100%;
  background: ${({ backgroundColor }) => getColor(backgroundColor)};
  border-style: solid;
  border-color: ${({ backgroundColor }) => bannerBorderMap[backgroundColor]};
  border-width: ${({ isAnnouncementBarFirst }) => (isAnnouncementBarFirst ? '0' : '1px')} 0 1px;

  .announcement-bar-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0 16px 12px;
    ${media.max('md')} {
      flex-direction: column;
    }

    .button-container {
      display: flex;
      gap: 8px;
      ${media.max('md')} {
        flex-direction: column;
        width: 100%;
      }
      .button {
        width: 100%;
        ${media.sm} {
          width: fit-content;
        }
      }
    }

    .cta-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
    }
    .close-button-wrapper {
      margin-left: 24px;
      z-index: 1001;
      cursor: pointer;

      ${media.max('md')} {
        margin-left: 0;
        position: absolute;
        top: 24px;
        right: 24px;
      }
    }
  }
`;

export const AnnouncementBannerContent = styled.div`
  ${media.max('md')} {
    padding-bottom: 16px;
    margin-right: 32px;
  }

  ${media.xl} {
    margin-right: 128px;
  }
  p {
    font: ${font('text-md')};
    color: ${({ backgroundColor }) => contentColorMap[backgroundColor]};
    margin: 0;
  }
`;
