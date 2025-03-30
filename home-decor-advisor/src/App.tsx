import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import DecorImage from './components/DecorImage';
import DecorAdvice from './components/DecorAdvice';
import PrebuiltDesigns from './components/PrebuiltDesigns';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [advice, setAdvice] = useState('');

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    // API calls will be implemented in the respective components
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>Home Decor Advisor</h1>
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
      </header>

      <main className="app-main">
        <SearchBar onSearch={handleSearch} />

        <div className="content-container">
          <div className="left-section">
            <DecorImage query={searchQuery} />
            <DecorAdvice query={searchQuery} />
          </div>

          <div className="right-section">
            <PrebuiltDesigns />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
