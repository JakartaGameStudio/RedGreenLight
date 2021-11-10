import classNames from 'classnames';
import { useState } from 'react';

import styles from './FormField.module.scss';
import { FormFieldProps } from './FormField.types';

export function FormField({
  id,
  name,
  type = 'text',
  value,
  placeholder,
  onChange,
  errors,
  required,
  className,
}: FormFieldProps) {
  const [isActive, setActive] = useState(Boolean(value));
  const [val, setVal] = useState(value);

  function handlerChange({ target }) {
    setVal(target.value);
    onChange(target.value);
  }

  function handlerFocus() {
    setActive(true);
  }

  function handlerBlur() {
    setActive(Boolean(val));
  }

  return (
    <div className={styles.field}>
      {isActive && (
        <label htmlFor={id} className={styles.label}>
          {placeholder}
        </label>
      )}
      <input
        id={id}
        name={name}
        value={val}
        type={type}
        required={required}
        placeholder={isActive ? '' : placeholder}
        onFocus={handlerFocus}
        onBlur={handlerBlur}
        onChange={handlerChange}
        className={classNames(styles.input, className, {
          [styles.inputActive]: isActive,
          [styles.inputError]: errors.length,
        })}
      />
      {renderErrors(errors)}
    </div>
  );
}

function renderErrors(errors: FormFieldProps['errors']) {
  return errors.map((error, index) => (
    <div key={index} className={styles.error}>
      {error}
    </div>
  ));
}
