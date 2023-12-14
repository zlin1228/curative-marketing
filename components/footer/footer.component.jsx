import DefaultFooter from 'components/footer/defaultFooter.component';
import MinimalFooter from 'components/footer/minimalFooter.component';

const Footer = ({ component }) => {
  const { variant } = component;

  switch (variant) {
    case 'minimal':
      return <MinimalFooter component={component} />;
    default:
      return <DefaultFooter component={component} />;
  }
};

export default Footer;
