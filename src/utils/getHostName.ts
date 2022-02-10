export function getHostName() {
  const { hostname, protocol } = window.location;

  return `${protocol}//${hostname}`;
}
