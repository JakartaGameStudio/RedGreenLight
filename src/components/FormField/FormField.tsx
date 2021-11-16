import classNames from 'classnames';
import { useState } from 'react';

import styles from './FormField.module.scss';
import { FormFieldProps } from './FormField.types';

export function FormField({
  id,
  name,
  placeholder,
  onChange,
  required,
  className,
  value = '',
  errors = [],
  type = 'text',
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
      <label
        htmlFor={id}
        className={classNames(styles.label, {
          [styles.labelActive]: isActive,
        })}
      >
        {placeholder}
        {required && <span className={styles.required}>*</span>}
      </label>
      <input
        id={id}
        name={name}
        value={val}
        type={type}
        required={required}
        onFocus={handlerFocus}
        onBlur={handlerBlur}
        onChange={handlerChange}
        className={classNames(styles.input, className, {
          [styles.inputActive]: isActive,
          [styles.inputError]: errors.length,
        })}
      />
      {errors.map((error, index) => (
        <div key={index} className={styles.error}>
          {error}
        </div>
      ))}
    </div>
  );
}
