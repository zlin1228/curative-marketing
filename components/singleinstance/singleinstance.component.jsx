import JobBoard from 'components/singleinstance/JobBoard/JobBoard';
import Contact from 'components/singleinstance/contact/contact.component';
import Thankyou from 'components/singleinstance/thankyou/thankyou.component';

const SingleInstance = ({ component }) => {
  const { variant } = component;

  switch (variant) {
    case 'Thank You Hero':
      return <Thankyou component={component} />;
    case 'Contact Hero':
      return <Contact component={component} />;
    case 'Job Board':
      return <JobBoard component={component} />;
    default:
      return null;
  }
};

export default SingleInstance;
