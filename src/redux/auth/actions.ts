import { AuthActionType } from './types';

export const setAuthData = (isAuth: boolean, login: string | null) => {
  return {
    type: AuthActionType.SET_AUTH_DATA,
    payload: { isAuth, login },
  };
};
