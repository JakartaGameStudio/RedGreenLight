import { MouseEventHandler, ReactNode } from 'react';

export type ButtonMods = 'light' | 'link' | 'warning' | 'warning-light';

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  mod?: ButtonMods;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: 'submit' | 'reset';
};
