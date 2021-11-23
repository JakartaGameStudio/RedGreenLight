import { useCallback, useState } from 'react';

type Field = {
  [key: string]: any;
  name: string;
  value?: any;
};

export function useForm<F extends Field>({ fields, onSubmit }: { fields: F[]; onSubmit(data) }) {
  const [formFields, setFormFields] = useState(fields);
  const handlerChange = useCallback((event) => {
    const { name, value } = event.target;

    return setFormFields((prevState) => {
      return prevState.map((field) => (field.name === name ? { ...field, value: value } : field));
    });
  }, []);
  const handlerSubmit = useCallback(
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

  return {
    fields: formFields,
    setFields: setFormFields,
    onChange: handlerChange,
    onSubmit: handlerSubmit,
  };
}