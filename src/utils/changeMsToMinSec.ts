export const changeMsToMinSec = (ms: number): string => {
  const tTime = new Date(ms);

  return `${tTime.getMinutes()}:${tTime.getSeconds()}`;
};
