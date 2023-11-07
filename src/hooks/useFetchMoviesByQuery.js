import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api';

export const useFetchMoviesByQuery = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoadind] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('q');
    if (!query) {
      return;
    }
    setIsLoadind(true);
    const fetchData = async () => {
      try {
        const data = await getMoviesByQuery(query);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoadind(false);
      }
    };
    fetchData();
  }, [searchParams]);
  const onHandleSubmit = value => {
    setSearchParams({ q: value });
  };

  return { movies, isLoading, error, onHandleSubmit };
};
