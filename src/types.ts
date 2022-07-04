import { Dispatch } from 'react';

export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GenresData {
  id: number;
  name: string;
}

export interface LoginFormProps {
  handleClose: () => void;
}

export interface MovieCardProps {
  poster_path: string;
  backdrop_path: string;
  title: string;
  id: number;
  overview: string;
  genre_ids: number[];
}

export interface GenreCheckboxProps {
  id: number;
  name: string;
}

export interface MoviItemProps {
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  title: string;
  id: number;
}

export interface BookmarkButtonsProps {
  id: number;
}

export interface InfoTableProps {
  movieData: MovieData[];
}

export interface PassInputProps {
  password: string;
  setPassword: Dispatch<React.SetStateAction<string>>;
}

export interface LoginInputProps {
  login: string;
  setLogin: Dispatch<React.SetStateAction<string>>;
}
