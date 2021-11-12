import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { LeaderboardsBlock } from 'components/LeaderboardsBlock/LeaderboardsBlock';
import { LeaderboarsPlayer } from 'types/LeaderboarsPlayer.types';

import { MainList } from '../../components/MainList/MainList';

const initialData: LeaderboarsPlayer[] = [
  {
    id: 234,
    login: 'SuperPlayer',
    place: 1,
    value: '0:23',
    isOwn: false,
  },
  {
    id: 242,
    login: 'SuperPlayer',
    place: 2,
    value: '0:23',
    isOwn: false,
  },
  {
    id: 2345,
    login: 'SuperPlayer',
    place: 3,
    value: '0:23',
    isOwn: false,
  },
  {
    id: 2678,
    login: 'SuperPlayer',
    place: 4,
    value: '0:23',
    isOwn: false,
  },
  {
    id: 9234,
    login: 'SuperPlayer',
    place: 5,
    value: '0:23',
    isOwn: true,
  },
];

export function PageLeaderbords() {
  return (
    <LayoutPage title="Рейтинг игроков">
      <MainList>
        {initialData.map((item) => (
          <LeaderboardsBlock key={item.id} {...item} />
        ))}
      </MainList>
    </LayoutPage>
  );
}
