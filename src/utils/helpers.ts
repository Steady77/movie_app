export const getPageCount = (totalItems: number, pageLimit: number) => {
  return Math.ceil(totalItems / pageLimit);
};
