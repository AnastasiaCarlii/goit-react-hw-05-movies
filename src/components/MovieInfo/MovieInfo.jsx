import Loader from 'components/Loader/Loader';
import { useFetchMovieDetails } from 'hooks';

export const MovieInfo = ({ movieId }) => {
  const { movieDetails, isLoading, error } = useFetchMovieDetails(movieId);
  if (isLoading) return <Loader />;
  if (error) return <p> {error}</p>;
  if (!movieDetails)
    return <p>There is no information about this movie, sorry.</p>;
  const genreNames = movieDetails.genres.map(genre => genre.name);
  return (
    <div>
      {' '}
      <h1>{movieDetails.title}</h1>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      <p>{genreNames}</p>
    </div>
  );
};
