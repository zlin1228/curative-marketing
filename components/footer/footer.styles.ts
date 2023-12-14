import styled from 'styled-components';

import { media } from 'atoms/breakpoints/breakpoints';
import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts';

export const Wrapper = styled.footer`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  margin-bottom: 72px;

  .footer--logo {
    align-self: flex-start;
  }

  ${media.md} {
    .footer--logo {
      align-self: flex-end;
    }
  }

  ${media.lg} {
    flex-flow: row nowrap;

    .footer--logo {
      align-self: flex-start;
      order: 2;
    }
  }
`;

export const ColumnsWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '40px 32px',
  width: '100%',

  div: {
    flex: '1 0 auto',

    p: {
      color: colorMap.skyBlue[100],
      font: font('text-sm'),
    },

    a: {
      color: theme.colors.offWhite[50],
      font: font('text-md'),
    },
  },
}));

export const PrivacyBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 24px;

  p,
  a {
    color: ${colorMap.skyBlue[100]};
    font: ${font('text-md', 'regular')};
    text-decoration: none;
    margin: 0;
  }

  .badge-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .badge-image-container {
      max-width: 40px;
    }
  }
`;

export const MinimalFooterStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 24px;

  .footer--logo {
    width: 150px;
    ${media.md} {
      width: 200px;
    }
  }

  .badge-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 24px;
  }

  .links-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;

    ${media.md} {
      gap: 24px;
    }
    ${media.lg} {
      gap: 32px;
    }
  }
`;
