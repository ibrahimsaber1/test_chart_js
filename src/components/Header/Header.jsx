import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/line-charts', label: 'Line Charts', icon: '📈' },
        { path: '/bar-charts', label: 'Bar Charts', icon: '📊' },
        { path: '/pie-charts', label: 'Pie Charts', icon: '🥧' },
        { path: '/radar-charts', label: 'Radar Charts', icon: '🎯' },
        { path: '/scatter-charts', label: 'Scatter Charts', icon: '💫' },
        { path: '/mixed-charts', label: 'Mixed Charts', icon: '🔀' },
    ];

    return (
        <header className="main-header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-icon">📊</span>
                    <span className="logo-text">Chart.js Learn</span>
                </Link>

                <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <button 
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};
