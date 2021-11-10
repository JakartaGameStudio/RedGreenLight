import { PropsWithChildren } from 'react';

export enum TitleSizes {
  h1,
  h2,
  h3,
}

export type TitleProps = PropsWithChildren<{
  size: keyof typeof TitleSizes;
}>;
