import { MovieData } from '../../types';
import { MovieActionType } from './types';

export const setItems = (items: MovieData[] | {}) => ({
  type: MovieActionType.SET_ITEMS,
  payload: items,
});

export const setYear = (year: number) => ({
  type: MovieActionType.SET_YEAR,
  payload: year,
});

export const setSortBy = (sortBy: string) => ({
  type: MovieActionType.SET_SORT_BY,
  payload: sortBy,
});

export const setCurrentPage = (page: number) => ({
  type: MovieActionType.SET_CURRENT_PAGE,
  payload: page,
});

export const setGenresId = (ids: number) => ({
  type: MovieActionType.SET_GENRES_ID,
  payload: ids,
});

export const resetFilters = () => ({
  type: MovieActionType.RESET_FILTERS,
});
