import { FormControl, MenuItem, Box, Select, SelectChangeEvent, InputLabel } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setSortBy } from '../../../../redux/movies/actions';
import { useTypedSelector } from '../../../../redux/store';

const SortSelect: FC = () => {
  const dispatch = useDispatch();
  const sortType = useTypedSelector((state) => state.movies.sortType);

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
          <MenuItem value="popularDesc">Популярные по убыванию</MenuItem>
          <MenuItem value="popularAsc">Популярные по возрастанию</MenuItem>
          <MenuItem value="retingDesc">Рейтинг по убыванию</MenuItem>
          <MenuItem value="retingAsc">Рейтинг по возрастанию</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect;
