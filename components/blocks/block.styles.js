import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const ItemBlockStyles = styled.section`
  flex: 0 0 100%;
  padding: 1rem;
  max-width: 100%;
  border: 1px solid ${colorMap.gray[200]};
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;
  ${media.md} {
    flex: 0 0 45%;
  }
  ${media.lg} {
    flex: 0 0 100%;
    max-width: 370px;
  }
  .icon {
    flex: 0 0 36px;
    display: inline-block;
    width: 36px;
    height: 36px;
    vertical-align: middle;
  }
  .content {
    vertical-align: middle;
  }
  .title {
    color: ${colorMap.black};
    font: ${font('text-lg', 'bold')};
    display: block;
  }
  .subheading {
    a {
      color: ${colorMap.clearBlue[700]};
      text-decoration: none;
    }
    p {
      margin: 0;
      white-space: pre-wrap;
      font: ${font('text-md')};
      color: ${colorMap.clearBlue[700]};
    }
  }
`;

export default ItemBlockStyles;
