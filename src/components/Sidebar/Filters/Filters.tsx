import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setGenresId, setSortBy, setYear } from '../../../redux/movies/actions';
import { useTypedSelector } from '../../../redux/store';
import { DEFAULT_SORT_TYPE, DEFAULT_YEAR } from '../../../utils/consts';
import FavoriteSelect from './FavoriteSelect';
import Genres from './Genres';
import SortSelect from './SortSelect';
import YearSelect from './YearSelect';

const Filters: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useTypedSelector((state) => state.auth.isAuth);

  const clearFilters = () => {
    dispatch(setYear(DEFAULT_YEAR));
    dispatch(setSortBy(DEFAULT_SORT_TYPE));
    dispatch(setGenresId([]));
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
      {isAuth && <FavoriteSelect />}
      <Genres />
    </div>
  );
};

export default Filters;
