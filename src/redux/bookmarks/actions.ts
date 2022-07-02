export const SET_TO_FAVORITE = 'SET_TO_FAVORITE';
export const SET_TO_WATCH_LATER = 'SET_TO_WATCH_LATER';
export const SET_CURRENT_BOOKMARK = 'SET_CURRENT_BOOKMARK';

export const setToFavorite = (id: number) => ({
  type: SET_TO_FAVORITE,
  payload: id,
});

export const setToWatchLater = (id: number) => ({
  type: SET_TO_WATCH_LATER,
  payload: id,
});

export const setCurrentBookmark = (mark: string) => ({
  type: SET_CURRENT_BOOKMARK,
  payload: mark,
});
