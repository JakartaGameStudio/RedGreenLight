import { Avatar } from 'components/Avatar/Avatar';
import { Divider } from 'components/Divider/Divider';
import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { Preloader } from 'components/Preloader/Preloader';
import { Title } from 'components/Title/Title';
import { CommentsList } from 'containers/CommentsList/CommentsList';
import { FormReply } from 'containers/FormReply/FormReply';
import { useParams } from 'react-router-dom';
import { topicApi } from 'services/redux/api/topicApi';

import styles from './PageTopic.module.scss';

export function PageTopic() {
  const { slug } = useParams();
  const { data, isLoading } = topicApi.useGetTopicBySlugQuery(slug);

  if (isLoading) {
    return (
      <LayoutPage>
        <Preloader />
      </LayoutPage>
    );
  }

  return (
    <LayoutPage title={data.title}>
      <div className={styles.date}>{new Date(data.creationDate).toLocaleDateString()}</div>
      <div className={styles.author}>
        <Avatar className={styles.authorImage} src={data.creator.avatar} />
        <Title size="h4" className={styles.authorName}>
          {data.creator.name}
        </Title>
      </div>
      <Divider className={styles.divider} />
      <CommentsList id={data.id} />
      <FormReply topicId={data.id} />
    </LayoutPage>
  );
}
