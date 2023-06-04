import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const localStorageDarkMode = localStorage.getItem('darkMode');
        return localStorageDarkMode ? JSON.parse(localStorageDarkMode) : false;
    });

    const handleThemeChange = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--bg-color', darkMode ? '#121212' : 'white');
        document.documentElement.style.setProperty('--font-color', darkMode ? 'white' : 'black');
        document.documentElement.style.setProperty('--border-color', darkMode ? 'white' : 'black');
    }, [darkMode]);

    return (
        <div className={`App ${darkMode ? 'dark' : 'light'}`}>
            <div className="App-container">
                <header className="App-header">
                    <div className="header-content">
                        <h1 className="main-title">Alex Wootton</h1>
                        <button className="theme-toggle" onClick={handleThemeChange}>
                            {darkMode ? '🌕' : '🌑'}
                        </button>

                    </div>
                </header>
                <main className="App-main">
                    <div className="column">
                        <section>
                            <h2>About Me</h2>
                            <p>
                                As a Technical Engagement Manager at Jetstack, a Venafi company, I lead a dynamic Field team dedicated to helping clients optimize modern infrastructures and open-source tools. Our core focus is on Kubernetes, a key component in every engagement.
                            </p>
                        </section>

                        <section>
                            <h2>Experience</h2>
                            <ul>
                                <li>Technical Engagement Manager at Jetstack</li>
                                <li>Staff Solutions Engineer at Jetstack</li>
                            </ul>
                        </section>
                    </div>

                    <div className="column">
                        <section>
                            <h2>Skills</h2>
                            <ul>
                                <li>Technical Engagement</li>
                                <li>Solution Implementation</li>
                                <li>Kubernetes Expertise</li>
                                <li>Customer Success Management</li>
                            </ul>
                        </section>

                        <section>
                            <h2>Contact</h2>
                            <p>Professional Email: <a href="mailto:alex.wootton@jetstack.io">alex.wootton@jetstack.io</a></p>
                            <p>Personal Email: <a href="mailto:agwootton@gmail.com">agwootton@gmail.com</a></p>
                            <p>LinkedIn: <a href="https://www.linkedin.com/alexwootton" target="_blank" rel="noopener noreferrer">linkedin.com/alexwootton</a></p>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
