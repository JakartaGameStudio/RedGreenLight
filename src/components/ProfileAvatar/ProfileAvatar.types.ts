export type ProfileAvatarProps = {
  className?: string;
  image?: {
    alt?: string;
    src: string;
  };
  onClick?(): void;
};
