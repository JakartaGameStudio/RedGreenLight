import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { LeaderboardsBlock } from 'components/LeaderboardsBlock/LeaderboardsBlock';
import { MainList } from 'components/MainList/MainList';
import { LeaderboardsPlayer } from 'types/LeaderboardsPlayer.types';

const initialData: LeaderboardsPlayer[] = [
  {
    id: 234,
    login: 'SuperPlayer',
    place: 1,
    value: '0:23',
  },
  {
    id: 242,
    login: 'SuperPlayer',
    place: 2,
    value: '0:23',
  },
  {
    id: 2345,
    login: 'SuperPlayer',
    place: 3,
    value: '0:23',
  },
  {
    id: 2678,
    login: 'SuperPlayer',
    place: 4,
    value: '0:23',
  },
  {
    id: 9234,
    login: 'SuperPlayer',
    place: 5,
    value: '0:23',
  },
];

export function PageLeaderBoards() {
  return (
    <LayoutPage title="Рейтинг игроков">
      <MainList>
        {initialData.map((player) => (
          <LeaderboardsBlock key={player.id} player={player} isOwn={player.id === 5} /> // Проставил 5 пока не храним пользователя
        ))}
      </MainList>
    </LayoutPage>
  );
}
