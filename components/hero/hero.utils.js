export const getAlignClasses = alignment => {
  switch (alignment.toLowerCase()) {
    case 'left':
      return 'text-left';
    case 'right':
      return 'text-right';
    default:
      return 'justify-content-center align-items-center text-sm-left text-md-center';
  }
};

export default getAlignClasses;
