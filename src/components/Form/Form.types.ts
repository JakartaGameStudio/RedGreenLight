import { ButtonProps } from 'components/Button/Button.types';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { FormEventHandler } from 'react';

export type FormProps = {
  buttons: Omit<ButtonProps, 'className'>[];
  fields: Omit<FormFieldProps, 'className' | 'onChange'>[];
  onChange: FormFieldProps['onChange'];
  onSubmit: FormEventHandler<HTMLFormElement>;
  error?: string;
  isLoading?: boolean;
  title?: string;
};
