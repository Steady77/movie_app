import { MovieData } from '../../types';

export const SET_ITEMS = 'SET_ITEMS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_YEAR = 'SET_YEAR';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_GENRES_ID = 'SET_GENRES_ID';

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

export const setCurrentPage = (page: number) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setGenresId = (ids: number[]) => ({
  type: SET_GENRES_ID,
  payload: ids,
});
