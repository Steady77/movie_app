import { MovieData } from './../types';
export const getPageCount = (totalItems: number, pageLimit = 10) => {
  return Math.ceil(totalItems / pageLimit);
};

export const filterByYear = (array: MovieData[], year: number) => {
  return array.filter((item) => new Date(item.release_date).getFullYear() === year);
};

export const sortBy = (array: MovieData[], type: string) => {
  switch (type) {
    case 'popularDesc':
      return array.sort((a, b) => b.popularity - a.popularity);
    case 'popularAsc':
      return array.sort((a, b) => a.popularity - b.popularity);
    case 'retingDesc':
      return array.sort((a, b) => b.vote_average - a.vote_average);
    case 'retingAsc':
      return array.sort((a, b) => a.vote_average - b.vote_average);
    default:
      return array;
  }
};
