import axios from 'axios';
const API_KEY = '22a5ac0887c10804847656f832680839';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return { error: 'Error fetching trending movies. Please try again later.' };
  }
};
