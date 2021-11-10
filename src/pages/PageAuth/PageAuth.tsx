import { FormSignIn } from 'containers/FormSignIn/FormSignIn';
import { FormSignUp } from 'containers/FormSignUp/FormSignUp';

import styles from './PageAuth.module.scss';
import { PageAuthProps } from './PageAuth.types';

export function PageAuth(signUp: PageAuthProps) {
  return <div className={styles.page}>{renderForm(signUp)}</div>;
}

function renderForm(signUp) {
  if (signUp) {
    return <FormSignUp />;
  }

  return <FormSignIn />;
}
