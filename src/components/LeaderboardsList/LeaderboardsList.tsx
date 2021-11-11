import styles from './LeaderboardsList.module.scss';
import { LeaderboarsPlayer } from 'types/LeaderboarsPlayer.types';
import { LeaderboardsBlock } from 'components/LeaderboardsBlock/LeaderboardsBlock';

export function LeaderboardsList( { players }: {players: Array<LeaderboarsPlayer>} ) {
  return (
    <div className={styles.container}>
      {players.map((item) => (
        <LeaderboardsBlock key={item.id} {...item} />
      ))}
    </div>
  );
}
