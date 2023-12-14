const getBackgroundImage = (image, fallback) => {
  if (image) {
    return `url(${image})`;
  }
  if (fallback) {
    return `url(${fallback})`;
  }

  return undefined;
};

export default getBackgroundImage;
