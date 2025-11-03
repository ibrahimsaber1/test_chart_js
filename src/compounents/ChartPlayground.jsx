import React, { useState } from "react";
import { Line, Bar, Pie, Doughnut, Radar, PolarArea, Scatter, Bubble } from "react-chartjs-2";
import "./ChartPlayground.css";

export const ChartPlayground = () => {
    const [chartType, setChartType] = useState("line");
    const [customData, setCustomData] = useState({
        labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
        values: [12, 19, 3, 5, 2]
    });

    const chartData = {
        labels: customData.labels,
        datasets: [{
            label: "Custom Dataset",
            data: customData.values,
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 2,
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { 
                display: true, 
                text: "Interactive Chart Playground" 
            },
        },
    };

    const handleLabelChange = (index, value) => {
        const newLabels = [...customData.labels];
        newLabels[index] = value;
        setCustomData({ ...customData, labels: newLabels });
    };

    const handleValueChange = (index, value) => {
        const newValues = [...customData.values];
        newValues[index] = parseFloat(value) || 0;
        setCustomData({ ...customData, values: newValues });
    };

    const addDataPoint = () => {
        setCustomData({
            labels: [...customData.labels, `Label ${customData.labels.length + 1}`],
            values: [...customData.values, 0]
        });
    };

    const removeDataPoint = () => {
        if (customData.labels.length > 1) {
            setCustomData({
                labels: customData.labels.slice(0, -1),
                values: customData.values.slice(0, -1)
            });
        }
    };

    const renderChart = () => {
        switch(chartType) {
            case "line": return <Line data={chartData} options={options} />;
            case "bar": return <Bar data={chartData} options={options} />;
            case "pie": return <Pie data={chartData} options={options} />;
            case "doughnut": return <Doughnut data={chartData} options={options} />;
            case "radar": return <Radar data={chartData} options={options} />;
            case "polarArea": return <PolarArea data={chartData} options={options} />;
            default: return <Line data={chartData} options={options} />;
        }
    };

    return (
        <div className="playground-container">
            <h2>🎨 Chart Playground</h2>
            <div className="playground-content">
                <div className="controls">
                    <h3>Chart Settings</h3>
                    
                    <label>Chart Type:</label>
                    <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
                        <option value="line">Line Chart</option>
                        <option value="bar">Bar Chart</option>
                        <option value="pie">Pie Chart</option>
                        <option value="doughnut">Doughnut Chart</option>
                        <option value="radar">Radar Chart</option>
                        <option value="polarArea">Polar Area Chart</option>
                    </select>

                    <h3>Data Points</h3>
                    {customData.labels.map((label, index) => (
                        <div key={index} className="data-input">
                            <input
                                type="text"
                                value={label}
                                onChange={(e) => handleLabelChange(index, e.target.value)}
                                placeholder="Label"
                            />
                            <input
                                type="number"
                                value={customData.values[index]}
                                onChange={(e) => handleValueChange(index, e.target.value)}
                                placeholder="Value"
                            />
                        </div>
                    ))}
                    
                    <div className="button-group">
                        <button onClick={addDataPoint}>+ Add Point</button>
                        <button onClick={removeDataPoint}>- Remove Point</button>
                    </div>
                </div>

                <div className="chart-display">
                    {renderChart()}
                </div>
            </div>
        </div>
    );
};
