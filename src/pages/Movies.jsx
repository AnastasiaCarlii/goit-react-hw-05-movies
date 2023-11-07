import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useFetchMoviesByQuery } from 'hooks';

const Movies = () => {
  const { movies, isLoading, error, onHandleSubmit } = useFetchMoviesByQuery();
  return (
    <>
      <SearchForm onSubmit={onHandleSubmit} />
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
export default Movies;
