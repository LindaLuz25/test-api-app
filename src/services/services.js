import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

// Helper function to fetch data
const fetchFromAPI = async (endpoint) => {
  try {
    let config = {
      params: {
        api_key: API_KEY
      }
    }
    const response = await axios.get(`${BASE_URL}${endpoint}`, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from TMDB:', error);
    throw error;
  }
};

// Fetch popular movies
export const getPopularMovies = async () => {
  return fetchFromAPI('/movie/popular');
};

// Fetch top-rated movies
export const getTopRatedMovies = async () => {
  return fetchFromAPI('/movie/top_rated');
};

export const getUpcomingMovies = async () => {
  return fetchFromAPI('/movie/upcoming');
}

// Fetch movie details by ID
export const getMovieDetails = async (movieId) => {
  return fetchFromAPI(`/movie/${movieId}`);
};

// Fetch movies by search query
export const searchMovies = async (query) => {
  return fetchFromAPI(`/search/movie?query=${query}`);
};
