import { AuthApi } from 'api';
import { SignUpRequestKeys } from 'api/AuthApi/AuthApi.types';
import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { formFieldsDictionary } from 'constans/formFieldsDictionary';
import { useForm } from 'hooks/useForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignUp() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const formProps = useForm<FormFieldProps>({
    fields: [
      {
        id: `FormSignUp[${SignUpRequestKeys.firstName}]`,
        name: SignUpRequestKeys.firstName,
        placeholder: formFieldsDictionary.firstName,
      },
      {
        id: `FormSignUp[${SignUpRequestKeys.secondName}]`,
        name: SignUpRequestKeys.secondName,
        placeholder: formFieldsDictionary.secondName,
      },
      {
        id: `FormSignUp[${SignUpRequestKeys.login}]`,
        name: SignUpRequestKeys.login,
        placeholder: formFieldsDictionary.login,
        required: true,
      },
      {
        id: `FormSignUp[${SignUpRequestKeys.email}]`,
        name: SignUpRequestKeys.email,
        placeholder: formFieldsDictionary.email,
        type: 'email',
      },
      {
        id: `FormSignUp[${SignUpRequestKeys.phone}]`,
        name: SignUpRequestKeys.phone,
        placeholder: formFieldsDictionary.phone,
        type: 'tel',
        required: true,
      },
      {
        id: `FormSignUp[${SignUpRequestKeys.password}]`,
        name: SignUpRequestKeys.password,
        placeholder: formFieldsDictionary.password,
        type: 'password',
        required: true,
      },
    ],
    onSubmit(data) {
      setLoading(true);

      return AuthApi.signUp(data)
        .then(() => {
          navigate(AppRoutes.game);
        })
        .finally(() => setLoading(false));
    },
  });

  return (
    <Form
      {...formProps}
      title="Присоединиться к игре"
      isLoading={isLoading}
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
