import { AuthDataAction, AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
  login: null,
};

export const auth = (state = initialState, action: AuthDataAction) => {
  switch (action.type) {
    case 'SET_AUTH_DATA':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
