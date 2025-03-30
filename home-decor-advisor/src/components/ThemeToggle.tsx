import React from 'react';
import './ThemeToggle.css';

interface ThemeToggleProps {
    isDarkMode: boolean;
    onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
    return (
        <button className="theme-toggle" onClick={onToggle}>
            {isDarkMode ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle; 