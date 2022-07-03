export interface BookmarksState {
  currentBookmark: string;
  favoriteList: number[];
  watchLaterList: number[];
}

export enum BookmarksActionType {
  SET_TO_FAVORITE = 'SET_TO_FAVORITE',
  SET_TO_WATCH_LATER = 'SET_TO_WATCH_LATER',
  SET_CURRENT_BOOKMARK = 'SET_CURRENT_BOOKMARK',
}

interface SetToFavoriteAction {
  type: BookmarksActionType.SET_TO_FAVORITE;
  payload: number;
}

interface SetToWatchLaterAction {
  type: BookmarksActionType.SET_TO_WATCH_LATER;
  payload: number;
}

interface SetCurrentBookmarkAction {
  type: BookmarksActionType.SET_CURRENT_BOOKMARK;
  payload: string;
}

export type BookmarkActions =
  | SetToFavoriteAction
  | SetToWatchLaterAction
  | SetCurrentBookmarkAction;
