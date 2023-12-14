const onKeyDown = (event, action, targetKey) => {
  targetKey = targetKey ?? ['Enter', ' '];

  if (event.key === targetKey || targetKey.includes(event.key)) {
    event.preventDefault();
    action();
  }
};

export default onKeyDown;
