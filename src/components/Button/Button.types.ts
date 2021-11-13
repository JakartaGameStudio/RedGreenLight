import { MouseEventHandler, ReactNode } from 'react';

export type ButtonMods = 'light' | 'warning' | 'link';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  mod?: ButtonMods;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'submit' | 'reset';
};
