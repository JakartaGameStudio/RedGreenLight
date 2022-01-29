import { ChangeEventHandler } from 'react';

export type FormFieldProps = {
  name: string;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  errors?: string[];
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  readonly?: boolean;
  required?: boolean;
  type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'textarea';
  value?: string;
};
