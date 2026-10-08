import React, { useState } from 'react';
import { searchMovies } from '../services/omdbApi';
import MovieCard from '../components/MovieCard';
import Loader from '../components/Loader';

function Search() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setSearched(true);
        const results = await searchMovies(query.trim());
        setMovies(results);
        setLoading(false);
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">🔍 Search Movies</h1>
                <p className="page-subtitle">Find any movie by title</p>
            </div>

            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter movie title..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

            {loading ? (
                <Loader />
            ) : searched && movies.length === 0 ? (
                <p className="empty-message">No movies found for "{query}"</p>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;