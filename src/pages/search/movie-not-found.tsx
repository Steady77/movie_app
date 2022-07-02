import { Typography } from '@mui/material';
import { FC } from 'react';

const MovieNotFound: FC = () => {
  return (
    <Typography
      sx={{ mb: '30px', fontWeight: 500 }}
      variant="h4"
      align="center"
    >
      Подходящих фильмов не найдено
    </Typography>
  );
};

export default MovieNotFound;
