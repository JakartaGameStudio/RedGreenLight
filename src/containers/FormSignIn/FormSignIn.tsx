import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { formFieldsDictionary } from 'constants/formFieldsDictionary';
import { useForm } from 'hooks/useForm';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { userApi } from 'services/redux';
import { BadRequestError, SignInRequestKeys } from 'types/Api';
import { AppRoutes } from 'types/AppRoutes';

export function FormSignIn() {
  const navigate = useNavigate();
  const [signIn, { isLoading, error }] = userApi.useSignInMutation();
  const errorMessage = useMemo(() => {
    if (error && 'data' in error) {
      return (error.data as BadRequestError).reason;
    }
  }, [error]);
  const fields = useMemo<FormFieldProps[]>(() => {
    return [
      {
        id: `FormSignIn[${SignInRequestKeys.login}]`,
        name: SignInRequestKeys.login,
        placeholder: formFieldsDictionary.login,
        type: 'text',
        required: true,
      },
      {
        id: `FormSignIn[${SignInRequestKeys.password}]`,
        name: SignInRequestKeys.password,
        placeholder: formFieldsDictionary.password,
        type: 'password',
        required: true,
      },
    ];
  }, []);
  const formProps = useForm<FormFieldProps>({
    fields,
    onSubmit(fieldsData) {
      signIn(fieldsData).then(() => navigate(AppRoutes.game));
    },
  });

  return (
    <Form
      {...formProps}
      title="Вход"
      error={errorMessage}
      isLoading={isLoading}
      buttons={[
        {
          children: 'Начать игру',
          type: 'submit',
        },
        {
          children: 'Нет аккаунта?',
          mod: 'link',
          href: AppRoutes.signUp,
        },
      ]}
    />
  );
}
