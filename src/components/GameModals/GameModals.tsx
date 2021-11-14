import { Button } from 'components/Button/Button';
import { FC } from 'react';

import styles from './GameModals.module.scss';

export const ModalWrapper: FC = ({ children }) => (
  <div className={styles.modelWrapper}>
    <div className={styles.modelWrapper__body}>{children}</div>
  </div>
);

export const StartWindow = ({ startGame }: { startGame: () => void }) => (
  <>
    <Button onClick={startGame}>Играть</Button>
  </>
);

export const LoseWindow = ({ restartGame }: { restartGame: () => void }) => (
  <>
    <p>Вы проиграли(((</p>
    <Button onClick={restartGame}>Начать заного</Button>
  </>
);

export const WinWindow = ({ restartGame }: { restartGame: () => void }) => (
  <>
    <p>Вы выйграли</p>
    <Button onClick={restartGame}>Начать заного</Button>
  </>
);
