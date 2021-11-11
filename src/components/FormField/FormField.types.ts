export type FormFieldProps = {
  className?: string;
  errors?: string[];
  id?: string;
  name: string;
  onChange(value: string): void;
  placeholder: string;
  required?: boolean;
  type?: 'text' | 'email' | 'number' | 'password' | 'tel';
  value?: string;
};
