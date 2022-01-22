import { ForumTopic } from 'components/ForumTopic/ForumTopic';
import { LayoutPage } from 'components/LayoutPage/LayoutPage';

export function PageForum() {
  return (
    <LayoutPage title="Форум">
      <ForumTopic
        key={1}
        title="asdasd"
        image={{
          src: '',
        }}
        href="/"
        date={new Date()}
        count={2}
      />
    </LayoutPage>
  );
}
