import { ReactNode } from 'react';

export type TitleProps = {
  children: ReactNode;
  size: 'h1' | 'h2' | 'h3';
  className?: ReactNode;
};
