import { Hero } from './Hero';

const createHero = () =>
  new Hero({
    boost: 0.01,
    deboost: 0.01,
    radius: 30,
    x: 0,
    y: 0,
  });

describe('Hero', () => {
  test('should create hero', () => {
    const hero = createHero();

    expect(hero.speed).toBe(0);
    expect(hero.isLost).toBeFalsy();
    expect(hero.isWon).toBeFalsy;
    expect(hero.inBoost).toBeFalsy();
  });

  test('should increase speed and change position after the acceleration starts', () => {
    const hero = createHero();

    hero.startBoost();
    hero.move(100);

    const curX = hero.x;
    const curSpeed = hero.speed;

    expect(hero.inBoost).toBeTruthy();
    expect(curSpeed).toBeGreaterThan(0);
    expect(curX).toBeGreaterThan(0);

    hero.endBoost();
    hero.move(10);

    expect(hero.inBoost).toBeFalsy();
    expect(hero.speed).toBeLessThan(curSpeed);
    expect(hero.x).toBeGreaterThan(curX);
  });
});
