import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { FC } from 'react';
import { genresData } from '../../../data/genresData';

const Genres: FC = () => {
  return (
    <FormGroup>
      {genresData.map((item) => (
        <FormControlLabel
          key={item.id}
          sx={{ mb: '-12px' }}
          control={<Checkbox size="small" />}
          label={item.name}
        />
      ))}
    </FormGroup>
  );
};

export default Genres;
