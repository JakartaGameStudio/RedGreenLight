import { MouseEventHandler, ReactNode } from 'react';

export type ButtonMods = 'light' | 'warning';

export type ButtonProps = {
  children: ReactNode;
  href?: string;
  mods?: ButtonMods;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};
