import { MovieData } from '../../types';

export interface MovieState {
  items: MovieData[];
  year: number;
  currentPage: number;
  pageLimit: number;
  sortType: string;
  genresIds: number[];
  findValue: string;
}
