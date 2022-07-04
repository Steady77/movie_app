import { FC } from 'react';
import { genresData } from 'data/genresData';
import GenreCheckbox from './genre-checkbox';
import { FormGroup } from '@mui/material';

const Genres: FC = () => {
  return (
    <FormGroup>
      {genresData.map((item) => (
        <GenreCheckbox
          key={item.id}
          {...item}
        />
      ))}
    </FormGroup>
  );
};

export default Genres;
