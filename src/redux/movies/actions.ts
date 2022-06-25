import { MovieData } from '../../types';

export const SET_ITEMS = 'SET_ITEMS';

export const setItems = (items: MovieData[] | {}) => ({
  type: SET_ITEMS,
  payload: items,
});
