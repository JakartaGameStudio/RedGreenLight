import { ReactNode } from 'react';

export type TitleProps = {
  children: ReactNode;
  className?: ReactNode;
  size: 'h1' | 'h2' | 'h3';
};
