import {
  ChoiceHeroWindow,
  LoseWindow,
  StartWindow,
  WinWindow,
} from 'components/GameModals/GameModals';
import { Popup } from 'components/Popup/Popup';
import { Title } from 'components/Title/Title';
import { useEffect, useState } from 'react';
import { changeMsToMinSec } from 'utils/changeMsToMinSec';

import { GameStatus } from './GameContainer.types';
import { storeResult } from './storeResult';
import { useGame } from './useGame';

type HeroType = 'SLOW_HERO' | 'FAST_HERO';

type Config = {
  BACKGROUND_BASE_COLOR: string;
  BACKGROUND_STOP_COLOR: string;
  GAME_BORDER_ALLOWED_COLOR: string;
  GAME_BORDER_STOP_COLOR: string;
  GAME_BORDER_WARNING_COLOR: string;
  GAME_FIELD_DISTANCE_LENGTH: number;
  GAME_HEIGHT: number;
  GAME_WIDTH: number;
  HERO_BORDER_LOSE_COLOR: string;
  HERO_BORDER_MAIN_COLOR: string;
  HERO_DEFAULT_BOOST: number;
  HERO_DEFAULT_DEBOOST: number;
  HERO_DEFAULT_RADIUS: number;
  HERO_FILL_LOSE_COLOR: string;
  HERO_FILL_MAIN_COLOR: string;
  HERO_START_POSITION_X: number;
  HERO_START_POSITION_Y: number;
  MAX_GAME_TIME: number;
  SAVEZONE_ALLOWED_COLOR: string;
  SAVEZONE_WARNING_COLOR: string;
};

const DEFAULT_CONFIG: Config = {
  GAME_WIDTH: 1024,
  GAME_HEIGHT: 400,
  BACKGROUND_BASE_COLOR: '#ffffff',
  BACKGROUND_STOP_COLOR: '#DE75A0',
  SAVEZONE_ALLOWED_COLOR: '#76C5C8',
  SAVEZONE_WARNING_COLOR: '#F3627B',
  GAME_FIELD_DISTANCE_LENGTH: 900,
  HERO_BORDER_MAIN_COLOR: '#0CABB0',
  HERO_FILL_MAIN_COLOR: '#0CABB0',
  HERO_BORDER_LOSE_COLOR: '#DD0B61',
  HERO_FILL_LOSE_COLOR: '#DD0B61',
  GAME_BORDER_ALLOWED_COLOR: '#399C82',
  GAME_BORDER_WARNING_COLOR: '#ffff00',
  GAME_BORDER_STOP_COLOR: '#F3627B',
  HERO_START_POSITION_X: 60,
  HERO_START_POSITION_Y: 200,
  HERO_DEFAULT_RADIUS: 20,
  HERO_DEFAULT_BOOST: 0.00007,
  HERO_DEFAULT_DEBOOST: 0.00002,
  MAX_GAME_TIME: 80000,
};
const HERO_TYPES_CONFIG = {
  SLOW_HERO: {
    boost: 0.00002,
    deboost: 0.00001,
  },
  FAST_HERO: {
    boost: 0.00007,
    deboost: 0.00002,
  },
};
const getConfigWithHeroType = (config: Config, heroTypeConfig): Config => {
  return {
    ...config,
    HERO_DEFAULT_BOOST: heroTypeConfig.boost,
    HERO_DEFAULT_DEBOOST: heroTypeConfig.deboost,
  };
};

export const GameContainer = () => {
  const [config, setConfig] = useState<Config>(DEFAULT_CONFIG);
  const { gameActions, canvasRef, renderTime, gameStatus, score } = useGame(config);
  const { startBoost, endBoost, startGame, restartGame } = gameActions;
  const [heroType, setHeroType] = useState<HeroType | undefined>();

  useEffect(() => {
    if (!heroType) {
      return;
    }

    localStorage.setItem('heroType', heroType);
    setConfig((oldConfig) => getConfigWithHeroType(oldConfig, HERO_TYPES_CONFIG[heroType]));
  }, [heroType]);

  useEffect(() => {
    const localHeroType = localStorage.getItem('heroType');

    if (localHeroType === 'SLOW_HERO' || localHeroType === 'FAST_HERO') {
      setHeroType(localHeroType);
    }
  }, []);

  useEffect(() => {
    if (gameStatus === GameStatus.win) {
      storeResult(score);
    }
  }, [gameStatus, score]);

  return (
    <div>
      <div>
        <Title size="h2">{changeMsToMinSec(renderTime)}</Title>
      </div>
      <canvas
        ref={canvasRef}
        width={config.GAME_WIDTH}
        height={config.GAME_HEIGHT}
        onMouseDown={startBoost}
        onMouseUp={endBoost}
      />
      <Popup
        active={gameStatus !== GameStatus.inGame}
        onClose={GameStatus.beforeGame === gameStatus ? startGame : restartGame}
      >
        {gameStatus === GameStatus.beforeGame && !heroType && (
          <ChoiceHeroWindow setHeroType={setHeroType} />
        )}
        {gameStatus === GameStatus.beforeGame && heroType && <StartWindow startGame={startGame} />}
        {gameStatus === GameStatus.lose && <LoseWindow restartGame={restartGame} />}
        {gameStatus === GameStatus.win && <WinWindow restartGame={restartGame} score={score} />}
      </Popup>
    </div>
  );
};
