import { Grid } from '@mui/material';
import { FC } from 'react';
import MovieItem from './MovieItem';
import { useTypedSelector } from '../../redux/store';

const MoviesList: FC = () => {
  const movies = useTypedSelector((state) => state.movies.items);

  return (
    <Grid
      container
      spacing={3}
      columns={16}
    >
      {movies.map((item: any) => (
        <MovieItem
          key={item.id}
          {...item}
        />
      ))}
    </Grid>
  );
};

export default MoviesList;
