const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrending = async (mediaType = 'movie') => {
  const response = await fetch(
    `${BASE_URL}/trending/${mediaType}/week?api_key=${API_KEY}`
  );
  return response.json();
};

export const fetchPopular = async (mediaType = 'movie') => {
  const response = await fetch(
    `${BASE_URL}/${mediaType}/popular?api_key=${API_KEY}`
  );
  return response.json();
};

export const fetchTopRated = async (mediaType = 'movie') => {
  const response = await fetch(
    `${BASE_URL}/${mediaType}/top_rated?api_key=${API_KEY}`
  );
  return response.json();
};
