import { Footer } from 'components/Footer/Footer';
import { FormSignIn } from 'containers/FormSignIn/FormSignIn';
import { FormSignUp } from 'containers/FormSignUp/FormSignUp';
import { Header } from 'containers/Header/Header';
import LogoYandex from 'images/icons/ya.svg?icon';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { userApi } from 'services/redux';
import { getHostName } from 'utils/getHostName';

import styles from './PageAuth.module.scss';
import { PageAuthProps } from './PageAuth.types';

type LocationState = {
  from: string;
};

export function PageAuth({ signUp }: PageAuthProps) {
  const location = useLocation();
  const state = location.state as LocationState;
  const from = state?.from;
  const [oAuthGetId, { data }] = userApi.useLazyOAuthGetIdQuery();

  useEffect(() => {
    const hostname = getHostName();

    if (hostname) {
      oAuthGetId(hostname);
    }
  }, [oAuthGetId]);

  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <div className={styles.form}>
        {signUp ? <FormSignUp from={from} /> : <FormSignIn from={from} />}
      </div>
      {data && (
        <div className={styles.oauth}>
          <div className={styles.oauthTitle}>Авторизироваться с помощью:</div>
          <ul className={styles.oauthList}>
            <li className={styles.oauthListItem}>
              <a
                className={styles.oauthItem}
                href={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${
                  data.service_id
                }&redirect_uri=${getHostName()}`}
                rel="noreferrer"
              >
                <LogoYandex />
              </a>
            </li>
          </ul>
        </div>
      )}
      <Footer />
    </div>
  );
}
