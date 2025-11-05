import React from 'react';
import { Radar, PolarArea } from 'react-chartjs-2';
import './ChartPage.css';

export const RadarChartsPage = () => {
    // Use Case 1: Skills Assessment
    const skillsData = {
        labels: ['JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'Docker', 'AWS'],
        datasets: [
            {
                label: 'Senior Developer',
                data: [95, 80, 90, 85, 88, 75, 82],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            },
            {
                label: 'Junior Developer',
                data: [70, 65, 75, 60, 70, 50, 45],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
            }
        ]
    };

    // Use Case 2: Product Comparison
    const productData = {
        labels: ['Price', 'Quality', 'Features', 'Support', 'Performance', 'Design'],
        datasets: [
            {
                label: 'Product A',
                data: [85, 90, 88, 92, 85, 95],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
            {
                label: 'Product B',
                data: [95, 75, 92, 70, 88, 80],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
            }
        ]
    };

    // Use Case 3: Brand Perception (Polar Area)
    const brandData = {
        labels: ['Trust', 'Innovation', 'Value', 'Quality', 'Service', 'Sustainability'],
        datasets: [{
            label: 'Brand Score',
            data: [85, 92, 78, 88, 90, 75],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
            ],
            borderWidth: 2,
        }]
    };

    // Use Case 4: Team Performance
    const teamData = {
        labels: ['Communication', 'Collaboration', 'Productivity', 'Innovation', 'Quality', 'Timeliness'],
        datasets: [{
            label: 'Team Alpha',
            data: [88, 92, 85, 90, 87, 91],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
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
            r: {
                beginAtZero: true,
                max: 100
            }
        }
    };

    return (
        <div className="chart-page">
            <div className="page-header">
                <h1>🎯 Radar & Polar Charts</h1>
                <p className="page-description">
                    Radar charts (spider charts) excel at multivariate comparisons, showing performance across multiple dimensions. 
                    Perfect for skill assessments, product comparisons, and performance reviews where you need to evaluate 
                    multiple criteria simultaneously.
                </p>
            </div>

            <div className="use-cases-grid">
                {/* Use Case 1 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>💻 Technical Skills Gap Analysis</h2>
                        <span className="badge">HR & Training</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Compare skill levels across team members or seniority levels to identify training needs, 
                            plan professional development programs, and make informed hiring decisions. Essential for 
                            building well-rounded technical teams.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Junior developer needs focus on Node.js, Docker, and AWS</li>
                            <li><strong>Action Item:</strong> Create training program for cloud technologies</li>
                            <li><strong>Best For:</strong> Skills planning, training budgets, hiring decisions</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Radar data={skillsData} options={options} />
                    </div>
                </div>

                {/* Use Case 2 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>📱 Product Feature Comparison</h2>
                        <span className="badge">Product Management</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Evaluate competing products across multiple criteria to inform product strategy, identify 
                            competitive advantages, and prioritize feature development. Critical for product positioning 
                            and go-to-market strategy.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Product A excels in quality and design; Product B wins on price</li>
                            <li><strong>Action Item:</strong> Product A should improve support; Product B needs design work</li>
                            <li><strong>Best For:</strong> Competitive analysis, product roadmaps, positioning strategy</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Radar data={productData} options={options} />
                    </div>
                </div>

                {/* Use Case 3 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>🏢 Brand Perception Analysis</h2>
                        <span className="badge">Marketing Research</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Measure how customers perceive your brand across key attributes. Helps guide marketing messaging, 
                            identify brand strengths and weaknesses, and track brand health over time. Essential for 
                            brand management and marketing strategy.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Innovation (92) is strongest attribute; sustainability (75) needs work</li>
                            <li><strong>Action Item:</strong> Launch sustainability initiative and communicate efforts</li>
                            <li><strong>Best For:</strong> Brand strategy, messaging development, reputation management</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <PolarArea data={brandData} options={options} />
                    </div>
                </div>

                {/* Use Case 4 */}
                <div className="use-case-card">
                    <div className="use-case-header">
                        <h2>👥 Team Performance Review</h2>
                        <span className="badge">Team Management</span>
                    </div>
                    <div className="business-context">
                        <h3>Business Use Case:</h3>
                        <p>
                            Evaluate team performance across multiple dimensions to identify strengths, improvement areas, 
                            and provide balanced feedback. Perfect for quarterly reviews, retrospectives, and team development planning.
                        </p>
                        <ul className="insights">
                            <li><strong>Key Insight:</strong> Team excels in collaboration (92) and timeliness (91)</li>
                            <li><strong>Action Item:</strong> Focus on improving productivity metrics</li>
                            <li><strong>Best For:</strong> Performance reviews, team retrospectives, OKR tracking</li>
                        </ul>
                    </div>
                    <div className="chart-container">
                        <Radar data={teamData} options={options} />
                    </div>
                </div>
            </div>

            <div className="tips-section">
                <h2>💡 When to Use Radar Charts</h2>
                <div className="tips-grid">
                    <div className="tip-card">
                        <h3>✅ Best For:</h3>
                        <ul>
                            <li>Multivariate data comparison (5-8 variables)</li>
                            <li>Skills or competency assessments</li>
                            <li>Product feature comparisons</li>
                            <li>Performance reviews across criteria</li>
                            <li>Brand perception analysis</li>
                        </ul>
                    </div>
                    <div className="tip-card">
                        <h3>❌ Avoid When:</h3>
                        <ul>
                            <li>Too many variables (&gt;10 becomes cluttered)</li>
                            <li>Variables aren't comparable</li>
                            <li>Showing trends over time (use line chart)</li>
                            <li>Audience unfamiliar with radar charts</li>
                            <li>Precise values matter (use bar/table)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
