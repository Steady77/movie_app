import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import Genres from './Genres';
import SortSelect from './SortSelect';
import YearSelect from './YearSelect';

const Filters: FC = () => {
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
