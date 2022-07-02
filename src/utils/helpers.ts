import { GenresData, MovieData } from './../types';
import { DEFAULT_PAGE_LIMIT } from './consts';

export const getPageCount = (totalItems: number, pageLimit = DEFAULT_PAGE_LIMIT) => {
  return Math.ceil(totalItems / pageLimit);
};

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

export const saveToStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const getFromStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeFromStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const toggleIdInArray = (array: number[], id: number) => {
  if (array.includes(id)) {
    return array.filter((item) => item !== id);
  } else {
    return [...array, id];
  }
};
