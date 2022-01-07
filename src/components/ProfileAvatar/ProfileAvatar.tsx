import classNames from 'classnames';
import { Image } from 'components/Image/Image';
import { getAvatarUrl } from 'helpers/getAvatarUrl';
import { UserResponseKeys } from 'types/Api';

import styles from './ProfileAvatar.module.scss';
import { ProfileAvatarProps } from './ProfileAvatar.types';

export function ProfileAvatar({ userData, onClick, className }: ProfileAvatarProps) {
  return (
    <div className={classNames(styles.avatar, className)} onClick={onClick}>
      {userData && (
        <Image
          src={getAvatarUrl(userData[UserResponseKeys.avatar])}
          alt={userData[UserResponseKeys.displayName]}
          className={styles.image}
        />
      )}
      <button className={styles.button}>Поменять</button>
      <div className={styles.icon} />
    </div>
  );
}
