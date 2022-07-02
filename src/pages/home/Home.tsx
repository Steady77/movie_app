import { Grid } from '@mui/material';
import MoviesList from 'pages/home/MovieList/MoviesList';
import Sidebar from 'pages/home/Sidebar/Sidebar';

const Home = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ paddingLeft: '24px' }}
    >
      <Grid
        item
        xs={3}
      >
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={9}
      >
        <MoviesList />
      </Grid>
    </Grid>
  );
};

export default Home;
