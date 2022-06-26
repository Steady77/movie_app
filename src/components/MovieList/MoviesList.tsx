import { Grid } from '@mui/material';
import { FC } from 'react';
import MovieItem from './MovieItem';
import { useTypedSelector } from '../../redux/store';
import { MovieData } from '../../types';

const MoviesList: FC = () => {
  const movies = useTypedSelector((state) => state.movies.sortedItems);

  return (
    <Grid
      container
      spacing={3}
      columns={16}
    >
      {movies &&
        movies.map((item: MovieData) => (
          <MovieItem
            key={item.id}
            {...item}
          />
        ))}
    </Grid>
  );
};

export default MoviesList;
