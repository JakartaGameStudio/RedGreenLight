import { Button } from 'components/Button/Button';
import { FormField } from 'components/FormField/FormField';
import { Title } from 'components/Title/Title';
import { useState } from 'react';

import styles from './Form.module.scss';
import { FormProps, FormState } from './Form.types';

export function Form({ title, fields, buttons, onSubmit, onChange }: FormProps) {
  const [formData, setFormData] = useState<FormState>();

  function handlerChange({ name, value }) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });

    if (onChange) {
      onChange(formData);
    }
  }

  function handlerSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
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
      {buttons.map((props, index) => (
        <Button key={index} {...props}>
          {props.children}
        </Button>
      ))}
    </form>
  );
}
