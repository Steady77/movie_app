import { RootState } from 'redux/store';

export const selectBookmarks = (state: RootState) => state.bookmarks;
export const selectFavoriteList = (state: RootState) => state.bookmarks.favoriteList;
export const selectWatchLaterList = (state: RootState) => state.bookmarks.watchLaterList;
export const selectCurrentBookmark = (state: RootState) => state.bookmarks.currentBookmark;
