import { UserResponse, UserResponseKeys } from 'api/api.types';
import { formFieldsDictionary } from 'constants/formFieldsDictionary';

import styles from './Profile.module.scss';

const FIELDS = {
  [UserResponseKeys.firstName]: formFieldsDictionary.firstName,
  [UserResponseKeys.secondName]: formFieldsDictionary.secondName,
  [UserResponseKeys.displayName]: formFieldsDictionary.displayName,
  [UserResponseKeys.login]: formFieldsDictionary.login,
  [UserResponseKeys.phone]: formFieldsDictionary.phone,
  [UserResponseKeys.email]: formFieldsDictionary.email,
};

export function ProfileInfo({ userData }: { userData: UserResponse }) {
  return (
    <>
      {Object.entries(FIELDS).map(([key, label]) => (
        <dl className={styles.field} key={label}>
          <dt className={styles.fieldLabel}>{label}</dt>
          <dd>{userData[key]}</dd>
        </dl>
      ))}
    </>
  );
}
