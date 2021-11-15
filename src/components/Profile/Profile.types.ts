import { ProfileAvatarProps } from 'components/ProfileAvatar/ProfileAvatar.types';

export type ProfileProps = {
  avatar: ProfileAvatarProps;
  fields: ProfileFieldProps[];
  title: string;
};

export type ProfileFieldProps = {
  label?: string;
  value: string | number;
};
