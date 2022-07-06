import { FC } from 'react';
import { genresData } from 'data/genresData';
import GenreCheckbox from './genre-checkbox';
import { FormGroup } from '@mui/material';

const Genres: FC = () => {
  return (
    <FormGroup>
      <>
        {genresData.map((item) => (
          <GenreCheckbox
            key={item.id}
            id={item.id}
            name={item.name}
          />
        ))}
      </>
    </FormGroup>
  );
};

export default Genres;
