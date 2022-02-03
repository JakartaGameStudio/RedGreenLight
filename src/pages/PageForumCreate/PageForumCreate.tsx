import { Form } from 'components/Form/Form';
import { FormFieldProps } from 'components/FormField/FormField.types';
import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { useForm } from 'hooks/useForm';
import { useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { topicApi } from 'services/redux/api/topicApi';
import { AppRoutes } from 'types/AppRoutes';

import styles from './PageForumCreate.module.scss';

export function PageForumCreate() {
  const [addTopic, { isLoading, isSuccess, data }] = topicApi.useAddTopicMutation();
  const fields = useMemo<FormFieldProps[]>(() => {
    return [
      {
        id: 'FormTopic[title]',
        name: 'title',
        placeholder: 'Заголовок',
        type: 'text',
        required: true,
      },
    ];
  }, []);
  const onSubmit = function (formData) {
    return addTopic(formData);
  };
  const formProps = useForm<FormFieldProps>({
    fields,
    onSubmit,
    buttons: [
      {
        children: 'Создать',
        type: 'submit',
      },
    ],
  });

  if (isSuccess) {
    return <Navigate to={`${AppRoutes.forumTopic}/${data.slug}`} />;
  }

  return (
    <LayoutPage>
      <div className={styles.form}>
        <Form {...formProps} title="Создать тему" isLoading={isLoading} />
      </div>
    </LayoutPage>
  );
}
