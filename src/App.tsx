import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from './redux/movies/actions';
import moviesData from './data/moviesData';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/home/Home';
import MovieInfoPage from 'pages/movie/MovieInfoPage';
import Layout from 'pages/Layout';
import SearchPage from 'pages/search/search-page';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(moviesData));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="search"
          element={<SearchPage />}
        />
        <Route
          path="search/:id"
          element={<MovieInfoPage />}
        />
        <Route
          path="movie/:id"
          element={<MovieInfoPage />}
        />
        <Route
          path="*"
          element={<h1>Page not found</h1>}
        />
      </Route>
    </Routes>
  );
}

export default App;
