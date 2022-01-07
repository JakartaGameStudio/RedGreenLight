import { Button } from 'components/Button/Button';
import { Image } from 'components/Image/Image';
import { Preloader } from 'components/Preloader/Preloader';
import { useMemo, useState } from 'react';
import { userApi } from 'services/redux';

import styles from './PopupAvatar.module.scss';
import { PopupAvatarFormProps } from './PopupAvatar.types';

export function PopupAvatarForm({ onClose, onSubmit }: PopupAvatarFormProps) {
  const [updateAvatar, { isLoading }] = userApi.useUpdateAvatarMutation();
  const [value, setValue] = useState<File>();
  const handleSubmit = useMemo(() => {
    return function (event) {
      event.preventDefault();
      updateAvatar(value).finally(onSubmit);
    };
  }, [value, onSubmit]);
  const handleChange = useMemo(() => {
    return function (event) {
      const file = event.target.files[0];

      setValue(file);
    };
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        {value && (
          <>
            <Image src={URL.createObjectURL(value)} alt="Аватар" className={styles.image} />
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
