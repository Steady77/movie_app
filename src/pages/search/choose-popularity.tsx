import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentQuestion, setCompiledMovies } from 'redux/search/actions';
import { selectSearch } from 'redux/search/selectors';
import { useTypedSelector } from 'redux/store';

const ChoosePopularity: FC = () => {
  const { currentQuestion, compiledMovies } = useTypedSelector(selectSearch);
  const dispatch = useDispatch();

  const onClickPopular = () => {
    const filtred = compiledMovies.filter((item) => item.popularity > 100 && item.vote_count > 150);
    dispatch(setCompiledMovies(filtred));
    dispatch(setCurrentQuestion(currentQuestion + 1));
  };

  const onClickNotPopular = () => {
    const filtred = compiledMovies.filter((item) => item.popularity < 100 && item.vote_count < 150);
    dispatch(setCompiledMovies(filtred));
    dispatch(setCurrentQuestion(currentQuestion + 1));
  };

  return (
    <Box sx={{ maxWidth: '400px', m: '0 auto' }}>
      <Typography
        sx={{ mb: '30px', fontWeight: 500 }}
        variant="h4"
        align="center"
      >
        Популярный или неизвестный?
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '150px', m: '0 auto' }}>
        <Button
          onClick={onClickPopular}
          variant="outlined"
          sx={{ mb: '15px' }}
        >
          Популярный
        </Button>
        <Button
          onClick={onClickNotPopular}
          variant="outlined"
        >
          Неизвестный
        </Button>
      </Box>
    </Box>
  );
};

export default ChoosePopularity;
