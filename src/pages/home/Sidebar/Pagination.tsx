import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'redux/movies/actions';
import { selectCurrentPage, selectTotalPages } from 'redux/movies/selectors';
import { useTypedSelector } from 'redux/store';

const Pagination: FC = () => {
  const currentPage = useTypedSelector(selectCurrentPage);
  const totalPages = useTypedSelector(selectTotalPages);
  const dispatch = useDispatch();

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px' }}>
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
