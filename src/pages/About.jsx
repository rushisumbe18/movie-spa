import React from 'react';

function About() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">ℹ️ About MovieHub</h1>
            </div>

            <div className="about-content">
                <p>
                    MovieHub is a <strong>Single Page Application (SPA)</strong> built with
                    <strong> React.js</strong> and <strong>React Router</strong>. It allows
                    users to discover, search, and save their favourite movies.
                </p>

                <h2>🎯 Features</h2>
                <ul>
                    <li>Browse trending movies</li>
                    <li>Search movies by title</li>
                    <li>View detailed movie information</li>
                    <li>Save movies to a personal watchlist</li>
                    <li>Watchlist persisted in browser (localStorage)</li>
                </ul>

                <h2>🛠️ Tech Stack</h2>
                <ul>
                    <li>React 18 (Components, Hooks)</li>
                    <li>React Router DOM (Client-side routing)</li>
                    <li>Context API (Global state management)</li>
                    <li>Axios (HTTP requests)</li>
                    <li>OMDb API (Movie data)</li>
                    <li>CSS3 (Responsive styling)</li>
                </ul>

                <h2>👨‍💻 Developer</h2>
                <p>
                    Built by <strong>Rahul Sumbe</strong> as part of Assignment A3 —
                    Single Page Application with React.js.
                </p>

                <p className="about-footer">
                    View on GitHub:{' '}
                    <a href="https://github.com/rushisumbe18" target="_blank" rel="noopener noreferrer">
                        github.com/rushisumbe18
                    </a>
                </p>
            </div>
        </div>
    );
}

export default About;