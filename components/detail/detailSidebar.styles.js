import styled from 'styled-components';

import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const SidebarWrapper = styled.div`
  .popular-articles-heading {
    font: ${font('display-xs', 'bold')};
    color: ${colorMap.signalOrange[800]};
    margin-bottom: 32px;
  }

  .popular-article-container {
    margin-bottom: 32px;
  }

  .popular-article-link {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  .popular-article-title {
    font: ${font('text-xl', 'bold')};
    color: ${colorMap.black};
  }

  .popular-article-date {
    font: ${font('text-sm')};
    color: ${colorMap.black};
  }

  .archive-link {
    display: block;
    margin-bottom: 32px;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  .archive-text {
    font: ${font('text-xl', 'bold')};
    color: ${colorMap.clearBlue[700]};
    margin-right: 14px;
    margin-bottom: 32px;
  }

  .newsletter-container {
    background: ${colorMap.skyBlue[50]};
    padding: 32px;

    .hs-error-msg {
      color: ${colorMap.black} !important;
    }
  }

  .newsletter-form-heading {
    font: ${font('display-xs', 'bold')};
    color: ${colorMap.black};
    margin-bottom: 24px;
  }
`;

export default SidebarWrapper;
