import { Box, TextField } from '@mui/material';
import { useTypedDispatch } from 'hooks/redux';
import { ChangeEvent, FC, useState } from 'react';
import { setFindValue } from 'redux/movies/moviesSlice';

const FindMovie: FC = () => {
  const dispatch = useTypedDispatch();
  const [value, setValue] = useState('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(setFindValue(e.target.value));
  };

  return (
    <Box sx={{ p: '0 5px' }}>
      <TextField
        sx={{ background: '#FFF' }}
        value={value}
        onChange={onChangeInput}
        variant="outlined"
        placeholder="Поиск"
        size="small"
        margin="dense"
      />
    </Box>
  );
};

export default FindMovie;
