import { CastInfo } from 'components/CastInfo/CastInfo';
import Loader from 'components/Loader/Loader';
import { useFetchMoviesCast } from 'hooks';

const Cast = () => {
  const { cast, isLoading, error } = useFetchMoviesCast();

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong, Sorry</p>}
      <CastInfo cast={cast} />
    </>
  );
};

export default Cast;
