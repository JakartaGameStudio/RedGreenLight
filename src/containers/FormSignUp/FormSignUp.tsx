import { AuthApi } from 'api';
import { AuthApiSignUpKeys } from 'api/AuthApi/AuthApi.types';
import { Form } from 'components/Form/Form';
import { FormProps } from 'components/Form/Form.types';
import { useState } from 'react';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignUp() {
  const [fields, setFields] = useState<FormProps['fields']>([
    {
      id: `FormSignUp[${AuthApiSignUpKeys.firstName}]`,
      name: AuthApiSignUpKeys.firstName,
      placeholder: 'Имя',
    },
    {
      id: `FormSignUp[${AuthApiSignUpKeys.secondName}]`,
      name: AuthApiSignUpKeys.secondName,
      placeholder: 'Фамилия',
    },
    {
      id: `FormSignUp[${AuthApiSignUpKeys.login}]`,
      name: AuthApiSignUpKeys.login,
      placeholder: 'Логин',
      required: true,
    },
    {
      id: `FormSignUp[${AuthApiSignUpKeys.email}]`,
      name: AuthApiSignUpKeys.email,
      placeholder: 'Email',
      type: 'email',
    },
    {
      id: `FormSignUp[${AuthApiSignUpKeys.phone}]`,
      name: AuthApiSignUpKeys.phone,
      placeholder: 'Телефон',
      type: 'tel',
      required: true,
    },
    {
      id: `FormSignUp[${AuthApiSignUpKeys.password}]`,
      name: AuthApiSignUpKeys.password,
      placeholder: 'Пароль',
      type: 'password',
      required: true,
    },
  ]);

  function onChange({ name, value }) {
    setFields((prevState) =>
      prevState.map((field) => {
        return field.name === name ? { ...field, value } : field;
      }),
    );
  }

  function onSubmit(data) {
    return AuthApi.signUp(data);
  }

  return (
    <Form
      title="Присоединиться к игре"
      onChange={onChange}
      onSubmit={onSubmit}
      fields={fields}
      buttons={[
        {
          children: 'Зарегистироваться',
          type: 'submit',
        },
        {
          children: 'Уже зарегистирован?',
          mod: 'link',
          href: AppRoutes.signIn,
        },
      ]}
    />
  );
}
