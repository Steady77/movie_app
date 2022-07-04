import { Box, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { selectMovieItems } from 'redux/movies/selectors';
import { useTypedSelector } from 'redux/store';
import { MovieData } from 'types';
import InfoTable from './Info-table';

const MovieInfo = () => {
  const { id } = useParams();
  const items = useTypedSelector(selectMovieItems);
  const movieData: MovieData[] = items.filter((item) => item.id === Number(id));

  if (!movieData.length) {
    return <div>Loading...</div>;
  }

  const { poster_path, backdrop_path, title, overview, vote_average } = movieData[0];

  const imagePath = poster_path || backdrop_path;

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 84px)',
        p: '24px 50px',
        background: `linear-gradient(to left top, rgba(0,10,20,0.95), rgba(0,10,20,0.85) ), url(https://image.tmdb.org/t/p/w500${imagePath})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
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
            width={370}
            src={`https://image.tmdb.org/t/p/w500${imagePath}`}
            alt="poster"
          />
        </Grid>
        <Grid
          item
          xs={7}
          sx={{ color: '#fff' }}
        >
          <Typography
            variant="h3"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="body1">Рейтинг: {vote_average}</Typography>
          <Typography variant="body1">{overview}</Typography>
        </Grid>
      </Grid>
      <InfoTable movieData={movieData} />
    </Box>
  );
};

export default MovieInfo;
