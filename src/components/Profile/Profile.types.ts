export type ProfileProps = {
  fields: ProfileFieldProps[];
  title: string;
};

export type ProfileFieldProps = {
  label?: string;
  value: string | number;
};
