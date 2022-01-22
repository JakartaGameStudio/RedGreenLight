import { Divider } from 'components/Divider/Divider';
import { ForumTopic } from 'components/ForumTopic/ForumTopic';
import { LayoutPage } from 'components/LayoutPage/LayoutPage';
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
    <LayoutPage title="Форум">
      {items.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <ForumTopic title={item.title} href={item.href} date={item.date} author={item.author} />
            {index < items.length - 1 && <Divider className={styles.divider} />}
          </React.Fragment>
        );
      })}
    </LayoutPage>
  );
}
