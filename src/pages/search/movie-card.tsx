import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { genresData } from 'data/genresData';
import { getGenresNameById } from 'utils/helpers/array';
import { setPageNum } from 'redux/search/actions';
import { useTypedSelector } from 'redux/store';
import { MovieCardProps } from 'types';
import { selectSearch } from 'redux/search/selectors';

const MovieCard: FC<MovieCardProps> = ({
  poster_path,
  backdrop_path,
  title,
  id,
  genre_ids,
  overview,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pageNum } = useTypedSelector(selectSearch);
  const imagePath = poster_path || backdrop_path;

  const onClickSuited = () => {
    navigate(`${id}`);
    dispatch(setPageNum(1));
  };

  const onClickReject = () => {
    dispatch(setPageNum(pageNum + 1));
  };

  const genres = getGenresNameById(genresData, genre_ids);

  return (
    <Box>
      <Grid
        container
        spacing={8}
        sx={{ pb: '30px' }}
      >
        <Grid
          item
          xs={5}
        >
          <img
            width={300}
            src={`https://image.tmdb.org/t/p/w500${imagePath}`}
            alt="poster"
          />
        </Grid>
        <Grid
          item
          xs={7}
        >
          <Typography
            variant="h4"
            gutterBottom
          >
            {title}
          </Typography>

          <Typography
            sx={{ mb: '20px' }}
            variant="body1"
          >
            {overview}
          </Typography>
          <Typography
            sx={{ fontWeight: 500 }}
            variant="body1"
          >
            Жанр: {genres}
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px', m: '0 auto' }}
      >
        <Button
          onClick={onClickSuited}
          variant="outlined"
        >
          Подходит
        </Button>
        <Button
          onClick={onClickReject}
          variant="outlined"
        >
          Не подходит
        </Button>
      </Box>
    </Box>
  );
};

export default MovieCard;
