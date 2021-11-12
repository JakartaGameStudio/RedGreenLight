import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { FormSignIn } from 'containers/FormSignIn/FormSignIn';
import { FormSignUp } from 'containers/FormSignUp/FormSignUp';

import styles from './PageAuth.module.scss';
import { PageAuthProps } from './PageAuth.types';

export function PageAuth({ signUp }: PageAuthProps) {
  return (
    <div className={styles.page}>
      <Header className={styles.header} />
      <div className={styles.form}>
        {signUp ? <FormSignUp /> : <FormSignIn />}
      </div>
      <Footer />
    </div>
  );
}
