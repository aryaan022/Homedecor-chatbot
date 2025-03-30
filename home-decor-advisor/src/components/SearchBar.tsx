import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query.trim());
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your decor style (e.g., modern living room, boho bedroom)"
                className="search-input"
            />
            <button type="submit" className="search-button">
                Get Decor Advice
            </button>
        </form>
    );
};

export default SearchBar; 