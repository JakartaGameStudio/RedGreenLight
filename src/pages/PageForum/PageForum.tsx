import { Button } from 'components/Button/Button';
import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { Preloader } from 'components/Preloader/Preloader';
import { Title } from 'components/Title/Title';
import { TopicsList } from 'components/TopicsList/TopicsList';
import { useMemo } from 'react';
import { topicApi } from 'services/redux/api/topicApi';
import { AppRoutes } from 'types/AppRoutes';

import styles from './PageForum.module.scss';

export function PageForum() {
  const { data, isLoading } = topicApi.useGetTopicsQuery();
  const topics = useMemo(() => {
    return data?.topics?.length ? data?.topics : undefined;
  }, [data]);

  return (
    <LayoutPage>
      <div className={styles.head}>
        <Title size="h1" className={styles.title}>
          Форум
        </Title>
        <Button href={AppRoutes.forumNew} className={styles.button} mods={['link', 'inline']}>
          Создать тему
        </Button>
      </div>
      <div className={styles.body}>
        {isLoading ? (
          <Preloader />
        ) : topics ? (
          <TopicsList items={data.topics} />
        ) : (
          <div className={styles.empty}>Нет открытых топиков</div>
        )}
      </div>
    </LayoutPage>
  );
}
