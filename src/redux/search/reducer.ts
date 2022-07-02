import { SearchState } from './types';
import { AnyAction } from '@reduxjs/toolkit';

const initialState: SearchState = {
  currentQuestion: 0,
  pageNum: 1,
  compiledMovies: [],
};

export const search = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_CURRENT_QUESTION':
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case 'SET_PAGE_NUM':
      return {
        ...state,
        pageNum: action.payload,
      };
    case 'SET_COMPILED_MOVIES':
      return {
        ...state,
        compiledMovies: action.payload,
      };
    default:
      return state;
  }
};
