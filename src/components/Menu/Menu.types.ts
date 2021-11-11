export type MenuItem = {
  text: string;
  url: string;
};

export type MenuProps = {
  className?: string;
  items: MenuItem[];
};
