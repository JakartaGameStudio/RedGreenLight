import classNames from 'classnames';
import { Avatar } from 'components/Avatar/Avatar';
import { UserResponseKeys } from 'types/Api';

import styles from './ProfileAvatar.module.scss';
import { ProfileAvatarProps } from './ProfileAvatar.types';

export function ProfileAvatar({ userData, onClick, className }: ProfileAvatarProps) {
  return (
    <div className={classNames(styles.wrapper, className)} onClick={onClick}>
      <Avatar src={userData[UserResponseKeys.avatar]} className={styles.avatar} />
      <button className={styles.button}>Поменять</button>
      <div className={styles.icon} />
    </div>
  );
}
