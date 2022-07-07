import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { setCurrentQuestion, setCompiledMovies } from 'redux/search/searchSlice';
import { selectSearch } from 'redux/search/selectors';
import { useTypedDispatch, useTypedSelector } from 'hooks/redux';

const ChooseRating: FC = () => {
  const { currentQuestion, compiledMovies } = useTypedSelector(selectSearch);
  const dispatch = useTypedDispatch();

  const onClickHigh = () => {
    dispatch(setCompiledMovies(compiledMovies.filter((item) => item.vote_average > 5)));
    dispatch(setCurrentQuestion(currentQuestion + 1));
  };

  const onClickLow = () => {
    dispatch(setCompiledMovies(compiledMovies.filter((item) => item.vote_average < 5)));
    dispatch(setCurrentQuestion(currentQuestion + 1));
  };

  return (
    <Box sx={{ maxWidth: '400px', m: '0 auto' }}>
      <Typography
        sx={{ mb: '30px', fontWeight: 500 }}
        variant="h4"
        align="center"
      >
        Оценка фильма
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '150px', m: '0 auto' }}>
        <Button
          onClick={onClickHigh}
          variant="outlined"
          sx={{ mb: '15px' }}
        >
          Высокая
        </Button>
        <Button
          onClick={onClickLow}
          variant="outlined"
        >
          Низкая
        </Button>
      </Box>
    </Box>
  );
};

export default ChooseRating;
