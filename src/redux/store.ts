import { bookmarks } from './bookmarks/reducer';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { movies } from './movies/reducer';
import { auth } from './auth/reducer';
import { modal } from './modal/reducer';

const reducers = combineReducers({
  movies,
  auth,
  modal,
  bookmarks,
});

export const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
