import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState: AuthState = {
  email: null,
  token: null,
  name: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData(state, action: PayloadAction<AuthState>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    removeAuthData(state) {
      state.email = null;
      state.token = null;
      state.name = '';
    },
  },
});

export const { setAuthData, removeAuthData } = authSlice.actions;

export default authSlice.reducer;
