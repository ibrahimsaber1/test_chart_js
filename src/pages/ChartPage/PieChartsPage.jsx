import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import './ChartPage.css';

export const PieChartsPage = () => {
    // Use Case 1: Budget Allocation
    const budgetData = {
        labels: ['Marketing', 'Development', 'Operations', 'Sales', 'HR', 'Other'],
        datasets: [{
            label: 'Budget Distribution (%)',
            data: [25, 30, 20, 15, 7, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
            ],
            borderWidth: 2,
            borderColor: '#fff',
        }]
    };

    // Use Case 2: Market Share
    const marketShareData = {
        labels: ['Company A', 'Company B', 'Company C', 'Company D', 'Others'],
        datasets: [{
            label: 'Market Share (%)',
            data: [35, 28, 18, 12, 7],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
            ],
            borderWidth: 2,
            borderColor: '#fff',
        }]
    };

    // Use Case 3: Traffic Sources (Doughnut)
    const trafficSourcesData = {
        labels: ['Organic Search', 'Direct', 'Social Media', 'Referral', 'Email', 'Paid Ads'],
        datasets: [{
            label: 'Traffic Sources (%)',
            data: [40, 25, 15, 10, 6, 4],
            backgroundColor: [
                'rgba(75, 192, 192, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
            ],
            borderWidth: 3,
            borderColor: '#fff',
        }]
    };

    // Use Case 4: Survey Results
    const surveyData = {
        labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'],
        datasets: [{
            label: 'Customer Satisfaction',
            data: [45, 35, 12, 5, 3],
            backgroundColor: [
                'rgba(75, 192, 192, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(255, 99, 132, 0.8)',
            ],
            borderWidth: 2,
            borderColor: '#fff',
        }]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { 
                position: 'bottom',
                labels: { padding: 15 }
            },
        },
    };

    return (
        <div className="chart-page">
            <div className="page-header">
                <h1>🥧 Pie & Doughnut Charts</h1>
                <p className="page-description">
                    Pie and doughnut charts are perfect for showing proportions and percentages of a whole. 
                    They help visualize how different parts contribute to the total, making them ideal for budget breakdowns, 
                    market share analysis, and survey results.
                </p>
            </div>

            <div className="use-cases-grid">
                {/* Use Case 1 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>💰 Annual Budget Allocation</h2>
                        <span className="badge">Financial Planning</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Visualize how organizational budget is distributed across departments to ensure balanced investment, 
                            identify overspending areas, and communicate financial priorities to stakeholders and board members.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Development (30%) and Marketing (25%) receive 55% of total budget</li>
                            <li><strong>Action Item:</strong> Review if current allocation aligns with strategic goals</li>
                            <li><strong>Best For:</strong> Budget presentations, financial planning, stakeholder reports</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Pie data={budgetData} options={options} />
                    </div>
                </div>

                {/* Use Case 2 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>📊 Competitive Market Share</h2>
                        <span className="badge">Market Analysis</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Track your company's position relative to competitors in the market. Essential for strategic planning, 
                            competitive analysis, and identifying opportunities for market expansion or defending market position.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Company A leads with 35%, but top 3 control 81% of market</li>
                            <li><strong>Action Item:</strong> Focus on capturing share from "Others" segment</li>
                            <li><strong>Best For:</strong> Competitive intelligence, strategic planning, investor updates</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Pie data={marketShareData} options={options} />
                    </div>
                </div>

                {/* Use Case 3 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>🌐 Website Traffic Sources</h2>
                        <span className="badge">Digital Analytics</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Understand where website visitors come from to optimize marketing spend, improve SEO strategy, 
                            and identify the most effective acquisition channels. Critical for digital marketing ROI analysis.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Organic search drives 40% of traffic - strong SEO performance</li>
                            <li><strong>Action Item:</strong> Invest more in organic search; paid ads underperforming at 4%</li>
                            <li><strong>Best For:</strong> Marketing optimization, channel attribution, budget allocation</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Doughnut data={trafficSourcesData} options={options} />
                    </div>
                </div>

                {/* Use Case 4 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>⭐ Customer Satisfaction Survey</h2>
                        <span className="badge">Customer Experience</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Measure customer satisfaction levels to track service quality, identify improvement areas, 
                            and benchmark against industry standards. Essential for customer retention and brand reputation management.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> 80% satisfied or very satisfied - strong customer sentiment</li>
                            <li><strong>Action Item:</strong> Investigate 8% dissatisfied customers to prevent churn</li>
                            <li><strong>Best For:</strong> CX metrics, quality monitoring, service improvement initiatives</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Doughnut data={surveyData} options={options} />
                    </div>
                </div>
            </div>

            <div className="tips-section">
                <h2>💡 When to Use Pie Charts</h2>
                <div className="tips-grid">
                    <div className="tip-card">
                        <h3>✅ Best For:</h3>
                        <ul>
                            <li>Showing parts of a whole (percentages)</li>
                            <li>Budget or resource allocation</li>
                            <li>Market share distribution</li>
                            <li>Survey responses (5-7 categories max)</li>
                            <li>Simple proportion comparisons</li>
                        </ul>
                    </div>
                    <div className="tip-card">
                        <h3>❌ Avoid When:</h3>
                        <ul>
                            <li>More than 7 categories (use bar chart)</li>
                            <li>Comparing values over time (use line chart)</li>
                            <li>Values are very similar (hard to distinguish)</li>
                            <li>Precise comparison needed (use bar chart)</li>
                            <li>Multiple datasets (pie can't show trends)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
