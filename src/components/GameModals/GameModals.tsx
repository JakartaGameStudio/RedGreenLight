import { Button } from 'components/Button/Button';
import { Title } from 'components/Title/Title';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';
import { changeMsToMinSec } from 'utils/changeMsToMinSec';

import styles from './GameModals.module.scss';

type HeroType = 'SLOW_HERO' | 'FAST_HERO';

export const ModalWrapper: FC = ({ children }) => (
  <>
    {children}
    <div className={styles.modalWrapper__tomain}>
      <NavLink className={styles.link} to={AppRoutes.index}>
        Вернуться на главную
      </NavLink>
    </div>
  </>
);

export const StartWindow = ({
  startGame,
  choiseHero,
}: {
  choiseHero: () => void;
  startGame: () => void;
}) => (
  <ModalWrapper>
    <Title size="h3" className={styles.modalWrapper__title}>
      Начни игру
    </Title>
    <Button onClick={startGame}>Играть</Button>
    <ChangeHeroButton choiseHero={choiseHero} />
  </ModalWrapper>
);

export const ChoiceHeroWindow = ({ setHeroType }: { setHeroType: (hero: HeroType) => void }) => (
  <ModalWrapper>
    <Title size="h4" className={styles.modalWrapper__title}>
      Выберете героя:
    </Title>
    <div className={styles.modalWrapper__choosingHero}>
      <Button onClick={() => setHeroType('FAST_HERO')}>Быстрый</Button>
      <Button onClick={() => setHeroType('SLOW_HERO')}>Медленный</Button>
    </div>
  </ModalWrapper>
);

export const LoseWindow = ({
  restartGame,
  choiseHero,
}: {
  choiseHero: () => void;
  restartGame: () => void;
}) => (
  <ModalWrapper>
    <Title size="h3" className={styles.modalWrapper__title}>
      Вы проиграли(((
    </Title>
    <Button onClick={restartGame}>Начать заново</Button>
    <ChangeHeroButton choiseHero={choiseHero} />
  </ModalWrapper>
);

export const WinWindow = ({
  restartGame,
  score,
  choiseHero,
}: {
  choiseHero: () => void;
  restartGame: () => void;
  score: number;
}) => (
  <ModalWrapper>
    <Title size="h3" className={styles.modalWrapper__title}>
      Вы выиграли. Ваше время: {changeMsToMinSec(score)}
    </Title>
    <Button onClick={restartGame}>Начать заново</Button>
    <ChangeHeroButton choiseHero={choiseHero} />
  </ModalWrapper>
);

const ChangeHeroButton = ({ choiseHero }: { choiseHero: () => void }) => (
  <div className={styles.modalWrapper__changeHero}>
    <Button onClick={choiseHero} mods={['grey', 'small', 'inline']}>
      Сменить героя
    </Button>
  </div>
);
