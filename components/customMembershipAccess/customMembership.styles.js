import styled from 'styled-components';

import colorMap from 'atoms/colors/colors';
import { font } from 'atoms/typography/fonts.ts';

export const CustomMembershipStyles = styled.div`
  position: relative;
  text-align: center;
  z-index: 1;
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 570px;
  padding: 32px 40px;
  gap: 24px;
  background: ${colorMap.white};
  box-shadow: 0 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: 12px;

  form {
    text-align: left;

    label {
      font: ${font('text-sm', 'semiBold')};
      color: ${colorMap.black};
    }

    .password-input {
      width: 100%;
      padding: 10px 14px;
      margin-bottom: 24px;
      background: ${colorMap.white};
      border: 1px solid ${colorMap.gray[300]};
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
      border-radius: 8px;
    }

    .remember-input {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
  }
  .sign-in-button {
    width: 100%;
    margin-top: 16px;
  }
`;
