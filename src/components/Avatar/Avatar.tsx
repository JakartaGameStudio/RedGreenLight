import classNames from 'classnames';
import { Image } from 'components/Image/Image';
import UserIcon from 'images/icons/user.svg?icon';
import { getAvatarUrl } from 'utils/getAvatarUrl';

import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.types';

export function Avatar({ src, className, mods }: AvatarProps) {
  return (
    <div
      className={classNames(
        styles.avatar,
        className,
        mods?.map((mod) => styles[`avatar--${mod}`]),
      )}
    >
      {src ? (
        <Image src={getAvatarUrl(src)} className={styles.avatarImage} />
      ) : (
        <UserIcon className={styles.avatarIcon} />
      )}
    </div>
  );
}
