import { ApiUserKeys } from 'api/api.types';
import classNames from 'classnames';
import { getAvatarUrl } from 'helpers/getAvatarUrl';

import styles from './ProfileAvatar.module.scss';
import { ProfileAvatarProps } from './ProfileAvatar.types';

export function ProfileAvatar({ userData, onClick, className }: ProfileAvatarProps) {
  return (
    <div className={classNames(styles.avatar, className)} onClick={onClick}>
      {userData && (
        <img
          src={getAvatarUrl(userData[ApiUserKeys.avatar])}
          alt={userData[ApiUserKeys.displayName]}
          className={styles.image}
        />
      )}
      <button className={styles.button}>Поменять</button>
      <div className={styles.icon} />
    </div>
  );
}
