import { UserResponse } from 'api/api.types';

export type PopupAvatarFormProps = {
  onClose(): void;
  onSubmit(data: UserResponse): void;
};
