import { themesApi } from 'services/redux/api/themesApi';

export const useGetServerThemeId = (isLogin: boolean) => {
  const { data } = themesApi.useGetQuery(null, {
    skip: !isLogin,
  });

  return data;
};
