import { ReactNode } from 'react';

export type PopupProps = {
  children: ReactNode;
  onClose(): void;
  active?: boolean;
};
