import { Grid } from '@mui/material';
import { FC } from 'react';
import MovieItem from './movie-item/movie-item';
import { useTypedSelector } from 'redux/store';
import { MovieData } from 'types';
import { selectSortedAndPaginatedMovies } from 'redux/movies/selectors';

const MoviesList: FC = () => {
  const movies = useTypedSelector(selectSortedAndPaginatedMovies);

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
