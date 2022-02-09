import { userApi } from 'services/redux';

export function useIdentify() {
  const { data, isSuccess, isLoading, error } = userApi.useGetUserQuery();
  const userData = isSuccess ? data : null;

  return [userData, { isSuccess, isLoading, error }] as const;
}
