import { UsersApiUser } from 'api/UsersApi/UsersApi.types';

export type PopupAvatarFormProps = {
  onClose(): void;
  onSubmit(data: UsersApiUser): void;
};
