import { AnyAction } from '@reduxjs/toolkit';
import { getFromStorage, toggleIdInArray } from 'utils/helpers';
import { SET_CURRENT_BOOKMARK, SET_TO_FAVORITE, SET_TO_WATCH_LATER } from './actions';
import { BookmarksState } from './types';

const initialState: BookmarksState = {
  currentBookmark: '',
  favoriteList: getFromStorage('favorites') ?? [],
  watchLaterList: getFromStorage('watchLater') ?? [],
};

export const bookmarks = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_TO_FAVORITE:
      return {
        ...state,
        favoriteList: toggleIdInArray(state.favoriteList, action.payload),
      };
    case SET_TO_WATCH_LATER:
      return {
        ...state,
        watchLaterList: toggleIdInArray(state.watchLaterList, action.payload),
      };
    case SET_CURRENT_BOOKMARK:
      return {
        ...state,
        currentBookmark: action.payload,
      };
    default:
      return state;
  }
};
