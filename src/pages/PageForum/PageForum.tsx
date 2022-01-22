import { Button } from 'components/Button/Button';
import { Divider } from 'components/Divider/Divider';
import { ForumTopic } from 'components/ForumTopic/ForumTopic';
import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { Title } from 'components/Title/Title';
import React from 'react';

import styles from './PageForum.module.scss';
const items = [
  {
    id: 1,
    title: 'Asd asda asd asdad asd?',
    author: {
      name: 'sadasd@asdasd.asd',
      image: {
        src: 'https://i.pravatar.cc/100',
      },
    },
    href: '#',
    date: new Date(),
  },
  {
    id: 2,
    title: 'Ksj jasdk ?',
    author: {
      name: 'sa21d',
    },
    href: '#',
    date: new Date(),
  },
];

export function PageForum() {
  return (
    <LayoutPage>
      <div className={styles.head}>
        <Title size="h1" className={styles.title}>
          Форум
        </Title>
        <Button className={styles.button} mods={['link', 'inline']}>
          Открыть топик
        </Button>
      </div>
      <div className={styles.body}>
        {items.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <ForumTopic
                title={item.title}
                href={item.href}
                date={item.date}
                author={item.author}
              />
              {index < items.length - 1 && <Divider className={styles.divider} />}
            </React.Fragment>
          );
        })}
      </div>
    </LayoutPage>
  );
}
