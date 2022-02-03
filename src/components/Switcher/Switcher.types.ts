export type SwitcherItem = {
  onClick: (value: number) => void;
  text: string;
  value: number;
};

export type SwitcherProps = {
  activeId: number;
  items: SwitcherItem[];
};
