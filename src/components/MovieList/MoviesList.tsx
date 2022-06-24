import { Grid } from '@mui/material';
import { FC } from 'react';
import MovieItem from './MovieItem';

import { moviesData } from '../../data/moviesData';

const MoviesList: FC = () => {
  return (
    <Grid
      container
      spacing={3}
      columns={16}
    >
      {moviesData.map((item: any) => (
        <MovieItem
          key={item.id}
          {...item}
        />
      ))}
    </Grid>
  );
};

export default MoviesList;
