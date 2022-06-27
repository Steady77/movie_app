import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { genresData } from '../../../data/genresData';
import { setCurrentPage, setGenresId } from '../../../redux/movies/actions';
import { useTypedSelector } from '../../../redux/store';

const Genres: FC = () => {
  const genresIds: number[] = useTypedSelector((state) => state.movies.genresIds);
  const dispatch = useDispatch();

  const handleCheckbox = (id: number) => {
    const currentIndex = genresIds.indexOf(id);
    const copyGenresIds = [...genresIds];

    if (currentIndex === -1) {
      copyGenresIds.push(id);
    } else {
      copyGenresIds.splice(currentIndex, 1);
    }

    dispatch(setGenresId(copyGenresIds));
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
              checked={genresIds.indexOf(item.id) === -1 ? false : true}
            />
          }
          label={item.name}
        />
      ))}
    </FormGroup>
  );
};

export default Genres;
