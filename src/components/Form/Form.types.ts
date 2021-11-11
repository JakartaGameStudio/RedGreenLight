import { ButtonProps } from 'components/Button/Button.types';
import { FormFieldProps } from 'components/FormField/FormField.types';

export type FormFieldData = {
  name: string;
  value: string;
};

export type FormState = FormFieldData[];

export type FormProps = {
  buttons: Omit<ButtonProps, 'className'>[];
  fields: Omit<FormFieldProps, 'className' | 'onChange'>[];
  onSubmit(state: FormState): void;
  title?: string;
};
