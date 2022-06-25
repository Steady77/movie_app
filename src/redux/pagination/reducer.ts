import { SET_CURRENT_PAGE, SET_TOTAL_PAGE } from './actions';
import { PaginationActionType, PaginationState } from './types';

const initialState: PaginationState = {
  currentPage: 1,
  pageLimit: 10,
  totalPages: 0,
};

export const pagination = (
  state = initialState,
  action: PaginationActionType,
) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_PAGE:
      return {
        ...state,
        totalPages: action.payload,
      };
    default:
      return state;
  }
};
