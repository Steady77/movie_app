import { SET_ITEMS, SET_YEAR } from './actions';
import { MovieState } from './types';
import { AnyAction } from '@reduxjs/toolkit';
import { SET_CURRENT_PAGE } from '../movies/actions';

const initialState: MovieState = {
  items: [],
  sortedItems: [],
  year: 2020,
  currentPage: 1,
  pageLimit: 10,
  totalPages: 0,
};

export const movies = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      const lastIndex = action.payload * state.pageLimit;
      const firstIndex = lastIndex - state.pageLimit;
      const lenghttt = state.items.filter(
        (item) => new Date(item.release_date).getFullYear() === state.year,
      ).length;
      const pages = Math.ceil(lenghttt / state.pageLimit);
      return {
        ...state,
        sortedItems: state.items
          .filter(
            (item) => new Date(item.release_date).getFullYear() === state.year,
          )
          .slice(firstIndex, lastIndex),
        currentPage: action.payload,
        totalPages: pages,
      };
    case SET_ITEMS:
      const lenght = [...action.payload].filter(
        (item) => new Date(item.release_date).getFullYear() === state.year,
      ).length;

      const totalPages = Math.ceil(lenght / state.pageLimit);
      return {
        ...state,
        items: [...action.payload],
        sortedItems: [...action.payload]
          .filter(
            (item) => new Date(item.release_date).getFullYear() === state.year,
          )
          .slice(0, state.pageLimit),
        totalPages: totalPages,
      };
    case SET_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    default:
      return state;
  }
};
