import { Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import MoviesList from './components/MovieList/MoviesList';
import Sidebar from './components/Sidebar/Sidebar';
import { setItems } from './redux/movies/actions';
import moviesData from './data/moviesData';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(moviesData));
  }, []);

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
