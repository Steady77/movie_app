import { getFromStorage, toggleIdInArray } from 'utils/helpers';
import { BookmarkActions, BookmarksActionType, BookmarksState } from './types';

const initialState: BookmarksState = {
  currentBookmark: '',
  favoriteList: getFromStorage('favorites') ?? [],
  watchLaterList: getFromStorage('watchLater') ?? [],
};

export const bookmarks = (state = initialState, action: BookmarkActions) => {
  switch (action.type) {
    case BookmarksActionType.SET_TO_FAVORITE:
      return {
        ...state,
        favoriteList: toggleIdInArray(state.favoriteList, action.payload),
      };
    case BookmarksActionType.SET_TO_WATCH_LATER:
      return {
        ...state,
        watchLaterList: toggleIdInArray(state.watchLaterList, action.payload),
      };
    case BookmarksActionType.SET_CURRENT_BOOKMARK:
      return {
        ...state,
        currentBookmark: action.payload,
      };
    default:
      return state;
  }
};
