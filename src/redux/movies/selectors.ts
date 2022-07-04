import { getPageCount } from 'utils/helpers/math';
import {
  filterByBookmark,
  filterByGenre,
  filterByYear,
  paginate,
  sortByType,
} from 'utils/helpers/array';
import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import { selectBookmarks } from 'redux/bookmarks/selectors';

export const selectMovies = (state: RootState) => state.movies;
export const selectGenresIds = (state: RootState) => state.movies.genresIds;
export const selectSortType = (state: RootState) => state.movies.sortType;
export const selectYear = (state: RootState) => state.movies.year;
export const selectMovieItems = (state: RootState) => state.movies.items;
export const selectCurrentPage = (state: RootState) => state.movies.currentPage;

export const selectSortedAndPaginatedMovies = createSelector(
  [selectMovies, selectBookmarks],
  (movies, bookmarks) => {
    const { currentPage, pageLimit, year, sortType, items, genresIds } = movies;
    const { favoriteList, watchLaterList, currentBookmark } = bookmarks;

    const tempItems = filterByBookmark(items, currentBookmark, favoriteList, watchLaterList);

    const filtred = filterByYear(tempItems, year);
    const sorted = sortByType(filtred, sortType);

    if (!genresIds.length) {
      return paginate(sorted, currentPage, pageLimit);
    } else {
      const genres = filterByGenre(sorted, genresIds);
      return paginate(genres, currentPage, pageLimit);
    }
  },
);

export const selectTotalPages = createSelector(
  [selectMovies, selectBookmarks],
  (movies, bookmarks) => {
    const { items, year, genresIds } = movies;
    const { favoriteList, watchLaterList, currentBookmark } = bookmarks;

    const tempItems = filterByBookmark(items, currentBookmark, favoriteList, watchLaterList);

    if (!genresIds.length) {
      return getPageCount(filterByYear(tempItems, year).length);
    } else {
      return getPageCount(filterByGenre(filterByYear(tempItems, year), genresIds).length);
    }
  },
);
