import styled from 'styled-components';

import colorMap from 'atoms/colors/colors';

export const RichTextStyles = styled.section`
  padding: 48px 0;
  position: relative;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 20px 0;
  }
  .colorizeText {
    color: ${colorMap.clearBlue[700]};
  }
`;

export default RichTextStyles;
