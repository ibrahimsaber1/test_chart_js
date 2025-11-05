import React from 'react';
import { Line } from 'react-chartjs-2';
import './ChartPage.css';

export const LineChartsPage = () => {
    // Use Case 1: Stock Price Tracking
    const stockData = {
        labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'],
        datasets: [{
            label: 'Stock Price ($)',
            data: [145.20, 146.50, 144.80, 147.30, 148.90, 147.60, 149.20, 150.40],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 5,
            pointHoverRadius: 7,
        }]
    };

    // Use Case 2: Website Traffic Over Time
    const trafficData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [
            {
                label: 'Organic Traffic',
                data: [2400, 2800, 3200, 3800, 4200, 4600],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.1)',
                tension: 0.4,
                fill: true,
            },
            {
                label: 'Paid Traffic',
                data: [1200, 1500, 1400, 1800, 2100, 2400],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                tension: 0.4,
                fill: true,
            }
        ]
    };

    // Use Case 3: Temperature Monitoring
    const temperatureData = {
        labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM', '11 PM'],
        datasets: [{
            label: 'Temperature (°C)',
            data: [18, 16, 22, 28, 32, 26, 20],
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.1)',
            tension: 0.4,
            fill: true,
            pointStyle: 'circle',
            pointRadius: 6,
        }]
    };

    // Use Case 4: Customer Growth
    const growthData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Customers',
            data: [1200, 1350, 1500, 1680, 1920, 2250, 2580, 2890, 3200, 3580, 3920, 4300],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.1)',
            tension: 0.4,
            fill: true,
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { position: 'top' },
        },
        scales: {
            y: { beginAtZero: false }
        }
    };

    return (
        <div className="chart-page">
            <div className="page-header">
                <h1>📈 Line Charts</h1>
                <p className="page-description">
                    Line charts excel at showing trends over time and continuous data. They're perfect for tracking changes, 
                    identifying patterns, and forecasting future performance based on historical data.
                </p>
            </div>

            <div className="use-cases-grid">
                {/* Use Case 1 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>📊 Stock Price Monitoring</h2>
                        <span className="badge">Financial Trading</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Track intraday stock price movements to make informed trading decisions. Essential for day traders, 
                            portfolio managers, and investors monitoring market volatility and identifying entry/exit points.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Stock gained 3.6% throughout the trading day</li>
                            <li><strong>Action Item:</strong> Midday dip presents potential buying opportunity</li>
                            <li><strong>Best For:</strong> Real-time monitoring, trend analysis, volatility assessment</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Line data={stockData} options={options} />
                    </div>
                </div>

                {/* Use Case 2 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>🌐 Website Traffic Analytics</h2>
                        <span className="badge">Digital Marketing</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Compare organic vs paid traffic growth over time to evaluate marketing ROI and optimize channel allocation. 
                            Critical for digital marketers and growth teams planning budget distribution.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Organic traffic growing 92%, paid traffic 100%</li>
                            <li><strong>Action Item:</strong> Invest more in SEO; both channels showing strong growth</li>
                            <li><strong>Best For:</strong> Marketing optimization, budget planning, channel comparison</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Line data={trafficData} options={options} />
                    </div>
                </div>

                {/* Use Case 3 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>🌡️ Temperature Monitoring</h2>
                        <span className="badge">IoT & Sensors</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Monitor environmental conditions in warehouses, server rooms, or manufacturing facilities. 
                            Essential for maintaining optimal conditions, preventing equipment damage, and ensuring product quality.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Peak temperature of 32°C at 4 PM</li>
                            <li><strong>Action Item:</strong> Consider additional cooling during afternoon hours</li>
                            <li><strong>Best For:</strong> Environmental monitoring, HVAC optimization, quality control</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Line data={temperatureData} options={options} />
                    </div>
                </div>

                {/* Use Case 4 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>📈 Customer Base Growth</h2>
                        <span className="badge">Business Growth</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Track cumulative customer acquisition to measure business growth, validate product-market fit, 
                            and project future revenue. Critical for startups, SaaS companies, and investor reporting.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> 258% customer growth over 12 months</li>
                            <li><strong>Action Item:</strong> Scale customer support and infrastructure for growth</li>
                            <li><strong>Best For:</strong> Growth tracking, investor presentations, capacity planning</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Line data={growthData} options={options} />
                    </div>
                </div>
            </div>

            <div className="tips-section">
                <h2>💡 When to Use Line Charts</h2>
                <div className="tips-grid">
                    <div className="tip-card">
                        <h3>✅ Best For:</h3>
                        <ul>
                            <li>Time series data and trends</li>
                            <li>Continuous measurements</li>
                            <li>Comparing multiple variables over time</li>
                            <li>Forecasting and prediction</li>
                        </ul>
                    </div>
                    <div className="tip-card">
                        <h3>❌ Avoid When:</h3>
                        <ul>
                            <li>Comparing discrete categories (use bar charts)</li>
                            <li>Showing parts of a whole (use pie charts)</li>
                            <li>Too many overlapping lines (&gt;5)</li>
                            <li>Data points are not sequential</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
