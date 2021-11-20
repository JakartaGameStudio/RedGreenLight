import { ForumSectionLink } from 'components/ForumSectionLink/ForumSectionLink';
import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { ForumSection } from 'types/ForumSection.types';

import { MainList } from 'components/MainList/MainList';

const initialData: ForumSection[] = [
  {
    id: 1,
    messagesCount: 2,
    name: 'Новые игры',
    slug: 'novye_igry',
    themesCount: 234,
  },
  {
    id: 2,
    messagesCount: 234,
    name: 'Новые игры',
    slug: 'novye_igry',
    themesCount: 3,
  },
  {
    id: 3,
    messagesCount: 2,
    name: 'Новые игры',
    slug: 'novye_igry',
    themesCount: 3,
  },
];

export function PageForum() {
  return (
    <LayoutPage title="Форум">
      <MainList>
        {initialData.map((section) => (
          <ForumSectionLink key={section.id} section={section} />
        ))}
      </MainList>
    </LayoutPage>
  );
}
