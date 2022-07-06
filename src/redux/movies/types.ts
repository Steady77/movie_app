import { MovieData } from '../../types';

export interface MovieState {
  items: MovieData[];
  year: number;
  currentPage: number;
  pageLimit: number;
  sortType: string;
  genresIds: number[];
}

export enum MovieActionType {
  SET_ITEMS = 'SET_ITEMS',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_YEAR = 'SET_YEAR',
  SET_SORT_BY = 'SET_SORT_BY',
  SET_GENRES_ID = 'SET_GENRES_ID',
  RESET_FILTERS = 'RESET_FILTERS',
}

interface SetItemsAction {
  type: MovieActionType.SET_ITEMS;
  payload: MovieData[];
}

interface SetYearAction {
  type: MovieActionType.SET_YEAR;
  payload: number;
}

interface SetSortByAction {
  type: MovieActionType.SET_SORT_BY;
  payload: string;
}

interface SetCurrentPageAction {
  type: MovieActionType.SET_CURRENT_PAGE;
  payload: number;
}

interface SetGenresIdAction {
  type: MovieActionType.SET_GENRES_ID;
  payload: number;
}

interface ResetFiltersAction {
  type: MovieActionType.RESET_FILTERS;
}

export type MoviesActions =
  | SetItemsAction
  | SetSortByAction
  | SetYearAction
  | SetCurrentPageAction
  | SetGenresIdAction
  | ResetFiltersAction;
