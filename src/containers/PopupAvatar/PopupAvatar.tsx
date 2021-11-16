import { PopupProps } from 'hoc/Popup/Popup.types';
import { withPopup } from 'hoc/Popup/withPopup';

import { PopupAvatarFormProps } from './PopupAvatar.types';
import { PopupAvatarForm } from './PopupAvatarForm';

export function PopupAvatar({ active, onSubmit, onClose }: PopupProps & PopupAvatarFormProps) {
  const PopupForm = withPopup<PopupAvatarFormProps>(PopupAvatarForm);

  return <PopupForm active={active} onSubmit={onSubmit} onClose={onClose} />;
}
