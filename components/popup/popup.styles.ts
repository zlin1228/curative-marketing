import { Title } from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 0;
  margin-bottom: 32px;
`;
export const PopupHeadingStyles = styled(Title)`
  font-size: 32px;
  line-height: 35.2px;
  font-weight: 600;
`;
