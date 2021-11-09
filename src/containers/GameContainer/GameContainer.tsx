import { BorderGame, Game, MainHero, TimeController } from 'game';
import { useEffect, useRef } from 'react';

export const GameContainer = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement;
    const width = 1024;
    const height = 640;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    canvas.width = width;
    canvas.height = height;

    const mainHero = new MainHero({
      x: 40,
      y: 40,
      radius: 20,
      boost: 0.00009,
      deboost: 0.00002,
      mainStyle: {
        stroke: 'rgb(57, 156, 130)',
        fill: 'rgba(57, 156, 130, 0.1)',
      },
      loseStyle: {
        stroke: 'rgb(243, 98, 123)',
        fill: 'rgba(243, 98, 123, 0.35)',
      },
    });

    const timeController = new TimeController({
      timeout: 2000,
      safePeriod: 500,
      allowedMoveTime: 3000,
    });

    const borderGame = new BorderGame({
      width: width,
      height: height,
    });

    const game = new Game({
      beforeStart: () => {
        timeController.start();
      },
      logic: (timeFraction: number) => {
        timeController.addRealTime(timeFraction);
        if (timeController.allowedMove) {
          borderGame.color = '#399C82';
        }
        if (timeController.safePeriod) {
          borderGame.color = '#ffff00';
        }
        if (timeController.timeout) {
          borderGame.color = '#F3627B';
          mainHero.checkStop();
        }
        if (timeController.timeOver && !mainHero.lose) {
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
  return <canvas ref={ref} width={300} height={300} />;
};
