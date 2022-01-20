import s from './switcher.module.scss';

type SwitcherItem = {
  onClick: (value: number) => void;
  text: string;
  value: number;
};
type SwitcherProps = {
  activeId: number;
  items: SwitcherItem[];
};

export function Switcher({ items, activeId }: SwitcherProps) {
  return (
    <div className={s.switcher}>
      {items.map((item) => (
        <button
          className={`${s.switcher_item} ${activeId === item.value ? s.active : ''}`}
          key={item.value}
          onClick={() => activeId !== item.value && item.onClick(item.value)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
}
