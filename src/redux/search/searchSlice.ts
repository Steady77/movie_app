import { MovieData } from 'types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './types';

const initialState: SearchState = {
  currentQuestion: 0,
  pageNum: 1,
  compiledMovies: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCurrentQuestion(state, action: PayloadAction<number>) {
      state.currentQuestion = action.payload;
    },
    setPageNum(state, action: PayloadAction<number>) {
      state.pageNum = action.payload;
    },
    setCompiledMovies(state, action: PayloadAction<MovieData[]>) {
      state.compiledMovies = action.payload;
    },
  },
});

export const { setCurrentQuestion, setPageNum, setCompiledMovies } = searchSlice.actions;

export default searchSlice.reducer;
