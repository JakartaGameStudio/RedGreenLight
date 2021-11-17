import { Button } from 'components/Button/Button';
import { FormField } from 'components/FormField/FormField';
import { Title } from 'components/Title/Title';

import styles from './Form.module.scss';
import { FormProps, FormPropsWithOnChange, FormPropsWithSetter } from './Form.types';

export function Form(props: FormPropsWithOnChange): JSX.Element;
export function Form(props: FormPropsWithSetter): JSX.Element;

export function Form({ title, fields, buttons, onSubmit, onChange, setFields }: FormProps) {
  function handlerChange({ name, value }) {
    if (setFields) {
      setFields((prevState) =>
        prevState.map((field) => {
          return field.name === name ? { ...field, value } : field;
        }),
      );
    }

    if (onChange) {
      onChange({ name, value });
    }
  }

  function handlerSubmit(event) {
    event.preventDefault();

    const data = fields.reduce((result, field) => {
      result[field.name] = field.value;

      return result;
    }, {});

    return onSubmit(data);
  }

  return (
    <form onSubmit={handlerSubmit}>
      <Title size="h3" className={styles.title}>
        {title}
      </Title>
      {fields.map((props) => (
        <FormField
          key={props.id}
          className={styles.field}
          onChange={(value) => handlerChange({ name: props.name, value })}
          {...props}
        />
      ))}
      <div className={styles.footer}>
        {buttons.map((props, index) => (
          <Button {...props} key={index} className={styles.button}>
            {props.children}
          </Button>
        ))}
      </div>
    </form>
  );
}
