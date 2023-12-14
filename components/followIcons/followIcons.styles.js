import styled from 'styled-components';

import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const FollowIconsWrapper = styled.div`
  &.follow-us-container {
    padding-top: ${({ inline }) => !inline && '32px'};
    display: flex;
    flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
    width: 100%;
    gap: 16px;
  }

  .follow-row {
    gap: ${({ inline }) => (inline ? '16px' : '24px')};
  }

  .follow-link-container {
    display: block;
    width: fit-content;
  }

  .follow-us-heading {
    font: ${font('text-lg', 'bold')};
    color: ${colorMap.black};
  }
`;

export default FollowIconsWrapper;
