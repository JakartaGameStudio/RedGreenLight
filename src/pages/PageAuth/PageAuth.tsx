import { Footer } from 'components/Footer/Footer';
import { Image } from 'components/Image/Image';
import { FormSignIn } from 'containers/FormSignIn/FormSignIn';
import { FormSignUp } from 'containers/FormSignUp/FormSignUp';
import { Header } from 'containers/Header/Header';
import { useLocation } from 'react-router-dom';
import { userApi } from 'services/redux';

import styles from './PageAuth.module.scss';
import { PageAuthProps } from './PageAuth.types';

type LocationState = {
  from: string;
};

const REDIRECT_URI = 'https://localhost:9001';

export function PageAuth({ signUp }: PageAuthProps) {
  const location = useLocation();
  const state = location.state as LocationState;
  const from = state ? state.from : undefined;
  const { data } = userApi.useOAuthGetIdQuery(REDIRECT_URI);

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
                target="_blank"
                href={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${data.service_id}&redirect_uri=${REDIRECT_URI}`}
                rel="noreferrer"
              >
                <Image src="/images/yandex-logo.svg" className={styles.oauthItemImage} />
              </a>
            </li>
          </ul>
        </div>
      )}
      <Footer />
    </div>
  );
}
