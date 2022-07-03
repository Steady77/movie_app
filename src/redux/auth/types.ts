export type AuthDataAction = {
  type: AuthActionType.SET_AUTH_DATA;
  payload: {
    isAuth: boolean;
    login: string;
  };
};

export interface AuthState {
  isAuth: boolean;
  login: string | null;
}

export enum AuthActionType {
  SET_AUTH_DATA = 'SET_AUTH_DATA',
}
