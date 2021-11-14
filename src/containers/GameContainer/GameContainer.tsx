import { LoseWindow, ModalWrapper, StartWindow, WinWindow } from 'components/GameModals/GameModals';
import { BorderGame, Game, MainHero, TimeController } from 'game';
import { FinishLine } from 'game/FinishLine';
import { useEffect, useRef, useState } from 'react';

const config = {
  GAME_WIDTH: 1024,
  GAME_HEIGHT: 640,
  DISTANCE_LENGTH: 300,
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
  TOTAL_TIME: 10000,
};
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
  totalTime: config.TOTAL_TIME,
});
const borderGame = new BorderGame({
  width: config.GAME_WIDTH,
  height: config.GAME_HEIGHT,
});
const game = new Game();
const finishLine = new FinishLine({
  height: config.GAME_HEIGHT,
  lengthDistance: config.DISTANCE_LENGTH,
});

export const GameContainer = () => {
  const [renderTime, setRenderTime] = useState('');
  const [gameStatus, setGameStatus] = useState<'inGame' | 'beforeGame' | 'win' | 'lose'>(
    'beforeGame',
  );
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    canvas.width = config.GAME_WIDTH;
    canvas.height = config.GAME_HEIGHT;

    game.beforeStart = () => {
      setGameStatus('inGame');
      timeController.start();
    };

    game.logic = (timeFraction: number) => {
      timeController.updateTime(timeFraction);

      if (timeController.allowedMove) {
        borderGame.color = config.GAME_BORDER_ALLOWED_COLOR;
      }

      if (timeController.safePeriod) {
        borderGame.color = config.GAME_BORDER_WARNING_COLOR;
      }

      if (timeController.timeout) {
        borderGame.color = config.GAME_BORDER_STOP_COLOR;
      }

      if (mainHero.leftBorder > finishLine.lengthDistance) {
        mainHero.isWin = true;
      }

      if (mainHero.speed > 0 && timeController.timeout && !mainHero.isWin) {
        mainHero.isLost = true;
      }

      if (timeController.endTime && !mainHero.isWin) {
        borderGame.color = config.GAME_BORDER_STOP_COLOR;
        mainHero.isLost = true;
      }

      if (mainHero.isLost) {
        timeController.stop();
        setGameStatus('lose');
      }

      if (mainHero.isWin) {
        timeController.stop();
        setGameStatus('win');
      }

      if (timeController.timeOver && !mainHero.isLost && !mainHero.isWin) {
        timeController.reset();
      }

      mainHero.move(timeFraction);
      mainHero.move(timeFraction);
    };

    game.render = () => {
      borderGame.render(ctx);
      mainHero.render(ctx);
      finishLine.render(ctx);
      const tTime = new Date(timeController.remainingTime);

      setRenderTime(`${tTime.getMinutes()}:${tTime.getSeconds()}`);
    };

    game.clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.restart = () => {
      mainHero.refresh();
      timeController.refresh();
      setGameStatus('inGame');
    };

    return () => {
      game.clearAnimate();
    };
  }, []);

  const startGame = () => {
    game.start();
  };
  const restartGame = () => {
    game.restart();
  };
  const startBoost = () => {
    mainHero.startBoost();
  };
  const endBoost = () => {
    mainHero.endBoost();
  };

  return (
    <div onMouseDown={startBoost} onMouseUp={endBoost}>
      <div>{renderTime}</div>
      <canvas ref={canvasRef} width={config.GAME_WIDTH} height={config.GAME_HEIGHT} />
      {gameStatus !== 'inGame' && (
        <ModalWrapper>
          {gameStatus === 'beforeGame' ? (
            <StartWindow startGame={startGame} />
          ) : gameStatus === 'lose' ? (
            <LoseWindow restartGame={restartGame} />
          ) : gameStatus === 'win' ? (
            <WinWindow restartGame={restartGame} />
          ) : null}
        </ModalWrapper>
      )}
    </div>
  );
};
