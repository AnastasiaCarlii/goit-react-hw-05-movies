import { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/api';

export const useFetchMovieDetails = movieId => {
  const [movieDetails, setMovieDetails] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return { movieDetails, isLoading, error };
};
