import axios from 'axios';
const API_KEY = '22a5ac0887c10804847656f832680839';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data.results;
};

export const getMoviesByQuery = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}&include_adult=true`
  );
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getCast = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};
