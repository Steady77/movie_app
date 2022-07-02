import { Grid } from '@mui/material';
import { FC } from 'react';
import MovieItem from './MovieItem';
import { useTypedSelector } from '../../../redux/store';
import { MovieData } from '../../../types';
import { selectSortedAndPaginatedItems } from 'redux/movies/selectors';

const MoviesList: FC = () => {
  const movies = useTypedSelector(selectSortedAndPaginatedItems);
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const { favoriteList, watchLaterList } = useTypedSelector((state) => state.bookmarks);

  return (
    <Grid
      container
      spacing={3}
      columns={16}
    >
      {movies &&
        movies.map((item: MovieData) => (
          <MovieItem
            favoriteList={favoriteList}
            watchLaterList={watchLaterList}
            isAuth={isAuth}
            key={item.id}
            {...item}
          />
        ))}
    </Grid>
  );
};

export default MoviesList;
