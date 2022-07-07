import { useEffect } from 'react';
import { setItems } from 'redux/movies/moviesSlice';
import { Route, Routes } from 'react-router-dom';
import MovieInfo from 'pages/movie-info/movie-info';
import Search from 'pages/search/search';
import Home from 'pages/home/home';
import Layout from 'pages/layout';
import { useTypedDispatch } from 'hooks/redux';
import { moviesData } from 'data/moviesData';
import { MovieData } from 'types';

function App() {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(setItems(moviesData as MovieData[]));
  }, [dispatch]);

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
          element={<Search />}
        />
        <Route
          path="movie/:id"
          element={<MovieInfo />}
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
