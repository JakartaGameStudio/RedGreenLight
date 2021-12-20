import { LoseWindow, ModalWrapper, StartWindow, WinWindow } from 'components/GameModals/GameModals';
import { Title } from 'components/Title/Title';
import { useEffect } from 'react';
import { changeMsToMinSec } from 'utils/changeMsToMinSec';

import { GameStatus } from './GameContainer.types';
import { storeResult } from './storeResult';
import { useGame } from './useGame';

const config = {
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

export const GameContainer = () => {
  const { gameActions, canvasRef, renderTime, gameStatus, score } = useGame(config);
  const { startBoost, endBoost, startGame, restartGame } = gameActions;

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
      {gameStatus !== GameStatus.inGame && (
        <ModalWrapper>
          {gameStatus === GameStatus.beforeGame && <StartWindow startGame={startGame} />}
          {gameStatus === GameStatus.lose && <LoseWindow restartGame={restartGame} />}
          {gameStatus === GameStatus.win && <WinWindow restartGame={restartGame} score={score} />}
        </ModalWrapper>
      )}
    </div>
  );
};
