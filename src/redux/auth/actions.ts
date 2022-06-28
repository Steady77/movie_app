export const SET_AUTH_DATA = 'SET_AUTH_DATA';

export const setAuthData = (isAuth: boolean, login: string | null) => {
  return {
    type: SET_AUTH_DATA,
    payload: { isAuth, login },
  };
};
