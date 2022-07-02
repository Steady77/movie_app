import { Box, Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useTypedSelector } from 'redux/store';
import { genresData } from 'data/genresData';
import { filterByGenre } from 'utils/helpers';
import { useDispatch } from 'react-redux';
import { setCurrentQuestion, setCompiledMovies } from 'redux/search/actions';

const ChooseGenre: FC = () => {
  const items = useTypedSelector((state) => state.movies.items);
  const currentQuestion = useTypedSelector((state) => state.search.currentQuestion);
  const dispatch = useDispatch();

  const onClickButton = (id: number) => {
    dispatch(setCompiledMovies(filterByGenre(items, [id])));
    dispatch(setCurrentQuestion(currentQuestion + 1));
  };

  return (
    <Box sx={{ maxWidth: '800px', m: '0 auto' }}>
      <Typography
        sx={{ mb: '30px', fontWeight: 500 }}
        variant="h4"
        align="center"
      >
        Выберите жанр
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {genresData.map((item) => (
          <Button
            key={item.id}
            onClick={() => onClickButton(item.id)}
            sx={{ flex: '0 32%', mb: '20px' }}
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
