export type PaginationActionType = {
  type: string;
  payload: number;
};

export interface PaginationState {
  currentPage: number;
  pageLimit: number;
  totalPages: number;
}
