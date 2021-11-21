import { AuthApi } from 'api';
import { UserResponse, UserResponseKeys } from 'api/api.types';
import { ProfileAvatar } from 'components/ProfileAvatar/ProfileAvatar';
import { Title } from 'components/Title/Title';
import { FormPassword } from 'containers/FormPassword/FormPassword';
import { FormProfile } from 'containers/FormProfile/FormProfile';
import { PopupAvatar } from 'containers/PopupAvatar/PopupAvatar';
import { useEffect, useState } from 'react';

import styles from './Profile.module.scss';
import { ProfileProps } from './Profile.types';
import { ProfileInfo } from './ProfileInfo';
import { ProfileNav } from './ProfileNav';

export function Profile({ type }: ProfileProps) {
  const [userData, setUserData] = useState<UserResponse | undefined>();
  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    AuthApi.getUser()
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

  function submitPopup(data) {
    setUserData(data);
    setPopupActive(false);
  }

  function closePopup() {
    setPopupActive(false);
  }

  const title = userData
    ? userData[UserResponseKeys.displayName] || userData[UserResponseKeys.login]
    : '';

  return (
    <>
      <PopupAvatar active={popupActive} onClose={closePopup} onSubmit={submitPopup} />
      <div className={styles.profile}>
        <div className={styles.head}>
          <ProfileAvatar userData={userData} onClick={showPopup} className={styles.avatar} />
          <Title size="h3">{title}</Title>
        </div>
        <div className={styles.body}>
          {type === 'edit' && (
            <FormProfile userData={userData} onSubmit={(data) => setUserData(data)} />
          )}
          {type === 'password' && <FormPassword />}
          {!type && userData && (
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
