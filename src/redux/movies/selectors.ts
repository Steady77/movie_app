import {
  filterByGenre,
  filterByYear,
  getPageCount,
  paginate,
  sortByType,
} from '../../utils/helpers';
import { RootState } from '../store';

export const selectSortedAndPaginatedItems = (state: RootState) => {
  const { currentPage, pageLimit, year, sortType, items, genresIds } = state.movies;

  const lastIndex = currentPage * pageLimit;
  const firstIndex = lastIndex - pageLimit;

  const filtred = filterByYear(items, year);
  const sorted = sortByType(filtred, sortType);

  if (!genresIds.length) {
    return paginate(sorted, firstIndex, lastIndex);
  } else {
    const genres = filterByGenre(sorted, genresIds);
    return paginate(genres, firstIndex, lastIndex);
  }
};

export const selectTotalPages = (state: RootState) => {
  const { items, year, genresIds } = state.movies;

  if (!genresIds.length) {
    return getPageCount(filterByYear(items, year).length);
  } else {
    return getPageCount(filterByGenre(filterByYear(items, year), genresIds).length);
  }
};
