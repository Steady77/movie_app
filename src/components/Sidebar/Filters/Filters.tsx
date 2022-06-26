import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { loadPage, setSortBy, setYear } from '../../../redux/movies/actions';
import { DEFAULT_SORT_BY, DEFAULT_YEAR } from '../../../utils/consts';
import Genres from './Genres';
import SortSelect from './SortSelect';
import YearSelect from './YearSelect';

const Filters: FC = () => {
  const dispatch = useDispatch();

  const clearFilters = () => {
    dispatch(setYear(DEFAULT_YEAR));
    dispatch(setSortBy(DEFAULT_SORT_BY));
    dispatch(loadPage(1));
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
      <Genres />
    </div>
  );
};

export default Filters;
