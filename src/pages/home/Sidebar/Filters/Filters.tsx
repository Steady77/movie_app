import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentBookmark } from 'redux/bookmarks/actions';
import { resetFilters } from 'redux/movies/actions';
import BookmarksSelect from './bookmarks-select';
import Genres from './genres/genres';

import SortSelect from './sort-select';
import YearSelect from './year-select';

const Filters: FC = () => {
  const dispatch = useDispatch();

  const clearFilters = () => {
    dispatch(resetFilters());
    dispatch(setCurrentBookmark(''));
  };

  return (
    <div>
      <Typography
        sx={{ fontWeight: '500', mb: '20px' }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Фильтры:
      </Typography>
      <Button
        onClick={clearFilters}
        variant="contained"
        sx={{
          color: '#fff',
          background: '#000',
          textTransform: 'none',
          fontSize: '16px',
          mb: '26px',
          width: '100%',
        }}
      >
        Сбросить все фильтры
      </Button>
      <SortSelect />
      <YearSelect />
      <BookmarksSelect />
      <Genres />
    </div>
  );
};

export default Filters;
