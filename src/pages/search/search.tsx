import { Box } from '@mui/material';
import { FC } from 'react';
import ChooseGenre from './choose-genre';
import ChooseRating from './choose-rating';
import ChoosePopularity from './choose-popularity';
import Result from './result';
import { selectCurrentQuestion } from 'redux/search/selectors';
import { useTypedSelector } from 'hooks/redux';

const questionsPages = [<ChooseGenre />, <ChooseRating />, <ChoosePopularity />, <Result />];

const Search: FC = () => {
  const currentQuestion = useTypedSelector(selectCurrentQuestion);

  return <Box sx={{ pt: '50px' }}>{questionsPages[currentQuestion]}</Box>;
};

export default Search;
