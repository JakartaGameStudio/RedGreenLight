import { AuthApi } from 'api';
import { UserResponse, UserResponseKeys } from 'api/api.types';
import { Preloader } from 'components/Preloader/Preloader';
import { ProfileAvatar } from 'components/ProfileAvatar/ProfileAvatar';
import { Title } from 'components/Title/Title';
import { FormPassword } from 'containers/FormPassword/FormPassword';
import { FormProfile } from 'containers/FormProfile/FormProfile';
import { PopupAvatar } from 'containers/PopupAvatar/PopupAvatar';
import { useCallback, useEffect, useState } from 'react';

import styles from './Profile.module.scss';
import { ProfileProps } from './Profile.types';
import { ProfileInfo } from './ProfileInfo';
import { ProfileNav } from './ProfileNav';

export function Profile({ type }: ProfileProps) {
  const [userData, setUserData] = useState<UserResponse | undefined>();
  const [popupActive, setPopupActive] = useState(false);
  const showPopup = useCallback(() => {
    setPopupActive(true);
  }, []);
  const closePopup = useCallback(() => {
    setPopupActive(false);
  }, []);
  const title = userData
    ? userData[UserResponseKeys.displayName] || userData[UserResponseKeys.login]
    : '';
  const renderType = useCallback(() => {
    switch (type) {
      case 'edit':
        return <FormProfile userData={userData} />;
      case 'password':
        return <FormPassword />;
    }

    if (userData) {
      return (
        <>
          <ProfileInfo userData={userData} />
          <ProfileNav />
        </>
      );
    }

    return <Preloader />;
  }, [type, userData]);

  useEffect(() => {
    AuthApi.getUser()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        setUserData(undefined);
      });
  }, []);

  return (
    <>
      <PopupAvatar active={popupActive} onClose={closePopup} />
      <div className={styles.profile}>
        <div className={styles.head}>
          <ProfileAvatar userData={userData} onClick={showPopup} className={styles.avatar} />
          <Title size="h3">{title}</Title>
        </div>
        <div className={styles.body}>{renderType()}</div>
      </div>
    </>
  );
}
