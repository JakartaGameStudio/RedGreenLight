import { ImageProps } from 'components/Image/Image.types';

export type ForumTopicProps = {
  author: {
    image?: ImageProps;
    name: string;
  };
  date: Date;
  href: string;
  title: string;
};
