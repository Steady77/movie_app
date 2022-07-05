import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from 'redux/movies/actions';
import { Route, Routes } from 'react-router-dom';
import MovieInfo from 'pages/movie-info/movie-info';
import Search from 'pages/search/search';
import Home from 'pages/home/home';
import Layout from 'pages/layout';

import moviesData from 'data/moviesData';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItems(moviesData));
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
          path="search/:id"
          element={<MovieInfo />}
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
