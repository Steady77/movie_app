import { getPageCount } from 'utils/helpers/math';
import { filterByGenre, filterByYear, paginate, sortByType } from '../../utils/helpers/array';
import { RootState } from '../store';

export const selectSortedAndPaginatedItems = (state: RootState) => {
  const { currentPage, pageLimit, year, sortType, items, genresIds } = state.movies;
  const { favoriteList, watchLaterList, currentBookmark } = state.bookmarks;

  let tempItems = [...items];

  if (currentBookmark === 'favorite') {
    tempItems = items.filter((item) => favoriteList.includes(item.id));
  }

  if (currentBookmark === 'later') {
    tempItems = items.filter((item) => watchLaterList.includes(item.id));
  }

  const filtred = filterByYear(tempItems, year);
  const sorted = sortByType(filtred, sortType);

  if (!genresIds.length) {
    return paginate(sorted, currentPage, pageLimit);
  } else {
    const genres = filterByGenre(sorted, genresIds);
    return paginate(genres, currentPage, pageLimit);
  }
};

export const selectTotalPages = (state: RootState) => {
  const { items, year, genresIds } = state.movies;
  const { favoriteList, watchLaterList, currentBookmark } = state.bookmarks;

  let tempItems = [...items];

  if (currentBookmark === 'favorite') {
    tempItems = items.filter((item) => favoriteList.includes(item.id));
  }

  if (currentBookmark === 'later') {
    tempItems = items.filter((item) => watchLaterList.includes(item.id));
  }

  if (!genresIds.length) {
    return getPageCount(filterByYear(tempItems, year).length);
  } else {
    return getPageCount(filterByGenre(filterByYear(tempItems, year), genresIds).length);
  }
};

export const selectMovies = (state: RootState) => state.movies.items;
