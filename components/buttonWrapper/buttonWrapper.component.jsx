import { ButtonWrapperStyles } from 'components/buttonWrapper/buttonWrapper.styles';

const ButtonWrapper = ({ children }) => (
  <ButtonWrapperStyles className="button-wrapper">{children}</ButtonWrapperStyles>
);

export default ButtonWrapper;
