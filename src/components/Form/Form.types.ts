import { ButtonProps } from 'components/Button/Button.types';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { Dispatch, SetStateAction } from 'react';

export type FormFieldData = {
  name: string;
  value: string;
};

export interface Form {
  buttons: Omit<ButtonProps, 'className'>[];
  fields: Omit<FormFieldProps, 'className' | 'onChange'>[];
  onSubmit(data: Record<string, string>): void;
  title?: string;
}

export interface FormPropsWithOnChange extends Form {
  onChange(state: FormFieldData): void;
}

export interface FormPropsWithSetter extends Form {
  setFields: Dispatch<SetStateAction<Form['fields']>>;
}

export type FormProps = FormPropsWithOnChange & FormPropsWithSetter;
