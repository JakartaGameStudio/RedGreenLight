import { BorderGame, Game, MainHero, TimeController } from 'game';
import { FinishLine } from 'game/FinishLine';
import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';

import { GameStatus } from './GameContainer.types';

export const useGame = (config) => {
  const canvasRef = useRef(null);
  const [renderTime, setRenderTime] = useState('');
  const [gameStatus, setGameStatus] = useState<keyof typeof GameStatus>(GameStatus.beforeGame);
  const { mainHero, timeController, finishLine, game, borderGame } = useMemo(() => {
    const _mainHero = new MainHero({
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
    const _timeController = new TimeController({
      timeout: 2000,
      safePeriod: 500,
      allowedMoveTime: 10000,
      totalTime: config.MAX_GAME_TIME,
    });
    const _borderGame = new BorderGame({
      width: config.GAME_WIDTH,
      height: config.GAME_HEIGHT,
    });
    const _game = new Game();
    const _finishLine = new FinishLine({
      height: config.GAME_HEIGHT,
      lengthDistance: config.GAME_FIELD_DISTANCE_LENGTH,
    });

    return {
      mainHero: _mainHero,
      timeController: _timeController,
      borderGame: _borderGame,
      game: _game,
      finishLine: _finishLine,
    };
  }, [config]);
  const gameActions = useMemo(() => {
    return {
      startGame: () => {
        game.start();
      },
      restartGame: () => {
        game.restart();
      },
      mouseDown: (e: MouseEvent<HTMLCanvasElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        mainHero.direction = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
        mainHero.startBoost();
      },
      endBoost: () => {
        mainHero.endBoost();
      },
    };
  }, [game, mainHero]);

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
      setGameStatus(GameStatus.inGame);
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
        mainHero.isWon = true;
      }

      if (mainHero.speed > 0 && timeController.timeout && !mainHero.isWon) {
        mainHero.isLost = true;
      }

      if (timeController.timeEnded && !mainHero.isWon) {
        borderGame.color = config.GAME_BORDER_STOP_COLOR;
        mainHero.isLost = true;
      }

      if (mainHero.isLost) {
        timeController.stop();
        setGameStatus('lose');
      }

      if (mainHero.isWon) {
        timeController.stop();
        setGameStatus('win');
      }

      if (timeController.timeOver && !mainHero.isLost && !mainHero.isWon) {
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
  }, [borderGame, config, finishLine, game, mainHero, timeController]);

  return {
    gameActions,
    gameStatus,
    canvasRef,
    renderTime,
  };
};
