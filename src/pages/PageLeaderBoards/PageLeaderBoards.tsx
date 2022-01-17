import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { LeaderboardsBlock } from 'components/LeaderboardsBlock/LeaderboardsBlock';
import { MainList } from 'components/MainList/MainList';
import { Preloader } from 'components/Preloader/Preloader';
import { leaderboardApi } from 'services/redux';

export function PageLeaderBoards() {
  const { data, isSuccess, isLoading, isError } = leaderboardApi.useGetLeaderboardQuery();

  return (
    <LayoutPage title="Рейтинг игроков">
      <MainList>
        {isSuccess &&
          data.map((player) => <LeaderboardsBlock key={player.place} player={player} />)}
        {isError && 'Ошибка получения данных'}
        {isLoading && <Preloader />}
      </MainList>
    </LayoutPage>
  );
}
