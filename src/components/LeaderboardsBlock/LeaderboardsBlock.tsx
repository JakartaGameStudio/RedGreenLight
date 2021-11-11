import classNames from 'classnames';


import styles from './LeaderboardsBlock.module.scss';
import { LeaderboarsPlayer } from 'types/LeaderboarsPlayer.types';
import UserIcon from 'images/icons/user.svg';

export function LeaderboardsBlock({ login, place, value, isOwn }: LeaderboarsPlayer) {
  return (
    <div className={classNames(styles.block, {
      [styles.ownBlock]: isOwn,
    })} >
      <div className={styles.place}>{place}</div>
      <div className={styles.playerInfo}>
        <div className={styles.icon}>
          <UserIcon width="1em" height="1em" />
        </div>
        <p className={styles.login}>{login}</p>
      </div>
      <div className={styles.time}>{value}</div>
    </div>
  );
}
