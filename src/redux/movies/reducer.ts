import { toggleIdInArray } from '../../utils/helpers/array';
import { DEFAULT_PAGE_LIMIT, DEFAULT_SORT_TYPE, DEFAULT_YEAR } from '../../utils/consts';
import { MovieActionType, MoviesActions, MovieState } from './types';

const initialState: MovieState = {
  items: [],
  year: DEFAULT_YEAR,
  currentPage: 1,
  pageLimit: DEFAULT_PAGE_LIMIT,
  sortType: DEFAULT_SORT_TYPE,
  genresIds: [],
};

export const movies = (state = initialState, action: MoviesActions) => {
  switch (action.type) {
    case MovieActionType.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case MovieActionType.SET_ITEMS:
      return {
        ...state,
        items: [...action.payload],
      };
    case MovieActionType.SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case MovieActionType.SET_SORT_BY:
      return {
        ...state,
        sortType: action.payload,
      };
    case MovieActionType.SET_GENRES_ID:
      return {
        ...state,
        genresIds: toggleIdInArray(state.genresIds, action.payload),
      };
    case MovieActionType.RESET_FILTERS:
      return {
        ...state,
        year: DEFAULT_YEAR,
        pageLimit: DEFAULT_PAGE_LIMIT,
        sortType: DEFAULT_SORT_TYPE,
        genresIds: [],
      };
    default:
      return state;
  }
};
