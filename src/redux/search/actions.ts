import { MovieData } from './../../types';
import { SearchActionType } from './types';

export const setCurrentQuestion = (index: number) => ({
  type: SearchActionType.SET_CURRENT_QUESTION,
  payload: index,
});

export const setCompiledMovies = (movies: MovieData[]) => ({
  type: SearchActionType.SET_COMPILED_MOVIES,
  payload: movies,
});

export const setPageNum = (page: number) => ({
  type: SearchActionType.SET_PAGE_NUM,
  payload: page,
});
