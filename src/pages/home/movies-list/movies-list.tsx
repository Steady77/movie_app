import { Grid } from '@mui/material';
import { FC } from 'react';
import MovieItem from './movie-item/movie-item';
import { useTypedSelector } from 'redux/store';
import { MovieData } from 'types';
import { selectCurrentPage, selectSortedMovies } from 'redux/movies/selectors';
import { DEFAULT_PAGE_LIMIT } from 'utils/consts';
import { paginate } from 'utils/helpers/array';

const MoviesList: FC = () => {
  const movies = useTypedSelector(selectSortedMovies);
  const currentPage = useTypedSelector(selectCurrentPage);

  const paginated = paginate(movies, currentPage, DEFAULT_PAGE_LIMIT);

  return (
    <Grid
      container
      spacing={3}
      columns={16}
    >
      {paginated &&
        paginated.map((item: MovieData) => (
          <MovieItem
            key={item.id}
            {...item}
          />
        ))}
    </Grid>
  );
};

export default MoviesList;
