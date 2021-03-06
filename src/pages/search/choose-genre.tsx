import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useTypedDispatch, useTypedSelector } from 'hooks/redux';
import { genresData } from 'data/genresData';
import { filterByGenre } from 'utils/helpers/array';
import { setCurrentQuestion, setCompiledMovies } from 'redux/search/searchSlice';
import { selectMovieItems } from 'redux/movies/selectors';
import { selectCurrentQuestion } from 'redux/search/selectors';

const ChooseGenre: FC = () => {
  const items = useTypedSelector(selectMovieItems);
  const currentQuestion = useTypedSelector(selectCurrentQuestion);
  const dispatch = useTypedDispatch();

  const onClickButton = (id: number) => {
    dispatch(setCompiledMovies(filterByGenre(items, [id])));
    dispatch(setCurrentQuestion(currentQuestion + 1));
  };

  return (
    <Box sx={{ maxWidth: '900px', m: '0 auto' }}>
      <Typography
        sx={{ mb: '30px', fontWeight: 500 }}
        variant="h4"
        align="center"
      >
        Выберите жанр
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {genresData.map((item) => (
          <Button
            key={item.id}
            onClick={() => onClickButton(item.id)}
            sx={{ flex: '0 200px', mb: '20px', mr: '5px' }}
            variant="outlined"
          >
            {item.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ChooseGenre;
