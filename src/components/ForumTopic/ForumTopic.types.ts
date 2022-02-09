export type ForumTopicProps = {
  author: {
    name: string;
    avatar?: string;
  };
  count: string;
  href: string;
  title: string;
  date?: Date;
};
