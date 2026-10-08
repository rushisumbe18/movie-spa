import React, { createContext, useContext, useState, useEffect } from 'react';

const WatchlistContext = createContext();

export const useWatchlist = () => {
    const context = useContext(WatchlistContext);
    if (!context) {
        throw new Error('useWatchlist must be used within a WatchlistProvider');
    }
    return context;
};

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState(() => {
        const saved = localStorage.getItem('movieWatchlist');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('movieWatchlist', JSON.stringify(watchlist));
    }, [watchlist]);

    const addToWatchlist = (movie) => {
        setWatchlist((prev) => {
            if (prev.some((m) => m.imdbID === movie.imdbID)) {
                return prev;
            }
            return [...prev, movie];
        });
    };

    const removeFromWatchlist = (imdbID) => {
        setWatchlist((prev) => prev.filter((m) => m.imdbID !== imdbID));
    };

    const isInWatchlist = (imdbID) => {
        return watchlist.some((m) => m.imdbID === imdbID);
    };

    const clearWatchlist = () => {
        setWatchlist([]);
    };

    const value = {
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isInWatchlist,
        clearWatchlist,
    };

    return (
        <WatchlistContext.Provider value={value}>
            {children}
        </WatchlistContext.Provider>
    );
};