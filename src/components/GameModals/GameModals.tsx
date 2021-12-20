import { Button } from 'components/Button/Button';
import { Title } from 'components/Title/Title';
import { FC } from 'react';
import { changeMsToMinSec } from 'utils/changeMsToMinSec';

import styles from './GameModals.module.scss';

export const ModalWrapper: FC = ({ children }) => (
  <div className={styles.modalWrapper}>
    <div className={styles.modalWrapper__body}>{children}</div>
  </div>
);

export const StartWindow = ({ startGame }: { startGame: () => void }) => (
  <>
    <Title size="h3" className={styles.modalWrapper__title}>
      Начни игру
    </Title>
    <Button onClick={startGame}>Играть</Button>
  </>
);

export const LoseWindow = ({ restartGame }: { restartGame: () => void }) => (
  <>
    <Title size="h3" className={styles.modalWrapper__title}>
      Вы проиграли(((
    </Title>
    <Button onClick={restartGame}>Начать заново</Button>
  </>
);

export const WinWindow = ({ restartGame, score }: { restartGame: () => void; score: number }) => (
  <>
    <Title size="h3" className={styles.modalWrapper__title}>
      Вы выиграли. Ваше время: {changeMsToMinSec(score)}
    </Title>
    <Button onClick={restartGame}>Начать заново</Button>
  </>
);
