import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { toggleIdInArray } from 'utils/helpers/array';
import { genresData } from 'data/genresData';
import { setCurrentPage, setGenresId } from 'redux/movies/actions';
import { useTypedSelector } from 'redux/store';
import { selectMovies } from 'redux/movies/selectors';

const Genres: FC = () => {
  const { genresIds } = useTypedSelector(selectMovies);
  const dispatch = useDispatch();

  const handleCheckbox = (id: number) => {
    dispatch(setGenresId(toggleIdInArray(genresIds, id)));
    dispatch(setCurrentPage(1));
  };

  return (
    <FormGroup>
      {genresData.map((item) => (
        <FormControlLabel
          key={item.id}
          sx={{ mb: '-12px' }}
          control={
            <Checkbox
              onChange={() => handleCheckbox(item.id)}
              size="small"
              checked={genresIds.includes(item.id)}
            />
          }
          label={item.name}
        />
      ))}
    </FormGroup>
  );
};

export default Genres;
