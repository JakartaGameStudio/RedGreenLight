import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { useForm } from 'hooks/useForm';
import { useMemo } from 'react';

export function FormCreateTopic() {
  const fields = useMemo<FormFieldProps[]>(() => {
    return [
      {
        id: 'FormForumTopic[title]',
        name: 'title',
        placeholder: 'Заголовок',
        type: 'text',
      },
      {
        id: 'FormForumTopic[message]',
        name: 'message',
        placeholder: 'Описание',
        type: 'textarea',
      },
    ];
  }, []);
  const onSubmit = function (formData) {
    return formData;
  };
  const formProps = useForm<FormFieldProps>({ fields, onSubmit });

  return (
    <Form
      title="Создать тему"
      {...formProps}
      buttons={[
        {
          children: 'Создать',
        },
      ]}
      fields={fields}
      onSubmit={onSubmit}
    />
  );
}
