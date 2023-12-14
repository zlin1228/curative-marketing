import styled from 'styled-components';

import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const Col = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  a {
    color: ${colorMap.white};
    text-decoration: none;
    font: ${font('text-md')};
  }
`;

export const Label = styled.p`
  margin-bottom: 8px;
  color: ${colorMap.clearBlue[400]};
  font: ${font('text-sm')}; ;
`;
