import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { formFieldsDictionary } from 'constants/formFieldsDictionary';
import { useForm } from 'hooks/useForm';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { profileApi } from 'services/redux';
import { UserUpdateRequestKeys } from 'types/Api';
import { AppRoutes } from 'types/AppRoutes';

const FIELDS = {
  [UserUpdateRequestKeys.firstName]: formFieldsDictionary.firstName,
  [UserUpdateRequestKeys.secondName]: formFieldsDictionary.secondName,
  [UserUpdateRequestKeys.displayName]: formFieldsDictionary.displayName,
  [UserUpdateRequestKeys.login]: formFieldsDictionary.login,
  [UserUpdateRequestKeys.phone]: formFieldsDictionary.phone,
  [UserUpdateRequestKeys.email]: formFieldsDictionary.email,
};

export function FormProfile() {
  const { data } = profileApi.useGetProfileQuery();
  const [updateProfile, { isLoading }] = profileApi.useUpdateProfileMutation();
  const navigate = useNavigate();
  const fields = useMemo<FormFieldProps[]>(() => {
    return Object.entries(FIELDS).map(([key, label]) => ({
      id: `FormProfile[${key}]`,
      name: key,
      placeholder: label,
      value: data[key],
    }));
  }, [data]);
  const onSubmit = function (formData) {
    return updateProfile(formData).finally(() => navigate(AppRoutes.profile));
  };
  const formProps = useForm<FormFieldProps>({ fields, onSubmit });

  return (
    <Form
      {...formProps}
      title="Изменить данные"
      isLoading={isLoading}
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
