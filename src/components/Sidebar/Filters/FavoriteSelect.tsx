import { FormControl, MenuItem, Box, Select, SelectChangeEvent, InputLabel } from '@mui/material';
import { FC, useState } from 'react';

const FavoriteSelect: FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, mb: '15px' }}>
      <FormControl
        fullWidth
        size="small"
      >
        <InputLabel>Показать:</InputLabel>
        <Select
          value={value}
          label="Показать:"
          onChange={handleChange}
        >
          <MenuItem value="favorite">Избранные</MenuItem>
          <MenuItem value="later">Смотреть позже</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FavoriteSelect;
