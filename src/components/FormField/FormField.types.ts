import { ChangeEventHandler } from 'react';

export type FormFieldProps = {
  name: string;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  errors?: string[];
  id?: string;
  isFocus?: boolean;
  onBlur?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'textarea';
  value?: string;
};
