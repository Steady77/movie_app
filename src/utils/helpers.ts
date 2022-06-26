export const getPageCount = (totalItems: number, pageLimit = 10) => {
  return Math.ceil(totalItems / pageLimit);
};
