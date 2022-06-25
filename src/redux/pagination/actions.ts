export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE';

export const setCurrentPage = (page: number) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setTotalPage = (count: number) => ({
  type: SET_TOTAL_PAGE,
  payload: count,
});
