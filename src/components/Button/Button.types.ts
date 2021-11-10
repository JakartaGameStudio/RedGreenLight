import { MouseEventHandler, ReactNode } from 'react';

export type ButtonMods = 'light' | 'warning' | 'link';

export type ButtonProps = {
  children: ReactNode;
  href?: string;
  mod?: ButtonMods;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};
