import { UsersApi } from 'api';
import { UsersApiKeys } from 'api/UsersApi/UsersApi.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { apiFieldsDictionary } from 'constans/apiFieldsDictionary';
import { useEffect, useState } from 'react';
import { AppRoutes } from 'types/AppRoutes';

const KEYS = [
  UsersApiKeys.firstName,
  UsersApiKeys.secondName,
  UsersApiKeys.displayName,
  UsersApiKeys.login,
  UsersApiKeys.phone,
  UsersApiKeys.email,
];
const INITIAL_FIELDS = KEYS.map((key) => ({
  id: `FormProfile[${key}]`,
  name: key,
  placeholder: apiFieldsDictionary[key],
  disabled: true,
}));

export function FormProfile() {
  const [fields, setFields] = useState<FormProps['fields']>(INITIAL_FIELDS);

  useEffect(() => {
    UsersApi.identify().then((data) => {
      setFields((prevState) => {
        return prevState.map((field) => ({
          ...field,
          disabled: false,
          value: data[field.name] || '',
        }));
      });
    });
  }, []);

  function onChange({ name, value }) {
    setFields((prevState) =>
      prevState.map((field) => {
        return field.name === name ? { ...field, value } : field;
      }),
    );
  }

  function onSubmit(data) {
    return UsersApi.updateProfile(data);
  }

  return (
    <Form
      title="Изменить данные"
      onChange={onChange}
      onSubmit={onSubmit}
      fields={fields}
      buttons={[
        {
          children: 'Сохранить',
          type: 'submit',
        },
        {
          mod: 'warning-light',
          children: 'Отмена',
          href: AppRoutes.profile,
        },
      ]}
    />
  );
}
