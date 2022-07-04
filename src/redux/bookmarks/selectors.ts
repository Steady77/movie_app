import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { filterByBookmark } from 'utils/helpers/array';

export const selectFavoriteList = (state: RootState) => state.bookmarks.favoriteList;
export const selectWatchLaterList = (state: RootState) => state.bookmarks.watchLaterList;
export const selectCurrentBookmark = (state: RootState) => state.bookmarks.currentBookmark;
const selectMovieItems = (state: RootState) => state.movies.items;

export const selectMoviesByBookmark = createSelector(
  [selectFavoriteList, selectWatchLaterList, selectCurrentBookmark, selectMovieItems],
  (favoriteList, watchLaterList, currentBookmark, items) => {
    return filterByBookmark(items, currentBookmark, favoriteList, watchLaterList);
  },
);
