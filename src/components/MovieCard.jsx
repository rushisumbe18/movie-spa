import React from 'react';
import { Link } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';

function MovieCard({ movie }) {
    const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
    const inWatchlist = isInWatchlist(movie.imdbID);

    const handleWatchlistToggle = (e) => {
        e.preventDefault(); // Prevent navigation to details page
        if (inWatchlist) {
            removeFromWatchlist(movie.imdbID);
        } else {
            addToWatchlist(movie);
        }
    };

    return (
        <Link to={`/movie/${movie.imdbID}`} className="movie-card">
            <div className="movie-poster-wrapper">
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
                    alt={movie.Title}
                    className="movie-poster"
                />
                <button
                    className={`watchlist-btn ${inWatchlist ? 'in-watchlist' : ''}`}
                    onClick={handleWatchlistToggle}
                    title={inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
                >
                    {inWatchlist ? '✓' : '+'}
                </button>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.Title}</h3>
                <p className="movie-year">{movie.Year}</p>
            </div>
        </Link>
    );
}

export default MovieCard;