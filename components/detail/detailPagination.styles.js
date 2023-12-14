import styled from 'styled-components';

import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${colorMap.gray[700]};
    font: ${font('text-md', 'medium')};
  }

  a:hover {
    background-color: ${colorMap.gray[100]};
  }

  .active {
    background-color: ${colorMap.gray[200]};
    pointer-events: none;
  }

  .disabled {
    color: ${colorMap.gray[600]};
    pointer-events: none;
  }
`;

export const TextButtonWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  gap: 6px;
  align-items: center;
  padding: 0px 8px;
  height: 32px;
  cursor: pointer;
`;
export const PageButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const PageMobileButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${colorMap.gray[800]};
`;
