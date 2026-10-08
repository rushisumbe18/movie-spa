import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/omdbApi';
import MovieCard from '../components/MovieCard';
import Loader from '../components/Loader';

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            const data = await getTrendingMovies();
            setMovies(data);
            setLoading(false);
        };
        fetchMovies();
    }, []);

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">🎬 Trending Movies</h1>
                <p className="page-subtitle">Discover popular movies right now</p>
            </div>

            {loading ? (
                <Loader />
            ) : movies.length === 0 ? (
                <p className="empty-message">No movies found. Try again later.</p>
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

export default Home;