import { selectMoviesByBookmark } from './../bookmarks/selectors';
import { filterByGenre, filterByYear, sortByType } from 'utils/helpers/array';
import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectMovieItems = (state: RootState) => state.movies.items;
export const selectGenresIds = (state: RootState) => state.movies.genresIds;
export const selectSortType = (state: RootState) => state.movies.sortType;
export const selectYear = (state: RootState) => state.movies.year;
export const selectFindValue = (state: RootState) => state.movies.findValue;
export const selectCurrentPage = (state: RootState) => state.movies.currentPage;

export const selectSortedMovies = createSelector(
  [
    selectMoviesByBookmark,
    selectYear,
    selectSortType,
    selectGenresIds,
    selectFindValue,
    selectMovieItems,
  ],
  (movieByBookmark, year, sortType, genresIds, findValue, items) => {
    if (findValue) {
      return items.filter((item) => item.title.toLowerCase().includes(findValue.toLowerCase()));
    }

    const filtred = filterByYear(movieByBookmark, year);
    const sorted = sortByType(filtred, sortType);

    if (!genresIds.length) {
      return sorted;
    } else {
      return filterByGenre(sorted, genresIds);
    }
  },
);
