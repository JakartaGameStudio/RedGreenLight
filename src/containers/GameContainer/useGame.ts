import { Background, Game, MainHero, SafeZone, TimeController } from 'game';
import { MouseEvent, useEffect, useMemo, useRef, useState } from 'react';

import { GameStatus } from './GameContainer.types';

export const useGame = (config) => {
  const canvasRef = useRef(null);
  const [renderTime, setRenderTime] = useState<number | null>(null);
  const [gameStatus, setGameStatus] = useState<keyof typeof GameStatus>(GameStatus.beforeGame);
  const [score, setScore] = useState<number | null>(null);
  const { mainHero, timeController, game, background, safeZone } = useMemo(() => {
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
    const _background = new Background({
      width: config.GAME_WIDTH,
      height: config.GAME_HEIGHT,
      color: config.BACKGROUND_BASE_COLOR,
    });
    const _timeController = new TimeController({
      timeout: 2000,
      safePeriod: 800,
      allowedMoveTime: 3000,
      totalTime: config.MAX_GAME_TIME,
    });
    const _game = new Game();
    const _safeZone = new SafeZone({
      widthGame: config.GAME_WIDTH,
      heightGame: config.GAME_HEIGHT,
      lengthDistance: config.GAME_FIELD_DISTANCE_LENGTH,
      color: config.SAFEZONE_ALLOWED_COLOR,
    });

    return {
      mainHero: _mainHero,
      timeController: _timeController,
      game: _game,
      safeZone: _safeZone,
      background: _background,
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
      startBoost: (e: MouseEvent<HTMLCanvasElement>) => {
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
        safeZone.color = config.SAVEZONE_ALLOWED_COLOR;
        background.color = config.BACKGROUND_BASE_COLOR;
      }

      if (timeController.safePeriod) {
        safeZone.color = config.SAVEZONE_WARNING_COLOR;
      }

      if (timeController.timeout) {
        safeZone.color = config.SAVEZONE_WARNING_COLOR;
        background.color = config.BACKGROUND_STOP_COLOR;
      }

      if (mainHero.leftBorder > safeZone.lengthDistance) {
        mainHero.isWon = true;
      }

      if (mainHero.speed > 0 && timeController.timeout && !mainHero.isWon) {
        mainHero.isLost = true;
      }

      if (timeController.timeEnded && !mainHero.isWon) {
        background.color = config.BACKGROUND_STOP_COLOR;
        safeZone.color = config.SAVEZONE_WARNING_COLOR;
        mainHero.isLost = true;
      }

      if (mainHero.isLost) {
        timeController.stop();
        setGameStatus('lose');
      }

      if (mainHero.isWon) {
        timeController.stop();
        setScore(timeController.currentTime);
        setGameStatus('win');
      }

      if (timeController.timeOver && !mainHero.isLost && !mainHero.isWon) {
        timeController.reset();
      }

      mainHero.move(timeFraction);
      mainHero.move(timeFraction);
    };

    game.render = () => {
      background.render(ctx);
      mainHero.render(ctx);
      safeZone.render(ctx);
      setRenderTime(timeController.remainingTime);
    };

    game.clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.restart = () => {
      mainHero.refresh();
      timeController.refresh();
      setScore(null);
      setGameStatus('inGame');
    };

    return () => {
      game.clearAnimate();
    };
  }, [background, config, game, mainHero, safeZone, timeController]);

  return {
    score,
    gameActions,
    gameStatus,
    canvasRef,
    renderTime,
  };
};
