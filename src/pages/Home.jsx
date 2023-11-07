import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useFetchTrendingMovies } from 'hooks';

import React from 'react';

const Home = () => {
  const { movies, isLoading, error } = useFetchTrendingMovies();

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
