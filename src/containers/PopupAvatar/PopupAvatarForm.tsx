import { UsersApi } from 'api';
import { ApiUserKeys } from 'api/api.types';
import { Button } from 'components/Button/Button';
import { useState } from 'react';

import styles from './PopupAvatar.module.scss';
import { PopupAvatarFormProps } from './PopupAvatar.types';

export function PopupAvatarForm({ onSubmit, onClose }: PopupAvatarFormProps) {
  const [value, setValue] = useState<File>();

  function handlerSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append(ApiUserKeys.avatar, value);
    UsersApi.updateAvatar(data).then((userData) => {
      onSubmit(userData);
    });
  }

  function onChange({ target }) {
    const file = target.files[0];

    setValue(file);
  }

  return (
    <form className={styles.form} onSubmit={handlerSubmit}>
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
        <input type="file" className={styles.input} accept=".png,.jpg,.svg" onChange={onChange} />
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
