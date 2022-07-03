import { BookmarksActionType } from './types';

export const setToFavorite = (id: number) => ({
  type: BookmarksActionType.SET_TO_FAVORITE,
  payload: id,
});

export const setToWatchLater = (id: number) => ({
  type: BookmarksActionType.SET_TO_WATCH_LATER,
  payload: id,
});

export const setCurrentBookmark = (mark: string) => ({
  type: BookmarksActionType.SET_CURRENT_BOOKMARK,
  payload: mark,
});
