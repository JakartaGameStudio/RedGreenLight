import { AuthApi, UsersApi } from 'api';
import { ApiUserKeys } from 'api/api.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { apiFieldsDictionary } from 'constans/apiFieldsDictionary';
import { useEffect, useState } from 'react';
import { AppRoutes } from 'types/AppRoutes';

const KEYS = [
  ApiUserKeys.firstName,
  ApiUserKeys.secondName,
  ApiUserKeys.displayName,
  ApiUserKeys.login,
  ApiUserKeys.phone,
  ApiUserKeys.email,
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
    AuthApi.identify().then((data) => {
      setFields((prevState) => {
        return prevState.map((field) => ({
          ...field,
          disabled: false,
          value: data[field.name] || '',
        }));
      });
    });
  }, []);

  function onSubmit(data) {
    return UsersApi.updateProfile(data);
  }

  return (
    <Form
      title="Изменить данные"
      setFields={setFields}
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
