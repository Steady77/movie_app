import { RootState } from 'redux/store';

export const selectSearch = (state: RootState) => state.search;
export const selectCurrentQuestion = (state: RootState) => state.search.currentQuestion;
export const selectPageNum = (state: RootState) => state.search.pageNum;
