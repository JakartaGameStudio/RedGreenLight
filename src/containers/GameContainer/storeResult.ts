const SCORE = 'maxScore';

export const storeResult = (score: number): void => {
  const currentMaxScore = localStorage.getItem(SCORE);

  localStorage.setItem(SCORE, Math.max(Number(currentMaxScore), score).toString());
};
