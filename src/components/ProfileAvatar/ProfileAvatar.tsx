import classNames from 'classnames';

import styles from './ProfileAvatar.module.scss';
import { ProfileAvatarProps } from './ProfileAvatar.types';

export function ProfileAvatar({ image, onClick, className }: ProfileAvatarProps) {
  return (
    <div className={classNames(styles.avatar, className)} onClick={onClick}>
      {image?.src && <img src={image.src} alt={image.alt || ''} className={styles.image} />}
      <button className={styles.button}>Поменять</button>
      <div className={styles.icon} />
    </div>
  );
}
