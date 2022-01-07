import { useCallback, useEffect, useState } from 'react';

type Field = {
  [key: string]: any;
  name: string;
  value?: any;
};

type Props<F> = {
  fields: F[];
  onSubmit(data);
};

export function useForm<F extends Field>({ fields, onSubmit }: Props<F>) {
  const [formFields, setFormFields] = useState(fields);
  const handleChange = useCallback((event) => {
    const { name, value } = event.target;

    return setFormFields((prevState) => {
      return prevState.map((field) => (field.name === name ? { ...field, value: value } : field));
    });
  }, []);
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const data = formFields.reduce((result, field) => {
        result[field.name] = field.value;

        return result;
      }, {});

      return onSubmit(data as Record<string, any>);
    },
    [formFields, onSubmit],
  );

  useEffect(() => {
    setFormFields(fields);
  }, [fields]);

  return {
    fields: formFields,
    setFields: setFormFields,
    onChange: handleChange,
    onSubmit: handleSubmit,
  };
}
