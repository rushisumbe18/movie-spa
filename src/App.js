import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';
import Watchlist from './pages/Watchlist';
import About from './pages/About';

import { WatchlistProvider } from './context/WatchlistContext';

function App() {
  return (
      <WatchlistProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<div className="page-container"><h1>404 - Page Not Found</h1></div>} />
              </Routes>
            </main>
          </div>
        </Router>
      </WatchlistProvider>
  );
}

export default App;