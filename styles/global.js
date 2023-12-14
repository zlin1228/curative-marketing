import { createGlobalStyle } from 'styled-components';

import { normalize } from 'styles/normalize';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font, fontWeight } from 'atoms/typography/fonts.ts';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    scroll-behavior: auto !important
  }
  
  body {
    font-family: 'Sohne', Helvetica, sans-serif;
    background-color: ${colorMap.offWhite[50]};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: never;

  }

  h1 {
    font: ${font('display-xl', 'bold')};
    ${media.max('lg')} {
      font: ${font('display-lg', 'bold')};
    }
    ${media.max('md')} {
      font: ${font('display-sm', 'bold')};
    }
  }

  h2 {
    font: ${font('display-lg', 'bold')};
    ${media.max('md')} {
      font: ${font('display-sm', 'bold')};
    }
  }

  h3 {
    font: ${font('display-md', 'semiBold')}; /* Styles in some mockups are off by a few px */
  }

  h4 {
    font: ${font('display-sm', 'semiBold')};
  }

  p, a { 
    font-weight: 300;
     font: ${font('text-lg')};
  }
  strong {
    font-weight: ${fontWeight.bold};
  }
  //Background Class
  .bg-blue {
    background-color: ${colorMap.clearBlue[500]};
  }

  .tooltip {
    &.show{
      opacity: 1;
    }    
 
    > .tooltip-inner {
      background: ${colorMap.white};
      padding: 8px 12px;
      box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
      min-width: 300px;
      p {
        font-family: 'Sohne', Helvetica, sans-serif;
        color: ${colorMap.clearBlue[700]};
        font: ${font('text-xs', 'semiBold')};
        font-weight: ${fontWeight.semiBold};
        margin-bottom: 0;
      }
    }

    > .tooltip-arrow::before {
      border-top-color: ${colorMap.white};
    }
  }
  .container {
    max-width: 770px;
    ${media.lg} {
      max-width: 1170px;
    }
  }
  
  .quote {
    text-align: center;
  }
`;

export default GlobalStyle;
