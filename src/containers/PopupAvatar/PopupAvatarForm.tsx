import { Button } from 'components/Button/Button';
import { useMemo, useState } from 'react';

import styles from './PopupAvatar.module.scss';
import { PopupAvatarFormProps } from './PopupAvatar.types';

export function PopupAvatarForm({ onClose, onSubmit }: PopupAvatarFormProps) {
  const [value, setValue] = useState<File>();
  const handleChange = useMemo(() => {
    return function (event) {
      const file = event.target.files[0];

      setValue(file);
    };
  }, []);

  return (
    <form className={styles.form} onSubmit={() => onSubmit(value)}>
      <label className={styles.label}>
        {value && (
          <>
            <img src={URL.createObjectURL(value)} alt="Аватар" className={styles.image} />
            <span className={styles.value}>{value.name}</span>
          </>
        )}
        <span className={styles.link}>
          {value ? 'Выбрать другой файл' : 'Выбрать файл на компьютере'}
        </span>
        <input
          type="file"
          className={styles.input}
          accept=".png,.jpg,.svg"
          onChange={handleChange}
        />
      </label>
      {value && (
        <Button type="submit" className={styles.button}>
          Применить
        </Button>
      )}
      <Button type="reset" className={styles.button} mod="warning-light" onClick={onClose}>
        Отмена
      </Button>
    </form>
  );
}
