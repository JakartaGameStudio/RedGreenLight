const SCORE = 'maxScore';

export const saveResultLocal = (score: number): void => {
  const currentMaxScore = localStorage.getItem(SCORE);

  if (score > +currentMaxScore) {
    localStorage.setItem(SCORE, score.toString());
  }
};
