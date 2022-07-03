import { MovieData } from './../../types';

export interface SearchState {
  currentQuestion: number;
  pageNum: number;
  compiledMovies: MovieData[];
}

export enum SearchActionType {
  SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION',
  SET_COMPILED_MOVIES = 'SET_COMPILED_MOVIES',
  SET_PAGE_NUM = 'SET_PAGE_NUM',
}

interface SetCurrentQuestionAction {
  type: SearchActionType.SET_CURRENT_QUESTION;
  payload: number;
}

interface SetCompiledMoviesAction {
  type: SearchActionType.SET_COMPILED_MOVIES;
  payload: MovieData[];
}

interface SetPageNumAction {
  type: SearchActionType.SET_PAGE_NUM;
  payload: number;
}

export type SearchActions = SetCurrentQuestionAction | SetCompiledMoviesAction | SetPageNumAction;
