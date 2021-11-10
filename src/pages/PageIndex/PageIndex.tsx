import { Button } from 'components/Button/Button';
import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { Title } from 'components/Title/Title';
import { AppRoutes } from 'types/AppRoutes';

import styles from './PageIndex.module.scss';

const rulesListItems = [
  'Первое правило Бойцовского клуба: не упоминать о Бойцовском клубе.',
  'Второе правило Бойцовского клуба: не упоминать нигде о Бойцовском клубе.',
  'Третье правило Бойцовского клуба: боец крикнул «стоп», выдохся, отключился — бой окончен.',
  'Четвертое: в бою участвуют лишь двое.',
  'Пятое: один бой за вечер, друзья.',
  'Шестое: снимать обувь и рубашки.',
  'Седьмое: бой продолжается столько, сколько нужно.',
  'Восьмое и последнее: тот, кто впервые пришёл в клуб — примет бой.',
];

export function PageIndex() {
  return (
    <LayoutPage title="Найди свою скорость, чтобы выиграть">
      <div className={styles.description}>
        <p>Быстрее двигаешься - медленнее тормозишь.</p>
        <p>Успей остановиться до того, как фигура повернется.</p>
      </div>
      <div className={styles.rules}>
        <Title size="h2" children="Правила" />
        <ol>
          {rulesListItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
      <div className={styles.form}>
        <Button href={AppRoutes.game}>Начать игру</Button>
        <Button href={AppRoutes.signUp} mod="light">
          Стать участником
        </Button>
      </div>
    </LayoutPage>
  );
}
