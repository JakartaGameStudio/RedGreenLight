import { ChangeEventHandler } from 'react';

export type FormFieldProps = {
  name: string;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  errors?: string | string[];
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  readonly?: boolean;
  required?: boolean;
  type?: 'text' | 'email' | 'number' | 'password' | 'tel';
  value?: string;
};
