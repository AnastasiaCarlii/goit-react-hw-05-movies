import Loader from 'components/Loader/Loader';
import { useFetchMovieDetails } from 'hooks';

export const MovieInfo = ({ movieId }) => {
  const { movieDetails, isLoading, error } = useFetchMovieDetails(movieId);
  if (isLoading) return <Loader />;
  if (error) return <p> {error}</p>;
  if (!movieDetails)
    return <p>There is no information about this movie, sorry.</p>;
  return (
    <div>
      {' '}
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
    </div>
  );
};
