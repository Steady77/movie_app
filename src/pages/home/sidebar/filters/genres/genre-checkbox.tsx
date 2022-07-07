import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage, setGenresId } from 'redux/movies/moviesSlice';
import { useTypedSelector } from 'hooks/redux';
import { GenreCheckboxProps } from 'types';

const GenreCheckbox: FC<GenreCheckboxProps> = ({ id, name }) => {
  const dispatch = useDispatch();
  const isChecked = useTypedSelector((state) => state.movies.genresIds.includes(id));

  const handleCheckbox = () => {
    dispatch(setGenresId(id));
    dispatch(setCurrentPage(1));
  };

  return (
    <FormControlLabel
      sx={{ mb: '-12px' }}
      onChange={handleCheckbox}
      checked={isChecked}
      control={<Checkbox size="small" />}
      label={name}
    />
  );
};

export default GenreCheckbox;
