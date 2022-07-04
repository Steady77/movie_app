import { RootState } from 'redux/store';

export const selectBookmarks = (state: RootState) => state.bookmarks;
