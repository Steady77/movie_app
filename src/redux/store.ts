import { combineReducers, configureStore } from '@reduxjs/toolkit';
import search from './search/searchSlice';
import bookmarks from './bookmarks/bookmarksSlice';
import movies from './movies/moviesSlice';
import auth from './auth/authSlice';
import modal from './modal/modalSlice';

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
