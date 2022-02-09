import { Popup } from 'components/Popup/Popup';
import { PopupProps } from 'components/Popup/Popup.types';

import { PopupAvatarFormProps } from './PopupAvatar.types';
import { PopupAvatarForm } from './PopupAvatarForm';

export function PopupAvatar({
  active,
  onClose,
  onSubmit,
}: Omit<PopupProps, 'children'> & PopupAvatarFormProps) {
  return (
    <Popup active={active} onClose={onClose}>
      <PopupAvatarForm onClose={onClose} onSubmit={onSubmit} />
    </Popup>
  );
}
