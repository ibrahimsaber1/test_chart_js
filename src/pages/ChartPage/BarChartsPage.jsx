import React from 'react';
import { Bar } from 'react-chartjs-2';
import './ChartPage.css';

export const BarChartsPage = () => {
    // Use Case 1: Monthly Sales Comparison
    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales 2024 ($)',
            data: [45000, 52000, 48000, 61000, 58000, 67000],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
        }]
    };

    // Use Case 2: Product Category Revenue
    const categoryData = {
        labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Sports', 'Home'],
        datasets: [
            {
                label: 'Q1 Revenue',
                data: [85000, 62000, 45000, 28000, 35000, 52000],
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                borderWidth: 2,
            },
            {
                label: 'Q2 Revenue',
                data: [92000, 68000, 48000, 31000, 42000, 58000],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderWidth: 2,
            }
        ]
    };

    // Use Case 3: Employee Performance
    const performanceData = {
        labels: ['John', 'Sarah', 'Mike', 'Emily', 'David', 'Lisa'],
        datasets: [{
            label: 'Tasks Completed',
            data: [45, 52, 38, 61, 48, 55],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
            ],
            borderWidth: 2,
        }]
    };

    // Use Case 4: Regional Market Share
    const marketData = {
        labels: ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Oceania'],
        datasets: [{
            label: 'Market Share (%)',
            data: [35, 28, 22, 8, 4, 3],
            backgroundColor: 'rgba(153, 102, 255, 0.7)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2,
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { position: 'top' },
        },
        scales: {
            y: { beginAtZero: true }
        }
    };

    return (
        <div className="chart-page">
            <div className="page-header">
                <h1>📊 Bar Charts</h1>
                <p className="page-description">
                    Bar charts are ideal for comparing discrete categories or showing data distribution across different groups. 
                    They make it easy to identify patterns, compare values, and spot outliers at a glance.
                </p>
            </div>

            <div className="use-cases-grid">
                {/* Use Case 1 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>💰 Monthly Sales Tracking</h2>
                        <span className="badge">Sales Analytics</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Track monthly sales performance to identify trends, seasonal patterns, and growth opportunities. 
                            Helps sales managers set realistic targets and allocate resources effectively.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Sales increased 49% from January to June</li>
                            <li><strong>Action Item:</strong> Investigate February dip and replicate June success</li>
                            <li><strong>Best For:</strong> Monthly reports, trend analysis, goal tracking</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Bar data={salesData} options={options} />
                    </div>
                </div>

                {/* Use Case 2 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>📦 Product Category Comparison</h2>
                        <span className="badge">Revenue Analysis</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Compare revenue across product categories and quarters to optimize inventory, 
                            marketing spend, and resource allocation. Identify top performers and underperforming categories.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Electronics lead with 8% growth Q1 to Q2</li>
                            <li><strong>Action Item:</strong> Increase marketing budget for Sports category</li>
                            <li><strong>Best For:</strong> Portfolio analysis, budget planning, category management</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Bar data={categoryData} options={options} />
                    </div>
                </div>

                {/* Use Case 3 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>👥 Employee Performance Metrics</h2>
                        <span className="badge">HR Analytics</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Visualize individual employee productivity to recognize top performers, identify training needs, 
                            and ensure fair workload distribution. Essential for performance reviews and team management.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Emily leads with 61 tasks completed</li>
                            <li><strong>Action Item:</strong> Provide additional support to Mike</li>
                            <li><strong>Best For:</strong> Performance reviews, team optimization, recognition programs</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Bar data={performanceData} options={options} />
                    </div>
                </div>

                {/* Use Case 4 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>🌍 Regional Market Distribution</h2>
                        <span className="badge">Market Research</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Analyze market share distribution across geographical regions to inform expansion strategies, 
                            resource allocation, and regional marketing campaigns. Critical for global business planning.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> North America holds 35% market share</li>
                            <li><strong>Action Item:</strong> Explore growth opportunities in Asia and Africa</li>
                            <li><strong>Best For:</strong> Strategic planning, market entry analysis, regional targeting</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Bar data={marketData} options={options} />
                    </div>
                </div>
            </div>

            <div className="tips-section">
                <h2>💡 When to Use Bar Charts</h2>
                <div className="tips-grid">
                    <div className="tip-card">
                        <h3>✅ Best For:</h3>
                        <ul>
                            <li>Comparing discrete categories</li>
                            <li>Showing rankings or hierarchies</li>
                            <li>Displaying survey results</li>
                            <li>Budget allocation across departments</li>
                        </ul>
                    </div>
                    <div className="tip-card">
                        <h3>❌ Avoid When:</h3>
                        <ul>
                            <li>Data has too many categories (&gt;15)</li>
                            <li>Showing continuous time series (use line charts)</li>
                            <li>Displaying proportions of a whole (use pie charts)</li>
                            <li>Comparing more than 5 datasets</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
