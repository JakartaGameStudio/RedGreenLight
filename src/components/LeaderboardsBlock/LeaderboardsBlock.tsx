import classNames from 'classnames';
import UserIcon from 'images/icons/user.svg';
import { LeaderboarsPlayer } from 'types/LeaderboarsPlayer.types';

import styles from './LeaderboardsBlock.module.scss';

export function LeaderboardsBlock({ login, place, value, isOwn }: LeaderboarsPlayer) {
  return (
    <div
      className={classNames(styles.leaderboardsBlock, {
        [styles.leaderboardsBlock_ownBlock]: isOwn,
      })}
    >
      <div className={styles.leaderboardsBlock__place}>{place}</div>
      <div className={styles.leaderboardsBlock__info}>
        <div className={styles.leaderboardsBlock__icon}>
          <UserIcon width="1em" height="1em" />
        </div>
        <p className={styles.leaderboardsBlock__login}>{login}</p>
      </div>
      <div className={styles.leaderboardsBlock__time}>{value}</div>
    </div>
  );
}
