import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../services/omdbApi';
import { useWatchlist } from '../context/WatchlistContext';
import Loader from '../components/Loader';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            const data = await getMovieDetails(id);
            setMovie(data);
            setLoading(false);
        };
        fetchDetails();
    }, [id]);

    if (loading) return <Loader />;
    if (!movie || movie.Response === 'False') {
        return (
            <div className="page-container">
                <p className="empty-message">Movie not found.</p>
                <Link to="/" className="back-link">← Back to Home</Link>
            </div>
        );
    }

    const inWatchlist = isInWatchlist(movie.imdbID);

    const handleWatchlistToggle = () => {
        if (inWatchlist) {
            removeFromWatchlist(movie.imdbID);
        } else {
            addToWatchlist(movie);
        }
    };

    return (
        <div className="page-container">
            <Link to="/" className="back-link">← Back to Home</Link>

            <div className="movie-details">
                <div className="movie-details-poster">
                    <img
                        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
                        alt={movie.Title}
                    />
                </div>

                <div className="movie-details-info">
                    <h1 className="movie-details-title">{movie.Title}</h1>
                    <p className="movie-details-meta">
                        {movie.Year} • {movie.Rated} • {movie.Runtime}
                    </p>

                    <div className="movie-genres">
                        {movie.Genre?.split(', ').map((genre, i) => (
                            <span key={i} className="genre-tag">{genre}</span>
                        ))}
                    </div>

                    <p className="movie-plot">{movie.Plot}</p>

                    <div className="movie-extra">
                        <p><strong>Director:</strong> {movie.Director}</p>
                        <p><strong>Actors:</strong> {movie.Actors}</p>
                        <p><strong>Rating:</strong> ⭐ {movie.imdbRating}/10</p>
                        <p><strong>Released:</strong> {movie.Released}</p>
                    </div>

                    <button
                        className={`watchlist-btn-large ${inWatchlist ? 'in-watchlist' : ''}`}
                        onClick={handleWatchlistToggle}
                    >
                        {inWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;