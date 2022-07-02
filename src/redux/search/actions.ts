import { MovieData } from './../../types';

export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const SET_COMPILED_MOVIES = 'SET_COMPILED_MOVIES';
export const SET_PAGE_NUM = 'SET_PAGE_NUM';

export const setCurrentQuestion = (index: number) => ({
  type: SET_CURRENT_QUESTION,
  payload: index,
});

export const setCompiledMovies = (movies: MovieData[]) => ({
  type: SET_COMPILED_MOVIES,
  payload: movies,
});

export const setPageNum = (page: number) => ({
  type: SET_PAGE_NUM,
  payload: page,
});
