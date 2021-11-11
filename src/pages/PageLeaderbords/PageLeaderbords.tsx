import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import styles from './PageLeaderbords.module.scss';
import { LeaderboarsPlayer } from 'types/LeaderboarsPlayer.types';
import { LeaderboardsList } from './../../components/LeaderboardsList/LeaderboardsList';

const initialData: LeaderboarsPlayer[] = [
  {
    id: 234,
    login: 'SuperPlayer',
    place: 1,
    value: '0:23',
    isOwn: false,
  }, {
    id: 242,
    login: 'SuperPlayer',
    place: 2,
    value: '0:23',
    isOwn: false,
  }, {
    id: 2345,
    login: 'SuperPlayer',
    place: 3,
    value: '0:23',
    isOwn: false,
  }, {
    id: 2678,
    login: 'SuperPlayer',
    place: 4,
    value: '0:23',
    isOwn: false,
  }, {
    id: 9234,
    login: 'SuperPlayer',
    place: 5,
    value: '0:23',
    isOwn: true,
  }
];

export function PageLeaderbords() {
  return (
    <LayoutPage title="Рейтинг игроков">
      <div className={styles.leaderBlock}>
        <LeaderboardsList players={initialData} />
      </div>
    </LayoutPage>
  );
}
