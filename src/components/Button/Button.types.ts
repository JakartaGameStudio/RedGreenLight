import { MouseEventHandler, PropsWithChildren } from 'react';

export type ButtonMods = 'light' | 'warning';

export type ButtonProps = PropsWithChildren<{
  onClick?: MouseEventHandler<HTMLButtonElement>;
  mods?: ButtonMods;
}>;
