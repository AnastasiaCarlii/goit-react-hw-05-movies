import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  // console.log(movieId);
  return <MovieInfo movieId={movieId} />;
};

export default MovieDetails;
