import { ChangeEventHandler } from 'react';

export type FormFieldProps = {
  className?: string;
  disabled?: boolean;
  errors?: string[];
  id?: string;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  readonly?: boolean;
  required?: boolean;
  type?: 'text' | 'email' | 'number' | 'password' | 'tel';
  value?: string;
};
