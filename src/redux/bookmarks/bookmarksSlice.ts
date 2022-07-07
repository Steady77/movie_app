import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BOOKMARKS } from 'utils/consts';
import { toggleIdInArray } from 'utils/helpers/array';
import { getFromStorage } from 'utils/helpers/storage';
import { BookmarksState } from './types';

const initialState: BookmarksState = {
  currentBookmark: '',
  favoriteList: getFromStorage(BOOKMARKS.FAVORITES) ?? [],
  watchLaterList: getFromStorage(BOOKMARKS.WATCH_LATER) ?? [],
};

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    setToFavorite(state, action: PayloadAction<number>) {
      state.favoriteList = toggleIdInArray(state.favoriteList, action.payload);
    },
    setToWatchLater(state, action: PayloadAction<number>) {
      state.watchLaterList = toggleIdInArray(state.watchLaterList, action.payload);
    },
    setCurrentBookmark(state, action: PayloadAction<string>) {
      state.currentBookmark = action.payload;
    },
  },
});

export const { setToFavorite, setToWatchLater, setCurrentBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
