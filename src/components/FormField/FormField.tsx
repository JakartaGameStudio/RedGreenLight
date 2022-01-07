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
  disabled,
  className,
  readonly,
  value = '',
  errors = [],
  type = 'text',
}: FormFieldProps) {
  const [isFocus, setIsFocus] = useState(Boolean(value));

  return (
    <div className={classNames(styles.field, className)}>
      <label
        htmlFor={id}
        className={classNames(styles.label, {
          [styles.labelActive]: isFocus || value,
        })}
      >
        {placeholder}
        {required && <span className={styles.required}>*</span>}
      </label>
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChange}
        className={classNames(styles.input, {
          [styles.inputActive]: isFocus || value,
          [styles.inputError]: errors.length,
        })}
      />
      {[].concat(errors).map((error, index) => (
        <div key={index} className={styles.error}>
          {error}
        </div>
      ))}
    </div>
  );
}
