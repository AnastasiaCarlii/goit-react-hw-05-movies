import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getTrendingMovies();
      if (result.error) {
        setError(result.error);
      } else {
        setTrendingMovies(result.results);
      }
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>{error}</p>}
      {trendingMovies.length > 0 ? (
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>No trending movies found.</p>
      )}
    </div>
  );
};
export default Home;
