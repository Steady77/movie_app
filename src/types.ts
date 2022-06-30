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

export interface LoginFormProps {
  handleClose: () => void;
}

export interface MoviItemProps {
  isAuth: boolean;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  title: string;
}
