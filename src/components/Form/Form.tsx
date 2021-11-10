import { Title } from 'components/Title/Title';

import styles from './Form.module.scss';
import { FormProps } from './Form.types';

export function Form({ title }: FormProps) {
  return (
    <form className={styles.form}>
      <Title size="h3" children={title} className={styles.title} />
    </form>
  );
}
