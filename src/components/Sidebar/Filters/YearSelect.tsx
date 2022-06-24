import {
  FormControl,
  MenuItem,
  Box,
  Select,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';
import { FC, useState } from 'react';

const YearSelect: FC = () => {
  const [year, setYear] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120, mb: '15px' }}>
      <FormControl
        fullWidth
        size="small"
      >
        <InputLabel>Год релиза:</InputLabel>
        <Select
          value={year}
          label="Год релиза:"
          onChange={handleChange}
        >
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
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
