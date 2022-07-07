import { Grid } from '@mui/material';
import MoviesList from 'pages/home/movies-list/movies-list';
import Sidebar from 'pages/home/sidebar/sidebar';

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
