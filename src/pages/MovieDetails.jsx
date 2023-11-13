import Loader from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useFetchMovieDetails } from 'hooks';
import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { movieDetails, isLoading, error } = useFetchMovieDetails();
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? '/');

  return (
    <>
      <Link to={goBack.current}>
        <button>Go Back</button>
      </Link>
      {isLoading && <Loader />}
      {error && <p>Something went wrong</p>}
      {movieDetails && <MovieInfo movieDetails={movieDetails} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
