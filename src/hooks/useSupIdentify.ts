/* eslint-disable import/no-unresolved */
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { userSupApi } from 'services/redux/api/userSupApi';

import { useIdentify } from './useIdentify';

export function useSupIdentify() {
  const [userData] = useIdentify();
  const [login] = userSupApi.useLoginMutation();
  const userId = userData?.id;

  useEffect(() => {
    if (!!userId && !Cookies.get('access_token')) {
      login({ userId });
    }
  }, [login, userId]);
}
