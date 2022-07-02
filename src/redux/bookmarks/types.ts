export interface BookmarksState {
  currentBookmark: string;
  favoriteList: number[];
  watchLaterList: number[];
}

export type BookmarksAction = {
  type: string;
  payload: number;
};
