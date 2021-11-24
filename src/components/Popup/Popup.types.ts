import { ReactNode } from 'react';

export type PopupProps = {
  active?: boolean;
  children: ReactNode;
  onClose(): void;
};
