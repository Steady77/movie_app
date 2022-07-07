import { MovieData } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toggleIdInArray } from 'utils/helpers/array';
import { DEFAULT_PAGE_LIMIT, DEFAULT_SORT_TYPE, DEFAULT_YEAR } from 'utils/consts';
import { MovieState } from './types';

const initialState: MovieState = {
  items: [],
  year: DEFAULT_YEAR,
  currentPage: 1,
  pageLimit: DEFAULT_PAGE_LIMIT,
  sortType: DEFAULT_SORT_TYPE,
  genresIds: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<MovieData[]>) {
      state.items = action.payload;
    },
    setYear(state, action: PayloadAction<number>) {
      state.year = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setGenresId(state, action: PayloadAction<number>) {
      state.genresIds = toggleIdInArray(state.genresIds, action.payload);
    },
    resetFilters(state) {
      state.year = DEFAULT_YEAR;
      state.pageLimit = DEFAULT_PAGE_LIMIT;
      state.sortType = DEFAULT_SORT_TYPE;
      state.genresIds = [];
    },
  },
});

export const { setItems, setYear, setSortBy, setCurrentPage, setGenresId, resetFilters } =
  moviesSlice.actions;

export default moviesSlice.reducer;
