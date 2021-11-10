import { ReactNode } from 'react';

export type TitleProps = {
  size: 'h1' | 'h2' | 'h3';
  className?: ReactNode;
  children: ReactNode;
};
