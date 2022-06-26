import { FormControl, MenuItem, Box, Select, SelectChangeEvent, InputLabel } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { loadPage, setSortBy } from '../../../redux/movies/actions';
import { useTypedSelector } from '../../../redux/store';

const SortSelect: FC = () => {
  const dispatch = useDispatch();
  const sortBy = useTypedSelector((state) => state.movies.sortBy);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSortBy(event.target.value));
    dispatch(loadPage(1));
  };
  return (
    <Box sx={{ minWidth: 120, mb: '25px' }}>
      <FormControl
        fullWidth
        size="small"
      >
        <InputLabel>Сортировать по:</InputLabel>
        <Select
          value={sortBy}
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
