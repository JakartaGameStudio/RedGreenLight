import { AuthApi } from 'api';
import { useStoreDispatch } from 'hooks/useStoreDispatch';
import { useStoreSelector } from 'hooks/useStoreSelector';
import { useCallback, useEffect } from 'react';
import { userAdapter } from 'store/adapters/userAdapter';
import { authReducer } from 'store/reducers/authReducer/authReducer';
import { userReducer } from 'store/reducers/userReducer/userReducer';
import { store } from 'store/store';

export function useAuth() {
  const dispatch = useStoreDispatch();
  const id = useStoreSelector((state) => state.auth.id);
  const userSelector = userAdapter.getSelectors().selectById;
  const storedUser = userSelector(store.getState().users, id);
  const signIn = useCallback(
    async (data) => {
      await AuthApi.signIn(data);
      const userData = await AuthApi.getUser();

      dispatch(
        authReducer.actions.setId({
          id: userData.id,
        }),
      );
      dispatch(userReducer.actions.setOne(userData));
    },
    [dispatch],
  );
  const signUp = useCallback(
    async (data) => {
      await AuthApi.signUp(data);
      const userData = await AuthApi.getUser();

      dispatch(
        authReducer.actions.setId({
          id: userData.id,
        }),
      );
      dispatch(userReducer.actions.setOne(userData));
    },
    [dispatch],
  );
  const signOut = useCallback(async () => {
    await AuthApi.signOut();

    dispatch(
      authReducer.actions.setId({
        id: undefined,
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    AuthApi.getUser().then((userData) => {
      dispatch(
        authReducer.actions.setId({
          id: userData.id,
        }),
      );
      dispatch(userReducer.actions.setOne(userData));
    });
  }, [dispatch]);

  return {
    user: storedUser,
    signIn,
    signUp,
    signOut,
  };
}
