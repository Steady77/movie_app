import { MovieData } from '../../types';

export type MovieActionType = {
  type: string;
  payload: MovieData[];
};

export interface MovieState {
  items: MovieData[];
}
