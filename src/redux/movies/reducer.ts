import { SET_ITEMS } from './actions';
import { MovieActionType, MovieState } from './types';

const initialState: MovieState = {
  items: [],
};

export const movies = (state = initialState, action: MovieActionType) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: [...action.payload],
      };
    default:
      return state;
  }
};
