import { Button } from 'components/Button/Button';
import { FormField } from 'components/FormField/FormField';
import { useState } from 'react';
import { commentApi } from 'services/redux/api/commentApi';

import styles from './FormReply.module.scss';
import { FormReplyProps } from './FormReply.types';

export function FormReply({ topicId, commentId }: FormReplyProps) {
  const [addComment] = commentApi.useAddCommentMutation();
  const [text, setText] = useState<string>();

  function handleSubmit(event) {
    event.preventDefault();
    addComment({
      text,
      topicId,
      parentCommentId: commentId,
    }).then(() => {
      setText('');
    });
  }

  function handleChange({ target }) {
    setText(target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormField
        name="FormReply[text]"
        placeholder="Ответить"
        value={text}
        onChange={handleChange}
        className={styles.field}
      />
      <Button className={styles.button} mods={['inline']}>
        Отправить
      </Button>
    </form>
  );
}
