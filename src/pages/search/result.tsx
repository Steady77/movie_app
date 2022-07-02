import { Box } from '@mui/material';
import { FC } from 'react';
import { useTypedSelector } from 'redux/store';
import { paginate } from 'utils/helpers';
import MovieCard from './card';
import MovieNotFound from './movie-not-found';

const Result: FC = () => {
  const { compiledMovies, pageNum } = useTypedSelector((state) => state.search);

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
