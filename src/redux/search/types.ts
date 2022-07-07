import { MovieData } from 'types';

export interface SearchState {
  currentQuestion: number;
  pageNum: number;
  compiledMovies: MovieData[];
}
