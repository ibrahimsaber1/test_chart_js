import React from 'react';
import { Chart } from 'react-chartjs-2';
import './ChartPage.css';

export const MixedChartsPage = () => {
    // Use Case 1: Revenue & Profit
    const revenueProfitData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                type: 'bar',
                label: 'Revenue ($1000s)',
                data: [120, 150, 140, 180, 165, 195],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                order: 2
            },
            {
                type: 'line',
                label: 'Profit Margin (%)',
                data: [25, 28, 24, 32, 30, 35],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                tension: 0.4,
                fill: false,
                yAxisID: 'y1',
                order: 1
            }
        ]
    };

    // Use Case 2: Sales & Conversion
    const salesConversionData = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                type: 'bar',
                label: 'Website Visitors',
                data: [5000, 5500, 6200, 5800],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                order: 2
            },
            {
                type: 'bar',
                label: 'Leads Generated',
                data: [450, 520, 580, 550],
                backgroundColor: 'rgba(255, 206, 86, 0.6)',
                order: 2
            },
            {
                type: 'line',
                label: 'Conversion Rate (%)',
                data: [9, 9.5, 9.4, 9.5],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.1)',
                tension: 0.4,
                yAxisID: 'y1',
                order: 1
            }
        ]
    };

    // Use Case 3: Budget vs Actual
    const budgetActualData = {
        labels: ['Marketing', 'Development', 'Operations', 'Sales', 'HR'],
        datasets: [
            {
                type: 'bar',
                label: 'Budget ($1000s)',
                data: [50, 80, 40, 35, 25],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                order: 2
            },
            {
                type: 'bar',
                label: 'Actual Spend ($1000s)',
                data: [48, 85, 42, 32, 24],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                order: 2
            },
            {
                type: 'line',
                label: 'Variance (%)',
                data: [-4, 6.25, 5, -8.6, -4],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                tension: 0.4,
                yAxisID: 'y1',
                order: 1
            }
        ]
    };

    const mixedOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            }
        }
    };

    return (
        <div className="chart-page">
            <div className="page-header">
                <h1>🔀 Mixed Charts</h1>
                <p className="page-description">
                    Mixed charts combine different chart types to show relationships between metrics with different scales 
                    or units. Perfect for displaying complementary data that tells a more complete story together than 
                    separately.
                </p>
            </div>

            <div className="use-cases-grid">
                {/* Use Case 1 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>💰 Revenue & Profitability Analysis</h2>
                        <span className="badge">Financial Reporting</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Track revenue growth alongside profit margins to understand if growth is profitable. 
                            Essential for CFOs and executives to ensure sustainable business growth and identify 
                            when revenue increases come at the cost of profitability.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Revenue up 62% while profit margin improved from 25% to 35%</li>
                            <li><strong>Action Item:</strong> Healthy growth - maintain current strategy</li>
                            <li><strong>Best For:</strong> Executive dashboards, board presentations, financial planning</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Chart type='bar' data={revenueProfitData} options={mixedOptions} />
                    </div>
                </div>

                {/* Use Case 2 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>🎯 Marketing Funnel Performance</h2>
                        <span className="badge">Marketing Analytics</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Combine volume metrics (visitors, leads) with efficiency metrics (conversion rate) to 
                            understand both scale and quality of marketing performance. Critical for optimizing 
                            marketing spend and funnel conversion.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Traffic up 16% and conversion rate stable at ~9.5%</li>
                            <li><strong>Action Item:</strong> Scale traffic acquisition while maintaining quality</li>
                            <li><strong>Best For:</strong> Marketing reports, funnel optimization, performance tracking</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Chart type='bar' data={salesConversionData} options={mixedOptions} />
                    </div>
                </div>

                {/* Use Case 3 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>📊 Budget vs Actual Spending</h2>
                        <span className="badge">Budget Management</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Compare budgeted amounts to actual spending while showing variance percentage. 
                            Essential for financial controllers and department heads to manage budgets, identify 
                            overspending, and take corrective action.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Development 6.25% over budget; Sales 8.6% under budget</li>
                            <li><strong>Action Item:</strong> Investigate Development overspend; reallocate savings from Sales</li>
                            <li><strong>Best For:</strong> Budget reviews, financial controls, department management</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Chart type='bar' data={budgetActualData} options={mixedOptions} />
                    </div>
                </div>
            </div>

            <div className="tips-section">
                <h2>💡 When to Use Mixed Charts</h2>
                <div className="tips-grid">
                    <div className="tip-card">
                        <h3>✅ Best For:</h3>
                        <ul>
                            <li>Combining metrics with different scales</li>
                            <li>Showing volume and rate/percentage together</li>
                            <li>Comparing absolute vs relative performance</li>
                            <li>Executive dashboards and reports</li>
                            <li>Complex business storytelling</li>
                        </ul>
                    </div>
                    <div className="tip-card">
                        <h3>❌ Avoid When:</h3>
                        <ul>
                            <li>Audience needs simple, straightforward data</li>
                            <li>More than 3-4 datasets (becomes cluttered)</li>
                            <li>Metrics don't have logical relationship</li>
                            <li>Single axis can accommodate all data</li>
                            <li>Presentation requires quick comprehension</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
