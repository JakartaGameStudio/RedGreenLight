import { BorderGame, Game, MainHero, TimeController } from 'game';
import { useEffect, useRef } from 'react';

const config = {
  GAME_WIDTH: 1024,
  GAME_HEIGHT: 640,
  HERO_BORDER_MAIN_COLOR: 'rgb(57, 156, 130)',
  HERO_FILL_MAIN_COLOR: 'rgba(57, 156, 130, 0.1)',
  HERO_BORDER_LOSE_COLOR: 'rgb(243, 98, 123)',
  HERO_FILL_LOSE_COLOR: 'rgba(243, 98, 123, 0.35)',
  GAME_BORDER_ALLOWED_COLOR: '#399C82',
  GAME_BORDER_WARNING_COLOR: '#ffff00',
  GAME_BORDER_STOP_COLOR: '#F3627B',
  HERO_START_POSITION_X: 40,
  HERO_START_POSITION_Y: 40,
  HERO_DEFAULT_RADIUS: 20,
  HERO_DEFAULT_BOOST: 0.00009,
  HERO_DEFAULT_DEBOOST: 0.00002,
};

export const GameContainer = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    canvas.width = config.GAME_WIDTH;
    canvas.height = config.GAME_HEIGHT;

    const mainHero = new MainHero({
      x: config.HERO_START_POSITION_X,
      y: config.HERO_START_POSITION_Y,
      radius: config.HERO_DEFAULT_RADIUS,
      boost: config.HERO_DEFAULT_BOOST,
      deboost: config.HERO_DEFAULT_DEBOOST,
      mainStyle: {
        stroke: config.HERO_BORDER_MAIN_COLOR,
        fill: config.HERO_FILL_MAIN_COLOR,
      },
      loseStyle: {
        stroke: config.HERO_BORDER_LOSE_COLOR,
        fill: config.HERO_FILL_LOSE_COLOR,
      },
    });

    const timeController = new TimeController({
      timeout: 2000,
      safePeriod: 500,
      allowedMoveTime: 3000,
    });

    const borderGame = new BorderGame({
      width: config.GAME_WIDTH,
      height: config.GAME_HEIGHT,
    });

    const game = new Game({
      beforeStart: () => {
        timeController.start();
      },
      logic: (timeFraction: number) => {
        timeController.updateTime(timeFraction);

        if (timeController.allowedMove) {
          borderGame.color = config.GAME_BORDER_ALLOWED_COLOR;
        }

        if (timeController.safePeriod) {
          borderGame.color = config.GAME_BORDER_WARNING_COLOR;
        }

        if (timeController.timeout) {
          borderGame.color = config.GAME_BORDER_STOP_COLOR;
          mainHero.checkStop();
        }

        if (timeController.timeOver && !mainHero.isLost) {
          timeController.start();
        }

        mainHero.move(timeFraction);
        mainHero.move(timeFraction);
      },
      render: () => {
        borderGame.render(ctx);
        mainHero.render(ctx);
      },
      clear: () => ctx.clearRect(0, 0, canvas.width, canvas.height),
    });

    canvas.addEventListener('mousedown', () => {
      mainHero.startBoost();
    });
    canvas.addEventListener('mouseup', () => {
      mainHero.endBoost();
    });

    game.start();
  }, []);

  return <canvas ref={ref} width={config.GAME_WIDTH} height={config.GAME_HEIGHT} />;
};
