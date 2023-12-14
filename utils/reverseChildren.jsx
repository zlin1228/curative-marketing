import React, { Children } from 'react';

const ReverseChildren = ({ children, reversed }) => {
  if (!reversed) {
    return <>{children}</>;
  }

  const reversedChildren = Children.toArray(children).reverse();

  return <>{reversedChildren}</>;
};

export default ReverseChildren;
