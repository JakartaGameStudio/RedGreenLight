import { Preloader } from 'components/Preloader/Preloader';
import { ProfileAvatar } from 'components/ProfileAvatar/ProfileAvatar';
import { Title } from 'components/Title/Title';
import { FormPassword } from 'containers/FormPassword/FormPassword';
import { FormProfile } from 'containers/FormProfile/FormProfile';
import { PopupAvatar } from 'containers/PopupAvatar/PopupAvatar';
import { useIdentify } from 'hooks/useIdentify';
import { useCallback, useMemo, useState } from 'react';
import { UserResponseKeys } from 'types/Api';

import styles from './Profile.module.scss';
import { ProfileProps } from './Profile.types';
import { ProfileInfo } from './ProfileInfo';
import { ProfileNav } from './ProfileNav';

export function Profile({ type }: ProfileProps) {
  const [userData] = useIdentify();
  const [popupActive, setPopupActive] = useState(false);
  const showPopup = useCallback(() => {
    setPopupActive(true);
  }, []);
  const closePopup = useCallback(() => {
    setPopupActive(false);
  }, []);
  const title = useMemo(() => {
    return userData
      ? userData[UserResponseKeys.displayName] || userData[UserResponseKeys.login]
      : '';
  }, [userData]);
  const renderProfile = useCallback(() => {
    if (!userData) {
      return <Preloader />;
    }

    switch (type) {
      case 'edit':
        return <FormProfile />;
      case 'password':
        return <FormPassword />;
      default:
        return (
          <>
            <ProfileInfo userData={userData} />
            <ProfileNav />
          </>
        );
    }
  }, [type, userData]);

  return (
    <>
      <PopupAvatar active={popupActive} onClose={closePopup} onSubmit={closePopup} />
      <div className={styles.profile}>
        <div className={styles.head}>
          <ProfileAvatar userData={userData} onClick={showPopup} className={styles.avatar} />
          <Title size="h3">{title}</Title>
        </div>
        <div className={styles.body}>{renderProfile()}</div>
      </div>
    </>
  );
}
