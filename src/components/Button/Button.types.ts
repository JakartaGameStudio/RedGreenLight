import { MouseEventHandler, ReactNode } from 'react';

export type ButtonMods =
  | 'light'
  | 'link'
  | 'warning'
  | 'warning-light'
  | 'inline'
  | 'grey'
  | 'small';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  mods?: ButtonMods[];
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'submit' | 'reset';
};
