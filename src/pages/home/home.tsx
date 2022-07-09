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
        xs
        sm
        md={4}
        lg={3}
        xl={3}
      >
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        lg={9}
        xl={9}
      >
        <MoviesList />
      </Grid>
    </Grid>
  );
};

export default Home;
