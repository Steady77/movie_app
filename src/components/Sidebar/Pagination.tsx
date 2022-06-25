import { Box, Button, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { data } from '../../data/movieDataAll';
import { setItems } from '../../redux/movies/actions';
import { setCurrentPage, setTotalPage } from '../../redux/pagination/actions';
import { useTypedSelector } from '../../redux/store';
import { getPageCount } from '../../utils/helpers';

const Pagination: FC = () => {
  const { currentPage, pageLimit, totalPages } = useTypedSelector(
    (state) => state.pagination,
  );
  const dispatch = useDispatch();

  const lastIndex = currentPage * pageLimit;
  const firstIndex = lastIndex - pageLimit;

  const sliced = data.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(setTotalPage(getPageCount(data.length, pageLimit)));
    dispatch(setItems(sliced));
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage !== totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px' }}
      >
        <Button
          disabled={currentPage === 1 ? true : false}
          onClick={prevPage}
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            fontSize: '16px',

            p: '5px 25px',
          }}
        >
          Назад
        </Button>
        <Button
          disabled={currentPage === totalPages ? true : false}
          onClick={nextPage}
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            fontSize: '16px',

            p: '5px 25px',
          }}
        >
          Вперед
        </Button>
      </Box>
      <Typography
        align="center"
        mt="15px"
      >
        {currentPage} of {totalPages}
      </Typography>
    </>
  );
};

export default Pagination;
