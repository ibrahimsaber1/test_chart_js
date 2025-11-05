import React from 'react';
import { ChartPlayground } from '../../components/ChartPlayground';
import './HomePage.css';

export const HomePage = () => {
    return (
        <div className="home-page">
            <section className="hero-section">
                <h1>📊 Interactive Chart.js Learning Platform</h1>
                <p className="hero-subtitle">
                    Create, customize, and export professional charts in real-time. 
                    Perfect for learning Chart.js or prototyping data visualizations.
                </p>
                <div className="features-grid">
                    <div className="feature-card">
                        <span className="feature-icon">🎨</span>
                        <h3>Interactive Playground</h3>
                        <p>Build charts with live preview and instant feedback</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">💾</span>
                        <h3>Export Options</h3>
                        <p>Download as PNG, CSV, or JSON format</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">📊</span>
                        <h3>Multiple Chart Types</h3>
                        <p>Line, Bar, Pie, Radar, Scatter, and more</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">💼</span>
                        <h3>Business Use Cases</h3>
                        <p>Real-world examples for each chart type</p>
                    </div>
                </div>
            </section>

            <ChartPlayground />
        </div>
    );
};
