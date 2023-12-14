import DefaultHeader from 'components/header/defaultHeader.component';
import MinimalHeader from 'components/header/minimalHeader.component';

const Header = ({ component }) => {
  const { variant } = component;

  switch (variant) {
    case 'minimal':
      return <MinimalHeader component={component} />;
    default:
      return <DefaultHeader component={component} />;
  }
};

export default Header;
