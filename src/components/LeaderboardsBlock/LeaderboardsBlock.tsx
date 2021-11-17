import classNames from 'classnames';
import UserIcon from 'images/icons/user.svg';
import { LeaderboardsPlayer } from 'types/LeaderboardsPlayer.types';

import styles from './LeaderboardsBlock.module.scss';

type LeaderboardsBlockProps = { isOwn: boolean; player: LeaderboardsPlayer };

export function LeaderboardsBlock({ player, isOwn }: LeaderboardsBlockProps) {
  const { value, login, place } = player;

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
