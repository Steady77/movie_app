import { FormControl, MenuItem, Box, Select, SelectChangeEvent, InputLabel } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setYear, setCurrentPage } from 'redux/movies/moviesSlice';
import { selectYear } from 'redux/movies/selectors';
import { useTypedSelector } from 'hooks/redux';

const YearSelect: FC = () => {
  const dispatch = useDispatch();
  const year = useTypedSelector(selectYear);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setYear(Number(event.target.value)));
    dispatch(setCurrentPage(1));
  };

  return (
    <Box sx={{ minWidth: 120, mb: '25px' }}>
      <FormControl
        fullWidth
        size="small"
      >
        <InputLabel>Год релиза:</InputLabel>
        <Select
          value={String(year)}
          label="Год релиза:"
          onChange={handleChange}
        >
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default YearSelect;
