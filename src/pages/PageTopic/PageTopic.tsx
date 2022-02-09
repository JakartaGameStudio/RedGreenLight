import { Avatar } from 'components/Avatar/Avatar';
import { Button } from 'components/Button/Button';
import { FormField } from 'components/FormField/FormField';
import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { Preloader } from 'components/Preloader/Preloader';
import { Title } from 'components/Title/Title';
import { Comment } from 'containers/Comment/Comment';
import { useIdentify } from 'hooks/useIdentify';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { topicApi } from 'services/redux';

import styles from './PageTopic.module.scss';

export function PageTopic() {
  const [inputFocus, setInputFocus] = useState(false);
  const [replyId, setReplyId] = useState<number | undefined>();
  const [inputText, setInputText] = useState<string>();
  const { slug } = useParams();
  const [userData] = useIdentify();
  const { data, isLoading } = topicApi.useGetTopicBySlugQuery(slug);
  const [addLike] = topicApi.useAddLikeMutation();
  const [addDisLike] = topicApi.useAddDisLikeMutation();
  const [addComment, addCommentState] = topicApi.useAddCommentMutation();

  function handleFormSubmit(event) {
    event.preventDefault();
    addComment({
      text: inputText,
      topicId: data.id,
      parentCommentId: replyId,
    }).finally(() => {
      setInputText('');
      setReplyId(undefined);
    });
  }

  function handleInputChange({ target }) {
    const { value } = target;
    const hasReply = value.includes(`#${replyId}`);

    if (!hasReply) {
      setReplyId(undefined);
    }

    setInputText(value);
  }

  function handleInputBlur() {
    setInputFocus(false);
  }

  function handleReply(id) {
    setReplyId(id);
    setInputText(`#${id} `);
    setInputFocus(true);
  }

  function handleLike(id) {
    addLike({
      topicId: data.id,
      commentId: id,
      creatorId: userData.id,
    });
  }

  function handleDisLike(id) {
    addDisLike({
      topicId: data.id,
      commentId: id,
      creatorId: userData.id,
    });
  }

  if (isLoading) {
    return (
      <LayoutPage>
        <Preloader />
      </LayoutPage>
    );
  }

  return (
    <LayoutPage title={data.title}>
      <div className={styles.head}>
        <Avatar className={styles.authorImage} src={data.creator.avatar} mods={['rounded']} />
        <Title size="h4" className={styles.authorName}>
          {data.creator.name}
        </Title>
        <div className={styles.date}>{new Date(data.creationDate).toLocaleDateString()}</div>
      </div>
      {data.comments.map((item) => (
        <Comment
          {...item}
          key={item.id}
          onReply={handleReply}
          onLike={handleLike}
          onDisLike={handleDisLike}
        />
      ))}
      <form className={styles.form} onSubmit={handleFormSubmit} autoComplete="off">
        <FormField
          name="FormReply[text]"
          placeholder="Сообщение"
          value={inputText}
          onChange={handleInputChange}
          className={styles.formField}
          required={true}
          isFocus={inputFocus}
          onBlur={handleInputBlur}
        />
        <div className={styles.formSubmit}>
          {addCommentState.isLoading ? (
            <Preloader className={styles.formPreloader} />
          ) : (
            <Button>Отправить</Button>
          )}
        </div>
      </form>
    </LayoutPage>
  );
}
