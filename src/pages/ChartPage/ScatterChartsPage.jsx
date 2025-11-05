import React from 'react';
import { Scatter, Bubble } from 'react-chartjs-2';
import './ChartPage.css';

export const ScatterChartsPage = () => {
    // Use Case 1: Correlation Analysis
    const correlationData = {
        datasets: [{
            label: 'Marketing Spend vs Revenue',
            data: [
                { x: 5000, y: 25000 },
                { x: 8000, y: 38000 },
                { x: 12000, y: 52000 },
                { x: 15000, y: 68000 },
                { x: 20000, y: 85000 },
                { x: 25000, y: 102000 },
                { x: 30000, y: 125000 },
            ],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            pointRadius: 8,
        }]
    };

    // Use Case 2: Customer Segmentation
    const segmentationData = {
        datasets: [
            {
                label: 'High Value',
                data: [
                    { x: 15, y: 85000 },
                    { x: 18, y: 92000 },
                    { x: 22, y: 105000 },
                    { x: 25, y: 98000 },
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                pointRadius: 10,
            },
            {
                label: 'Medium Value',
                data: [
                    { x: 8, y: 45000 },
                    { x: 12, y: 52000 },
                    { x: 10, y: 48000 },
                    { x: 14, y: 55000 },
                ],
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
                pointRadius: 10,
            },
            {
                label: 'Low Value',
                data: [
                    { x: 2, y: 12000 },
                    { x: 4, y: 18000 },
                    { x: 3, y: 15000 },
                    { x: 5, y: 22000 },
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                pointRadius: 10,
            }
        ]
    };

    // Use Case 3: Product Portfolio (Bubble)
    const portfolioData = {
        datasets: [
            {
                label: 'Product A',
                data: [{ x: 85, y: 120000, r: 25 }],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
                label: 'Product B',
                data: [{ x: 65, y: 85000, r: 35 }],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
            {
                label: 'Product C',
                data: [{ x: 92, y: 65000, r: 15 }],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Product D',
                data: [{ x: 45, y: 95000, r: 20 }],
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
            },
        ]
    };

    const scatterOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="chart-page">
            <div className="page-header">
                <h1>💫 Scatter & Bubble Charts</h1>
                <p className="page-description">
                    Scatter charts reveal relationships and correlations between two variables, while bubble charts 
                    add a third dimension. Perfect for data analysis, identifying patterns, outliers, and trends that 
                    aren't visible in other chart types.
                </p>
            </div>

            <div className="use-cases-grid">
                {/* Use Case 1 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>📈 Marketing ROI Analysis</h2>
                        <span className="badge">Marketing Analytics</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Analyze the relationship between marketing spend and revenue to determine ROI, 
                            identify optimal spending levels, and justify marketing budgets. Essential for proving 
                            marketing effectiveness and budget planning.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Strong positive correlation - every $1 spent generates ~$4 revenue</li>
                            <li><strong>Action Item:</strong> Increase marketing budget with confidence in returns</li>
                            <li><strong>Best For:</strong> Budget justification, ROI analysis, spend optimization</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Scatter data={correlationData} options={{
                            ...scatterOptions,
                            scales: {
                                x: { 
                                    title: { display: true, text: 'Marketing Spend ($)' },
                                    type: 'linear'
                                },
                                y: { 
                                    title: { display: true, text: 'Revenue ($)' },
                                    beginAtZero: true 
                                }
                            }
                        }} />
                    </div>
                </div>

                {/* Use Case 2 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>👥 Customer Segmentation</h2>
                        <span className="badge">Customer Analytics</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Segment customers based on purchase frequency and lifetime value to create targeted 
                            marketing campaigns, personalize experiences, and optimize resource allocation. 
                            Critical for customer relationship management.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Clear clusters show distinct customer segments</li>
                            <li><strong>Action Item:</strong> Create tailored strategies for each segment</li>
                            <li><strong>Best For:</strong> CRM strategy, personalization, retention programs</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Scatter data={segmentationData} options={{
                            ...scatterOptions,
                            scales: {
                                x: { 
                                    title: { display: true, text: 'Purchase Frequency (per year)' },
                                    type: 'linear'
                                },
                                y: { 
                                    title: { display: true, text: 'Lifetime Value ($)' },
                                    beginAtZero: true 
                                }
                            }
                        }} />
                    </div>
                </div>

                {/* Use Case 3 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>📦 Product Portfolio Matrix</h2>
                        <span className="badge">Strategic Planning</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Visualize product portfolio with customer satisfaction (x), revenue (y), and market share (bubble size). 
                            Helps prioritize product investments, identify stars and dogs, and guide product strategy decisions.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Product C has highest satisfaction but small market share</li>
                            <li><strong>Action Item:</strong> Invest in Product B (largest share); improve Product D satisfaction</li>
                            <li><strong>Best For:</strong> Portfolio management, investment decisions, strategic planning</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Bubble data={portfolioData} options={{
                            ...scatterOptions,
                            scales: {
                                x: { 
                                    title: { display: true, text: 'Customer Satisfaction Score' },
                                    type: 'linear',
                                    max: 100
                                },
                                y: { 
                                    title: { display: true, text: 'Revenue ($)' },
                                    beginAtZero: true 
                                }
                            }
                        }} />
                    </div>
                </div>
            </div>

            <div className="tips-section">
                <h2>💡 When to Use Scatter Charts</h2>
                <div className="tips-grid">
                    <div className="tip-card">
                        <h3>✅ Best For:</h3>
                        <ul>
                            <li>Finding correlations between variables</li>
                            <li>Identifying patterns and clusters</li>
                            <li>Detecting outliers in data</li>
                            <li>Scientific or statistical analysis</li>
                            <li>Three-dimensional data (bubble charts)</li>
                        </ul>
                    </div>
                    <div className="tip-card">
                        <h3>❌ Avoid When:</h3>
                        <ul>
                            <li>Showing trends over time (use line chart)</li>
                            <li>Comparing categories (use bar chart)</li>
                            <li>Data has no relationship to explore</li>
                            <li>Too many data points (becomes cluttered)</li>
                            <li>Audience needs simple comparisons</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
