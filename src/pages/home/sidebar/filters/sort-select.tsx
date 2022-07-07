import { FormControl, MenuItem, Box, Select, SelectChangeEvent, InputLabel } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setSortBy } from 'redux/movies/actions';
import { selectSortType } from 'redux/movies/selectors';
import { useTypedSelector } from 'hooks/redux';
import { SORT_TYPE } from 'utils/consts';

const SortSelect: FC = () => {
  const dispatch = useDispatch();
  const sortType = useTypedSelector(selectSortType);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSortBy(event.target.value));
    dispatch(setCurrentPage(1));
  };
  return (
    <Box sx={{ minWidth: 120, mb: '25px' }}>
      <FormControl
        fullWidth
        size="small"
      >
        <InputLabel>Сортировать по:</InputLabel>
        <Select
          value={sortType}
          label="Сортировать по:"
          onChange={handleChange}
        >
          <MenuItem value={SORT_TYPE.POPULAR_DESC}>Популярные по убыванию</MenuItem>
          <MenuItem value={SORT_TYPE.POPULAR_ASC}>Популярные по возрастанию</MenuItem>
          <MenuItem value={SORT_TYPE.RATING_DESC}>Рейтинг по убыванию</MenuItem>
          <MenuItem value={SORT_TYPE.RATING_ASC}>Рейтинг по возрастанию</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect;
