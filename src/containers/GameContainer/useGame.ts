import { BorderGame, Game, MainHero, TimeController } from 'game';
import { FinishLine } from 'game/FinishLine';
import { useEffect, useMemo, useRef, useState } from 'react';

import { GameStatus } from './GameContainer.types';

export const useGame = (config) => {
  const canvasRef = useRef(null);
  const [renderTime, setRenderTime] = useState('');
  const [gameStatus, setGameStatus] = useState<keyof typeof GameStatus>(GameStatus.beforeGame);
  const gameElements = useMemo(() => {
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
      totalTime: config.MAX_GAME_TIME,
    });
    const borderGame = new BorderGame({
      width: config.GAME_WIDTH,
      height: config.GAME_HEIGHT,
    });
    const game = new Game();
    const finishLine = new FinishLine({
      height: config.GAME_HEIGHT,
      lengthDistance: config.GAME_FIELD_DISTANCE_LENGTH,
    });

    return {
      mainHero,
      timeController,
      borderGame,
      game,
      finishLine,
    };
  }, []);
  const gameActions = useMemo(() => {
    return {
      startGame: () => {
        gameElements.game.start();
      },
      restartGame: () => {
        gameElements.game.restart();
      },
      startBoost: () => {
        gameElements.mainHero.startBoost();
      },
      endBoost: () => {
        gameElements.mainHero.endBoost();
      },
    };
  }, []);

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

    gameElements.game.beforeStart = () => {
      setGameStatus(GameStatus.inGame);
      gameElements.timeController.start();
    };

    gameElements.game.logic = (timeFraction: number) => {
      gameElements.timeController.updateTime(timeFraction);

      if (gameElements.timeController.allowedMove) {
        gameElements.borderGame.color = config.GAME_BORDER_ALLOWED_COLOR;
      }

      if (gameElements.timeController.safePeriod) {
        gameElements.borderGame.color = config.GAME_BORDER_WARNING_COLOR;
      }

      if (gameElements.timeController.timeout) {
        gameElements.borderGame.color = config.GAME_BORDER_STOP_COLOR;
      }

      if (gameElements.mainHero.leftBorder > gameElements.finishLine.lengthDistance) {
        gameElements.mainHero.isWon = true;
      }

      if (
        gameElements.mainHero.speed > 0 &&
        gameElements.timeController.timeout &&
        !gameElements.mainHero.isWon
      ) {
        gameElements.mainHero.isLost = true;
      }

      if (gameElements.timeController.timeEnded && !gameElements.mainHero.isWon) {
        gameElements.borderGame.color = config.GAME_BORDER_STOP_COLOR;
        gameElements.mainHero.isLost = true;
      }

      if (gameElements.mainHero.isLost) {
        gameElements.timeController.stop();
        setGameStatus('lose');
      }

      if (gameElements.mainHero.isWon) {
        gameElements.timeController.stop();
        setGameStatus('win');
      }

      if (
        gameElements.timeController.timeOver &&
        !gameElements.mainHero.isLost &&
        !gameElements.mainHero.isWon
      ) {
        gameElements.timeController.reset();
      }

      gameElements.mainHero.move(timeFraction);
      gameElements.mainHero.move(timeFraction);
    };

    gameElements.game.render = () => {
      gameElements.borderGame.render(ctx);
      gameElements.mainHero.render(ctx);
      gameElements.finishLine.render(ctx);
      const tTime = new Date(gameElements.timeController.remainingTime);

      setRenderTime(`${tTime.getMinutes()}:${tTime.getSeconds()}`);
    };

    gameElements.game.clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

    gameElements.game.restart = () => {
      gameElements.mainHero.refresh();
      gameElements.timeController.refresh();
      setGameStatus('inGame');
    };

    return () => {
      gameElements.game.clearAnimate();
    };
  }, []);

  return {
    gameActions,
    gameStatus,
    canvasRef,
    renderTime,
  };
};
