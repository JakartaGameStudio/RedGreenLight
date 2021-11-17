import classNames from 'classnames';
import { useEffect, useState } from 'react';

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
  const [isActive, setActive] = useState(Boolean(value));

  useEffect(() => {
    setActive(Boolean(value));
  }, [value]);

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
        value={value}
        type={type}
        disabled={disabled}
        readOnly={readonly}
        required={required}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(Boolean(value))}
        onChange={({ target }) => onChange(target.value)}
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
