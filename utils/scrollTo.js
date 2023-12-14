const getElementPosition = element => element.getBoundingClientRect().top;

export const scrollTo = props => {
  const { id, ref, space } = props;
  // the position of the scroll bar before the user clicks the button
  const initialPosition = window.scrollY;
  // decide what type of reference that is
  // if neither ref or id is provided  set element to null
  const element = ref ? ref.current : id ? document.getElementById(id) : null;

  if (!element) {
    return false;
  }

  const destinationPos = initialPosition + getElementPosition(element) - space;
  window.scrollTo({
    top: destinationPos,
    behavior: 'smooth',
  });
};

export default scrollTo;
