import { MovieData } from '../../types';

export const SET_ITEMS = 'SET_ITEMS';
export const LOAD_PAGE = 'LOAD_PAGE';
export const SET_YEAR = 'SET_YEAR';
export const SET_SORT_BY = 'SET_SORT_BY';

export const setItems = (items: MovieData[] | {}) => ({
  type: SET_ITEMS,
  payload: items,
});

export const setYear = (year: number) => ({
  type: SET_YEAR,
  payload: year,
});

export const setSortBy = (sortBy: string) => ({
  type: SET_SORT_BY,
  payload: sortBy,
});

export const loadPage = (page: number) => ({
  type: LOAD_PAGE,
  payload: page,
});
