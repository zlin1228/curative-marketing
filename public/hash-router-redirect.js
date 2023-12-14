if (window.location.hash.includes('#!')) {
  const routeWithoutHash = window.location.hash.replace('#!', '');
  window.location.replace(routeWithoutHash);
}
