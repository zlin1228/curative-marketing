import React from 'react';

const OptimizedHeading = ({ type, string, className }) => {
  if (!string) {
    return null;
  }

  switch (type) {
    case 'Heading 2':
      return <h2 className={className}>{string}</h2>;
    case 'Heading 3':
      return <h3 className={className}>{string}</h3>;
    case 'Heading 4':
      return <h4 className={className}>{string}</h4>;
    case 'Heading 5':
      return <h5 className={className}>{string}</h5>;
    case 'Heading 6':
      return <h6 className={className}>{string}</h6>;
    default:
      return <h1 className={className}>{string}</h1>;
  }
};

export default OptimizedHeading;
