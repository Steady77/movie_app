import { MovieData } from '../../types';

export const SET_ITEMS = 'SET_ITEMS';
export const SET_SORTED_ITEMS = 'SET_SORTED_ITEMS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_YEAR = 'SET_YEAR';

export const setItems = (items: MovieData[] | {}) => ({
  type: SET_ITEMS,
  payload: items,
});

export const setYear = (year: number) => ({
  type: SET_YEAR,
  payload: year,
});

export const setCurrentPage = (page: number) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
