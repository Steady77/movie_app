import { Box } from '@mui/material';
import { FC } from 'react';
import { selectSearch } from 'redux/search/selectors';
import { useTypedSelector } from 'redux/store';
import { paginate } from 'utils/helpers/array';
import MovieCard from './movie-card';
import MovieNotFound from './movie-not-found';

const Result: FC = () => {
  const { compiledMovies, pageNum } = useTypedSelector(selectSearch);

  const paginated = paginate(compiledMovies, pageNum, 1);
  const isEmpty = !compiledMovies.length || !paginated.length;

  if (isEmpty) {
    return <MovieNotFound />;
  }

  return (
    <Box sx={{ maxWidth: '800px', m: '0 auto' }}>
      {paginated.map((item) => (
        <MovieCard
          key={item.id}
          {...item}
        />
      ))}
    </Box>
  );
};

export default Result;
