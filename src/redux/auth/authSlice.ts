import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState: AuthState = {
  isAuth: false,
  login: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<AuthState>) {
      state.isAuth = action.payload.isAuth;
      state.login = action.payload.login;
    },
  },
});

export const { setAuthData } = authSlice.actions;

export default authSlice.reducer;
