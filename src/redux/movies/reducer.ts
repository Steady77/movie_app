import { DEFAULT_SORT_BY, DEFAULT_YEAR } from './../../utils/consts';
import { LOAD_PAGE, SET_ITEMS, SET_SORT_BY, SET_YEAR } from './actions';
import { MovieState } from './types';
import { AnyAction } from '@reduxjs/toolkit';
import { filterByYear, getPageCount, sortBy } from '../../utils/helpers';

const initialState: MovieState = {
  items: [],
  sortedItems: [],
  year: DEFAULT_YEAR,
  currentPage: 1,
  pageLimit: 10,
  totalPages: 0,
  sortBy: DEFAULT_SORT_BY,
};

export const movies = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOAD_PAGE:
      const lastIndex = action.payload * state.pageLimit;
      const firstIndex = lastIndex - state.pageLimit;

      return {
        ...state,
        currentPage: action.payload,
        sortedItems: sortBy(filterByYear(state.items, state.year), state.sortBy).slice(
          firstIndex,
          lastIndex,
        ),
        totalPages: getPageCount(filterByYear(state.items, state.year).length),
      };
    case SET_ITEMS:
      return {
        ...state,
        items: [...action.payload],
        sortedItems: sortBy(filterByYear([...action.payload], state.year), state.sortBy).slice(
          0,
          state.pageLimit,
        ),
        totalPages: getPageCount(filterByYear(action.payload, state.year).length),
      };
    case SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};
