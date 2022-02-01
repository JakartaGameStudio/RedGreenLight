import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

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
  rows,
  isFocus,
  onBlur,
}: FormFieldProps) {
  const [isActive, setIsActive] = useState(Boolean(value));
  const ref = useRef<HTMLInputElement & HTMLTextAreaElement>();

  useEffect(() => {
    if (ref.current && isFocus) {
      ref.current.focus();
    }
  }, [isFocus]);

  function handleFocus() {
    setIsActive(true);
  }

  function handleBlur() {
    onBlur();
    setIsActive(false);
  }

  return (
    <div className={classNames(styles.field, className)}>
      <label
        htmlFor={id}
        className={classNames(styles.label, {
          [styles.labelActive]: isActive || value,
        })}
      >
        {placeholder}
        {required && <span className={styles.required}>*</span>}
      </label>
      {type !== 'textarea' ? (
        <input
          ref={ref}
          id={id}
          name={name}
          value={value}
          type={type}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          className={classNames(styles.input, {
            [styles.inputActive]: isActive || value,
            [styles.inputError]: errors.length,
          })}
        />
      ) : (
        <textarea
          ref={ref}
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          rows={rows}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          className={classNames(styles.textarea, {
            [styles.inputActive]: isActive || value,
            [styles.inputError]: errors.length,
          })}
        />
      )}

      {errors.map((error, index) => (
        <div key={index} className={styles.error}>
          {error}
        </div>
      ))}
    </div>
  );
}
