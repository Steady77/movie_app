import search from './search/searchSlice';

import { bookmarks } from './bookmarks/reducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { movies } from './movies/reducer';
import { auth } from './auth/reducer';
import { modal } from './modal/reducer';

const rootReducer = combineReducers({
  movies,
  auth,
  modal,
  bookmarks,
  search,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
