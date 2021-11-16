import { UsersApi } from 'api';
import { UsersApiKeys, UsersApiUser } from 'api/UsersApi/UsersApi.types';
import { Preloader } from 'components/Preloader/Preloader';
import { ProfileAvatar } from 'components/ProfileAvatar/ProfileAvatar';
import { Title } from 'components/Title/Title';
import { FormPassword } from 'containers/FormPassword/FormPassword';
import { FormProfile } from 'containers/FormProfile/FormProfile';
import { PopupAvatar } from 'containers/PopupAvatar/PopupAvatar';
import { ProfileNav } from 'containers/Profile/ProfileNav';
import { useEffect, useState } from 'react';

import styles from './Profile.module.scss';
import { ProfileProps } from './Profile.types';
import { ProfileInfo } from './ProfileInfo';

export function Profile({ type }: ProfileProps) {
  const [userData, setUserData] = useState<UsersApiUser | undefined>();
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    UsersApi.identify()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        setUserData(undefined);
      });
  }, []);

  function showPopup() {
    setPopupActive(true);
  }

  function closePopup() {
    setPopupActive(false);
  }

  const title = userData ? userData[UsersApiKeys.displayName] || userData[UsersApiKeys.login] : '';

  if (!userData) {
    return (
      <div className={styles.preloader}>
        <Preloader />
      </div>
    );
  }

  return (
    <>
      <PopupAvatar active={popupActive} onClose={closePopup} onSubmit={closePopup} />
      <div className={styles.profile}>
        <div className={styles.head}>
          <ProfileAvatar userData={userData} onClick={showPopup} className={styles.avatar} />
          <Title size="h3">{title}</Title>
        </div>
        <div className={styles.body}>
          {type === 'edit' && <FormProfile />}
          {type === 'password' && <FormPassword />}
          {!type && (
            <>
              <ProfileInfo userData={userData} />
              <ProfileNav />
            </>
          )}
        </div>
      </div>
    </>
  );
}
