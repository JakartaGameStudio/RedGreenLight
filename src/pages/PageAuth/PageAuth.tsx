import { Footer } from 'components/Footer/Footer';
import { FormSignIn } from 'containers/FormSignIn/FormSignIn';
import { FormSignUp } from 'containers/FormSignUp/FormSignUp';
import { Header } from 'containers/Header/Header';
import { useLocation } from 'react-router-dom';

import styles from './PageAuth.module.scss';
import { PageAuthProps } from './PageAuth.types';

type LocationState = {
  from: string;
};

export function PageAuth({ signUp }: PageAuthProps) {
  const location = useLocation();
  const state = location.state as LocationState;
  const from = state?.from;

  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <div className={styles.form}>
        {signUp ? <FormSignUp from={from} /> : <FormSignIn from={from} />}
      </div>
      <Footer />
    </div>
  );
}
