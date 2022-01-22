import { MouseEventHandler, ReactNode } from 'react';

export type ButtonMods = 'light' | 'link' | 'warning' | 'warning-light' | 'inline';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  mods?: ButtonMods[];
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'submit' | 'reset';
};
