import { ImageProps } from 'components/Image/Image.types';

export type ForumTopicProps = {
  author: {
    name: string;
    image?: ImageProps;
  };
  date: Date;
  href: string;
  title: string;
};
