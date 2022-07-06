import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setGenresId } from 'redux/movies/actions';
import { selectGenresIds } from 'redux/movies/selectors';
import { useTypedSelector } from 'redux/store';
import { GenreCheckboxProps } from 'types';
import { toggleIdInArray } from 'utils/helpers/array';

const GenreCheckbox: FC<GenreCheckboxProps> = ({ id, name }) => {
  const genresIds = useTypedSelector(selectGenresIds);
  const dispatch = useDispatch();

  const isChecked = genresIds.includes(id);

  const handleCheckbox = () => {
    dispatch(setGenresId(toggleIdInArray(genresIds, id)));
    dispatch(setCurrentPage(1));
  };

  return (
    <FormControlLabel
      key={id}
      sx={{ mb: '-12px' }}
      control={
        <Checkbox
          onChange={handleCheckbox}
          size="small"
          checked={isChecked}
        />
      }
      label={name}
    />
  );
};

export default GenreCheckbox;
