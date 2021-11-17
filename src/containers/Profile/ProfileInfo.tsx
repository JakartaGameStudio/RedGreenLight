import { ApiUserKeys } from 'api/api.types';
import { UsersApiUser } from 'api/UsersApi/UsersApi.types';
import { apiFieldsDictionary } from 'constans/apiFieldsDictionary';

import styles from './Profile.module.scss';

const KEYS = [
  ApiUserKeys.firstName,
  ApiUserKeys.secondName,
  ApiUserKeys.displayName,
  ApiUserKeys.login,
  ApiUserKeys.phone,
  ApiUserKeys.email,
];

export function ProfileInfo({ userData }: { userData: UsersApiUser }) {
  return (
    <>
      {KEYS.map((key) => (
        <dl className={styles.field} key={apiFieldsDictionary[key]}>
          <dt className={styles.fieldLabel}>{apiFieldsDictionary[key]}</dt>
          <dd>{userData[key]}</dd>
        </dl>
      ))}
    </>
  );
}
