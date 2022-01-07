import { ButtonProps } from 'components/Button/Button.types';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { FormEventHandler } from 'react';

export type FormProps = {
  buttons: Omit<ButtonProps, 'className'>[];
  error?: string;
  fields: Omit<FormFieldProps, 'className' | 'onChange'>[];
  isLoading?: boolean;
  onChange: FormFieldProps['onChange'];
  onSubmit: FormEventHandler<HTMLFormElement>;
  title?: string;
};
