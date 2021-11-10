export type FormFieldProps = Partial<{
  id: string;
  name: string;
  placeholder: string;
  value: string;
  type: 'text' | 'email' | 'number' | 'password' | 'tel';
  errors: string[];
  required: boolean;
  className: string;
  onChange(value: string): void;
}>;
