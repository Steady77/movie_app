import { Box } from '@mui/material';
import { FC } from 'react';
import { useTypedSelector } from 'redux/store';
import ChooseGenre from './choose-genre';
import ChooseRating from './choose-rating';
import ChoosePopularity from './choose-popularity';
import Result from './result';

const questionsPages = [<ChooseGenre />, <ChooseRating />, <ChoosePopularity />, <Result />];

const SearchPage: FC = () => {
  const currentQuestion = useTypedSelector((state) => state.search.currentQuestion);

  return <Box sx={{ pt: '50px' }}>{questionsPages[currentQuestion]}</Box>;
};

export default SearchPage;
