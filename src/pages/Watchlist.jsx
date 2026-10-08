import React from 'react';
import { Link } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';

function Watchlist() {
    const { watchlist, clearWatchlist } = useWatchlist();

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">❤️ My Watchlist</h1>
                <p className="page-subtitle">
                    {watchlist.length} {watchlist.length === 1 ? 'movie' : 'movies'} saved
                </p>
            </div>

            {watchlist.length === 0 ? (
                <div className="empty-watchlist">
                    <p className="empty-message">Your watchlist is empty.</p>
                    <Link to="/search" className="btn-primary">Browse Movies</Link>
                </div>
            ) : (
                <>
                    <div className="movies-grid">
                        {watchlist.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>

                    <button className="clear-watchlist-btn" onClick={clearWatchlist}>
                        Clear All
                    </button>
                </>
            )}
        </div>
    );
}

export default Watchlist;