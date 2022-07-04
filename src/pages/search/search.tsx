import { Box } from '@mui/material';
import { FC } from 'react';
import { useTypedSelector } from 'redux/store';
import ChooseGenre from './choose-genre';
import ChooseRating from './choose-rating';
import ChoosePopularity from './choose-popularity';
import Result from './result';
import { selectSearch } from 'redux/search/selectors';

const questionsPages = [<ChooseGenre />, <ChooseRating />, <ChoosePopularity />, <Result />];

const Search: FC = () => {
  const { currentQuestion } = useTypedSelector(selectSearch);

  return <Box sx={{ pt: '50px' }}>{questionsPages[currentQuestion]}</Box>;
};

export default Search;
