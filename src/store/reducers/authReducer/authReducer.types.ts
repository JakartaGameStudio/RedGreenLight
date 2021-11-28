export type AuthReducerState = {
  id?: number;
};

export type AuthReducerCases = {
  setId(
    state: AuthReducerState,
    action: {
      payload: { id: number };
    },
  );
};
