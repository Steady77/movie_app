import { DEFAULT_PAGE_LIMIT } from 'utils/consts';

export const getPageCount = (totalItems: number, pageLimit = DEFAULT_PAGE_LIMIT) => {
  return Math.ceil(totalItems / pageLimit);
};
