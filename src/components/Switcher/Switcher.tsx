import classNames from 'classnames';

import styles from './switcher.module.scss';

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
    <div className={styles.switcher}>
      {items.map((item) => (
        <button
          className={classNames(styles.item, {
            [styles.active]: activeId === item.value,
          })}
          key={item.value}
          onClick={() => activeId !== item.value && item.onClick(item.value)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
}
