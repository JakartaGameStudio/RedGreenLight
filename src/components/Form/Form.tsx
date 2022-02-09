import { Button } from 'components/Button/Button';
import { FormField } from 'components/FormField/FormField';
import { Preloader } from 'components/Preloader/Preloader';
import { Title } from 'components/Title/Title';

import styles from './Form.module.scss';
import { FormProps } from './Form.types';

export function Form({ title, error, fields, buttons, onSubmit, onChange, isLoading }: FormProps) {
  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <div className={styles.preloader}>
          <Preloader />
        </div>
      )}
      <form onSubmit={onSubmit} className={isLoading ? styles.formLoading : ''}>
        <Title size="h3" className={styles.title}>
          {title}
        </Title>
        {error && <div className={styles.error}>{error}</div>}
        {fields.map((props) => (
          <FormField key={props.id} className={styles.field} onChange={onChange} {...props} />
        ))}
        <div className={styles.footer}>
          {buttons.map((props, index) => (
            <Button {...props} key={index} className={styles.button}>
              {props.children}
            </Button>
          ))}
        </div>
      </form>
    </div>
  );
}
