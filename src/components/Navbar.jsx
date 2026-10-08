import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';

function Navbar() {
    const { watchlist } = useWatchlist();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    🎬 Movie<span className="logo-accent">Hub</span>
                </Link>

                <ul className="navbar-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                            Search
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/watchlist" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                            Watchlist {watchlist.length > 0 && <span className="badge">{watchlist.length}</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;