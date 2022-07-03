import { SORT_TYPE } from 'utils/consts';
import { GenresData, MovieData } from '../../types';

export const filterByYear = (array: MovieData[], year: number) => {
  return array.filter((item) => new Date(item.release_date).getFullYear() === year);
};

export const paginate = (array: MovieData[], currentPage: number, pageLimit: number) => {
  const lastIndex = currentPage * pageLimit;
  const firstIndex = lastIndex - pageLimit;
  return array.slice(firstIndex, lastIndex);
};

export const filterByGenre = (array: MovieData[], genresIds: number[]) => {
  return array.filter((item) => item.genre_ids.some((elem) => genresIds.includes(elem)));
};

export const getGenresNameById = (array: GenresData[], genresIds: number[]) => {
  return array
    .filter((item) => genresIds.includes(item.id))
    .map((item) => item.name)
    .join(', ');
};

export const sortByType = (array: MovieData[], type: string) => {
  switch (type) {
    case SORT_TYPE.POPULAR_DESC:
      return array.sort((a, b) => b.popularity - a.popularity);
    case SORT_TYPE.POPULAR_ASC:
      return array.sort((a, b) => a.popularity - b.popularity);
    case SORT_TYPE.RATING_DESC:
      return array.sort((a, b) => b.vote_average - a.vote_average);
    case SORT_TYPE.RATING_ASC:
      return array.sort((a, b) => a.vote_average - b.vote_average);
    default:
      return array;
  }
};

export const toggleIdInArray = (array: number[], id: number) => {
  if (array.includes(id)) {
    return array.filter((item) => item !== id);
  } else {
    return [...array, id];
  }
};
