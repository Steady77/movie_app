import {
  FormControl,
  MenuItem,
  Box,
  Select,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';
import { FC, useState } from 'react';

const SortSelect: FC = () => {
  const [popular, setPopular] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPopular(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120, mb: '25px' }}>
      <FormControl
        fullWidth
        size="small"
      >
        <InputLabel>Сортировать по:</InputLabel>
        <Select
          value={popular}
          label="Сортировать по:"
          onChange={handleChange}
        >
          <MenuItem value={10}>Популярные по убыванию</MenuItem>
          <MenuItem value={20}>Популярные по возрастанию</MenuItem>
          <MenuItem value={30}>Рейтинг по убыванию</MenuItem>
          <MenuItem value={40}>Рейтинг по возрастанию</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect;
