import { DEFAULT_PAGE_LIMIT, DEFAULT_SORT_TYPE, DEFAULT_YEAR } from './../../utils/consts';
import { SET_CURRENT_PAGE, SET_GENRES_ID, SET_ITEMS, SET_SORT_BY, SET_YEAR } from './actions';
import { MovieState } from './types';
import { AnyAction } from '@reduxjs/toolkit';
import { filterByYear, sortByType } from '../../utils/helpers';

const initialState: MovieState = {
  items: [],
  sortedItems: [],
  year: DEFAULT_YEAR,
  currentPage: 1,
  pageLimit: DEFAULT_PAGE_LIMIT,
  sortType: DEFAULT_SORT_TYPE,
  genresIds: [],
};

export const movies = (state = initialState, action: AnyAction) => {
  const { year, sortType } = state;

  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_ITEMS:
      return {
        ...state,
        items: [...action.payload],
        sortedItems: sortByType(filterByYear([...action.payload], year), sortType),
      };
    case SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortType: action.payload,
      };
    case SET_GENRES_ID:
      return {
        ...state,
        genresIds: action.payload,
      };
    default:
      return state;
  }
};
