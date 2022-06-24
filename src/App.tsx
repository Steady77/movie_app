import { Container, Grid } from '@mui/material';
import Header from './components/Header';
import MoviesList from './components/MovieList/MoviesList';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header />
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
      </Container>
    </div>
  );
}

export default App;
