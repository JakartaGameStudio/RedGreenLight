import { UsersApiKeys } from 'api/UsersApi/UsersApi.types';
import classNames from 'classnames';
import { getAvatarUrl } from 'helpers/getAvatarUrl';

import styles from './ProfileAvatar.module.scss';
import { ProfileAvatarProps } from './ProfileAvatar.types';

export function ProfileAvatar({ userData, onClick, className }: ProfileAvatarProps) {
  const avatar = userData[UsersApiKeys.avatar];
  const alt = userData[UsersApiKeys.displayName];
  const imageUrl = getAvatarUrl(avatar);

  return (
    <div className={classNames(styles.avatar, className)} onClick={onClick}>
      {userData && <img src={imageUrl} alt={alt} className={styles.image} />}
      <button className={styles.button}>Поменять</button>
      <div className={styles.icon} />
    </div>
  );
}
