import { ButtonProps } from 'components/Button/Button.types';
import { FormFieldProps } from 'components/FormField/FormField.types';

export type FormFieldData = {
  name: string;
  value: string;
};

export type FormProps = {
  buttons: Omit<ButtonProps, 'className'>[];
  fields: Omit<FormFieldProps, 'className' | 'onChange'>[];
  onChange(state: FormFieldData): void;
  onSubmit(state: Record<string, string>): void;
  title?: string;
};
