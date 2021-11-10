export type MenuItem = {
  url: string;
  text: string;
};

export type MenuProps = {
  className?: string;
  items: MenuItem[];
};
