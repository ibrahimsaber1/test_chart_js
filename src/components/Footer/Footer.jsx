import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>📊 Chart.js Learn</h3>
                    <p>Master data visualization with interactive examples and real-world business use cases.</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="https://www.chartjs.org/docs/" target="_blank" rel="noopener noreferrer">Chart.js Docs</a></li>
                        <li><a href="https://react-chartjs-2.js.org/" target="_blank" rel="noopener noreferrer">React Chart.js 2</a></li>
                        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Chart Types</h4>
                    <ul>
                        <li>Line Charts</li>
                        <li>Bar Charts</li>
                        <li>Pie & Doughnut</li>
                        <li>Radar & Polar</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a href="#" aria-label="GitHub">💻</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                        <a href="#" aria-label="LinkedIn">💼</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Chart.js Learning Repository. Built with React + Vite + Chart.js</p>
            </div>
        </footer>
    );
};
