export type MenuItem = {
  text: string;
  url: string;
};

export type MenuProps = {
  items: MenuItem[];
  className?: string;
};
