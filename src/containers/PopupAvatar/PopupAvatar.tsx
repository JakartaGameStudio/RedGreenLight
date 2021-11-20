import { Popup } from 'components/Popup/Popup';
import { PopupProps } from 'components/Popup/Popup.types';

import { PopupAvatarFormProps } from './PopupAvatar.types';
import { PopupAvatarForm } from './PopupAvatarForm';

export function PopupAvatar({
  active,
  onSubmit,
  onClose,
}: Omit<PopupProps, 'children'> & PopupAvatarFormProps) {
  return (
    <Popup active={active} onClose={onClose}>
      <PopupAvatarForm onSubmit={onSubmit} onClose={onClose} />
    </Popup>
  );
}
