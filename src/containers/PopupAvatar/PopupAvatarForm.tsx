import { UsersApi } from 'api';
import { UsersApiUserKeys } from 'api/UsersApi/UsersApi.types';
import { Button } from 'components/Button/Button';
import { useState } from 'react';

import styles from './PopupAvatar.module.scss';
import { PopupAvatarFormProps } from './PopupAvatar.types';

export function PopupAvatarForm({ onSubmit, onClose }: PopupAvatarFormProps) {
  const [value, setValue] = useState<File>();

  function handlerSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append(UsersApiUserKeys.avatar, value);
    UsersApi.updateAvatar(data);
    onSubmit();
  }

  function onChange({ target }) {
    const file = target.files[0];

    setValue(file);
  }

  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
      <label className={styles.label}>
        {!value && <span className={styles.link}>Выбрать файл на компьютере</span>}
        {value && <img src={URL.createObjectURL(value)} alt="Аватар" className={styles.image} />}
        {value && <span className={styles.value}>{value.name}</span>}
        <input type="file" className={styles.input} accept=".png,.jpg,.svg" onChange={onChange} />
      </label>
      {value && (
        <Button type="submit" className={styles.button}>
          Поменять
        </Button>
      )}
      <Button type="reset" className={styles.button} mod="light" onClick={onClose}>
        Отмена
      </Button>
    </form>
  );
}
