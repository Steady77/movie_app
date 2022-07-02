export type AuthDataAction = {
  type: string;
  payload: {
    isAuth: boolean;
    login: string;
  };
};

export interface AuthState {
  isAuth: boolean;
  login: string | null;
}
