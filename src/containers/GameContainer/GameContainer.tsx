import { LoseWindow, ModalWrapper, StartWindow, WinWindow } from 'components/GameModals/GameModals';
import { changeMsToMinSec } from 'utils/changeMsToMinSec';

import { GameStatus } from './GameContainer.types';
import { useGame } from './useGame';

const config = {
  GAME_WIDTH: 1024,
  GAME_HEIGHT: 640,
  GAME_FIELD_DISTANCE_LENGTH: 1000,
  HERO_BORDER_MAIN_COLOR: '#0CABB0',
  HERO_FILL_MAIN_COLOR: '#0CABB0',
  HERO_BORDER_LOSE_COLOR: '#DD0B61',
  HERO_FILL_LOSE_COLOR: '#DD0B61',
  GAME_BORDER_ALLOWED_COLOR: '#399C82',
  GAME_BORDER_WARNING_COLOR: '#ffff00',
  GAME_BORDER_STOP_COLOR: '#F3627B',
  HERO_START_POSITION_X: 40,
  HERO_START_POSITION_Y: 300,
  HERO_DEFAULT_RADIUS: 20,
  HERO_DEFAULT_BOOST: 0.00009,
  HERO_DEFAULT_DEBOOST: 0.00002,
  MAX_GAME_TIME: 10000,
};

export const GameContainer = () => {
  const { gameActions, canvasRef, renderTime, gameStatus, score } = useGame(config);
  const { mouseDown, endBoost, startGame, restartGame } = gameActions;

  return (
    <div>
      <div>{changeMsToMinSec(renderTime)}</div>
      <canvas
        ref={canvasRef}
        width={config.GAME_WIDTH}
        height={config.GAME_HEIGHT}
        onMouseDown={mouseDown}
        onMouseUp={endBoost}
      />
      {gameStatus !== 'inGame' && (
        <ModalWrapper>
          {gameStatus === GameStatus.beforeGame && <StartWindow startGame={startGame} />}
          {gameStatus === GameStatus.lose && <LoseWindow restartGame={restartGame} />}
          {gameStatus === GameStatus.win && <WinWindow restartGame={restartGame} score={score} />}
        </ModalWrapper>
      )}
    </div>
  );
};
