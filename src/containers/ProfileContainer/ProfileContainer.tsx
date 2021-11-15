import { UsersApi } from 'api';
import { UsersApiUser, UsersApiUserKeys } from 'api/UsersApi/UsersApi.types';
import { Preloader } from 'components/Preloader/Preloader';
import { Profile } from 'components/Profile/Profile';
import { profileFieldsLabels } from 'constans/profileFieldsLabels';
import { useEffect, useState } from 'react';
import {ApiRoutes} from "types/ApiRoutes";

const fieldsKeys = [
  UsersApiUserKeys.firstName,
  UsersApiUserKeys.secondName,
  UsersApiUserKeys.displayName,
  UsersApiUserKeys.login,
  UsersApiUserKeys.phone,
  UsersApiUserKeys.email,
];

function createFieldsFromData(data: UsersApiUser) {
  return fieldsKeys.map((key) => ({
    label: profileFieldsLabels[key],
    value: data[key],
  }));
}

export function ProfileContainer() {
  const [userData, setUserData] = useState<UsersApiUser | undefined>();

  useEffect(() => {
    UsersApi.identify()
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        setUserData(undefined);
      });
  }, []);

  if (!userData) {
    return <Preloader />;
  }

  const title = userData[UsersApiUserKeys.displayName] || userData[UsersApiUserKeys.login];
  const avatarImage = userData[UsersApiUserKeys.avatar];

  return (
    <Profile
      fields={createFieldsFromData(userData)}
      title={title}
      avatar={{
        image: {
          src: avatarImage ? `${ApiRoutes.resources}/${avatarImage}` : undefined,
        },
      }}
    />
  );
}
