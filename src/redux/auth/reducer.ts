import { AuthActionType, AuthDataAction, AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
  login: null,
};

export const auth = (state = initialState, action: AuthDataAction) => {
  switch (action.type) {
    case AuthActionType.SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
