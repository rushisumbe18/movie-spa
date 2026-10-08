import axios from 'axios';

// OMDb API Configuration
const API_KEY = 'b04f9ab6';
const BASE_URL = 'https://www.omdbapi.com/';

// Fetch trending/popular movies
export const getTrendingMovies = async () => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY,
                s: 'marvel',
                type: 'movie',
            },
        });
        return response.data.Search || [];
    } catch (error) {
        console.error('Error fetching trending movies:', error);
        return [];
    }
};

// Search movies by title
export const searchMovies = async (query) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY,
                s: query,
                type: 'movie',
            },
        });
        return response.data.Search || [];
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};

// Get movie details by IMDb ID
export const getMovieDetails = async (imdbID) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                apikey: API_KEY,
                i: imdbID,
                plot: 'full',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};