import { UsersApi } from 'api';
import { UserResponseKeys } from 'api/api.types';
import { Preloader } from 'components/Preloader/Preloader';
import { ProfileAvatar } from 'components/ProfileAvatar/ProfileAvatar';
import { Title } from 'components/Title/Title';
import { FormPassword } from 'containers/FormPassword/FormPassword';
import { FormProfile } from 'containers/FormProfile/FormProfile';
import { PopupAvatar } from 'containers/PopupAvatar/PopupAvatar';
import { useAuth } from 'hooks/useAuth';
import { useStoreDispatch } from 'hooks/useStoreDispatch';
import { useCallback, useMemo, useState } from 'react';
import { userReducer } from 'store/reducers/userReducer/userReducer';

import styles from './Profile.module.scss';
import { ProfileProps } from './Profile.types';
import { ProfileInfo } from './ProfileInfo';
import { ProfileNav } from './ProfileNav';

export function Profile({ type }: ProfileProps) {
  const { getUser } = useAuth();
  const user = getUser();
  const dispatch = useStoreDispatch();
  const [popupActive, setPopupActive] = useState(false);
  const showPopup = useCallback(() => {
    setPopupActive(true);
  }, []);
  const closePopup = useCallback(() => {
    setPopupActive(false);
  }, []);
  const title = useMemo(() => {
    return user ? user[UserResponseKeys.displayName] || user[UserResponseKeys.login] : '';
  }, [user]);
  const renderType = useCallback(() => {
    if (!user) {
      return <Preloader />;
    }

    switch (type) {
      case 'edit':
        return <FormProfile userData={user} />;
      case 'password':
        return <FormPassword />;
    }

    return (
      <>
        <ProfileInfo userData={user} />
        <ProfileNav />
      </>
    );
  }, [type, user]);
  const avatarSubmit = useCallback(
    (file) => {
      UsersApi.updateAvatar(file).then((data) => {
        dispatch(
          userReducer.actions.updateOne({
            id: user[UserResponseKeys.id],
            changes: data,
          }),
        );
        closePopup();
      });
    },
    [closePopup, user, dispatch],
  );

  return (
    <>
      <PopupAvatar active={popupActive} onClose={closePopup} onSubmit={avatarSubmit} />
      <div className={styles.profile}>
        <div className={styles.head}>
          <ProfileAvatar userData={user} onClick={showPopup} className={styles.avatar} />
          <Title size="h3">{title}</Title>
        </div>
        <div className={styles.body}>{renderType()}</div>
      </div>
    </>
  );
}
