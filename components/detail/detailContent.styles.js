import styled from 'styled-components';

import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const DetailContentStyles = styled.div`
  overflow: hidden;
  .share-wrapper {
    gap: 12px;
  }

  .share-heading {
    font: ${font('text-xl', 'bold')};
    color: ${colorMap.clearBlue[700]};
  }

  .detail-content-container {
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 16px;
    }
    h2 {
      font: ${font('display-sm')};
    }
    h3,
    h4,
    h5,
    h6 {
      font: ${font('display-xs')};
    }
  }
`;

export const DetailContainer = styled.div`
  display: block;
  width: fit-content;
  padding-right: 64px;

  .detail-heading {
    font: ${font('text-sm')};
    color: ${colorMap.clearBlue[700]};
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .detail-subheading {
    font: ${font('text-lg')};
    color: ${colorMap.gray[700]};
  }
`;

export const ShareContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  width: 32px;
  height: 32px;
  padding: 0px;
  border: 1px solid ${colorMap.gray[300]};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;

  :hover {
    cursor: pointer;
    transition: border 0.3s ease-in-out;
    border: 1px solid ${colorMap.gray[500]};
  }
`;
