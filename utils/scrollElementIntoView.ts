const scrollElementIntoView = (id: string) => {
  const element = document.getElementById(id);
  element.scrollIntoView(true);
};

export default scrollElementIntoView;
