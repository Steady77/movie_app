import { SearchActions, SearchActionType, SearchState } from './types';

const initialState: SearchState = {
  currentQuestion: 0,
  pageNum: 1,
  compiledMovies: [],
};

export const search = (state = initialState, action: SearchActions) => {
  switch (action.type) {
    case SearchActionType.SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case SearchActionType.SET_PAGE_NUM:
      return {
        ...state,
        pageNum: action.payload,
      };
    case SearchActionType.SET_COMPILED_MOVIES:
      return {
        ...state,
        compiledMovies: action.payload,
      };
    default:
      return state;
  }
};
