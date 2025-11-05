import React, { useState, useRef } from "react";
import { Line, Bar, Pie, Doughnut, Radar, PolarArea, Scatter, Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import "./ChartPlayground.css";


// Register ALL Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const ChartPlayground = () => {
    const chartRef = useRef(null);
    const [chartType, setChartType] = useState("line");
    const [chartTitle, setChartTitle] = useState("Chart Title");
    const [chartSubtitle, setChartSubtitle] = useState("Add Subtitle Here");
    
    // Table-based data structure
    const [tableData, setTableData] = useState({
        columns: ["January", "February", "March", "April", "May", "June", "July"],
        rows: [
            { name: "2023", values: [65, 8, 90, 81, 56, 55, 40] },
            { name: "2024", values: [21, 48, 40, 19, 96, 27, 99] }
        ]
    });

    const [colors] = useState([
        { name: "Blue", value: "rgba(54, 162, 235, 0.6)", border: "rgba(54, 162, 235, 1)" },
        { name: "Green", value: "rgba(75, 192, 192, 0.6)", border: "rgba(75, 192, 192, 1)" },
        { name: "Red", value: "rgba(255, 99, 132, 0.6)", border: "rgba(255, 99, 132, 1)" },
        { name: "Yellow", value: "rgba(255, 206, 86, 0.6)", border: "rgba(255, 206, 86, 1)" },
        { name: "Purple", value: "rgba(153, 102, 255, 0.6)", border: "rgba(153, 102, 255, 1)" },
        { name: "Orange", value: "rgba(255, 159, 64, 0.6)", border: "rgba(255, 159, 64, 1)" }
    ]);

    const [selectedColors, setSelectedColors] = useState([0, 2]); // Indices for row colors

    // Convert table data to Chart.js format
    const generateChartData = () => {
        return {
            labels: tableData.columns,
            datasets: tableData.rows.map((row, idx) => ({
                label: row.name,
                data: row.values,
                backgroundColor: colors[selectedColors[idx] % colors.length].value,
                borderColor: colors[selectedColors[idx] % colors.length].border,
                borderWidth: 2,
                tension: 0.4,
                fill: chartType === "line",
            }))
        };
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { 
                position: "bottom",
                labels: {
                    padding: 15,
                    font: { size: 12 }
                }
            },
            title: { 
                display: true, 
                text: [chartTitle, chartSubtitle],
                font: { size: 18 },
                padding: 20
            },
        },
        scales: chartType !== "pie" && chartType !== "doughnut" && chartType !== "polarArea" ? {
            y: { beginAtZero: true }
        } : {}
    };

    // Add new column
    const addColumn = () => {
        const newColumnName = `Column ${tableData.columns.length + 1}`;
        setTableData({
            columns: [...tableData.columns, newColumnName],
            rows: tableData.rows.map(row => ({
                ...row,
                values: [...row.values, 0]
            }))
        });
    };

    // Remove last column
    const removeColumn = () => {
        if (tableData.columns.length > 1) {
            setTableData({
                columns: tableData.columns.slice(0, -1),
                rows: tableData.rows.map(row => ({
                    ...row,
                    values: row.values.slice(0, -1)
                }))
            });
        }
    };

    // Add new row (dataset)
    const addRow = () => {
        const newRow = {
            name: `Dataset ${tableData.rows.length + 1}`,
            values: new Array(tableData.columns.length).fill(0)
        };
        setTableData({
            ...tableData,
            rows: [...tableData.rows, newRow]
        });
        setSelectedColors([...selectedColors, (selectedColors.length) % colors.length]);
    };

    // Remove last row
    const removeRow = () => {
        if (tableData.rows.length > 1) {
            setTableData({
                ...tableData,
                rows: tableData.rows.slice(0, -1)
            });
            setSelectedColors(selectedColors.slice(0, -1));
        }
    };

    // Update column header
    const updateColumnName = (index, value) => {
        const newColumns = [...tableData.columns];
        newColumns[index] = value;
        setTableData({ ...tableData, columns: newColumns });
    };

    // Update row name
    const updateRowName = (rowIndex, value) => {
        const newRows = [...tableData.rows];
        newRows[rowIndex].name = value;
        setTableData({ ...tableData, rows: newRows });
    };

    // Update cell value
    const updateCellValue = (rowIndex, colIndex, value) => {
        const newRows = [...tableData.rows];
        newRows[rowIndex].values[colIndex] = parseFloat(value) || 0;
        setTableData({ ...tableData, rows: newRows });
    };

    // Export as PNG
    const downloadPNG = () => {
        const chart = chartRef.current;
        if (chart) {
            const url = chart.toBase64Image();
            const link = document.createElement('a');
            link.download = `${chartTitle.replace(/\s+/g, '_')}.png`;
            link.href = url;
            link.click();
        }
    };

    // Export as JSON (data)
    const downloadJSON = () => {
        const dataStr = JSON.stringify({
            title: chartTitle,
            subtitle: chartSubtitle,
            chartType: chartType,
            data: tableData
        }, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${chartTitle.replace(/\s+/g, '_')}_data.json`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
    };

    // Export as CSV
    const downloadCSV = () => {
        let csv = ',' + tableData.columns.join(',') + '\n';
        tableData.rows.forEach(row => {
            csv += row.name + ',' + row.values.join(',') + '\n';
        });
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${chartTitle.replace(/\s+/g, '_')}_data.csv`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
    };

    // Import from CSV
    const importCSV = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                const lines = text.split('\n').filter(line => line.trim());
                if (lines.length > 1) {
                    const headers = lines[0].split(',').slice(1);
                    const rows = lines.slice(1).map(line => {
                        const parts = line.split(',');
                        return {
                            name: parts[0],
                            values: parts.slice(1).map(v => parseFloat(v) || 0)
                        };
                    });
                    setTableData({ columns: headers, rows: rows });
                }
            };
            reader.readAsText(file);
        }
    };

    const renderChart = () => {
        const data = generateChartData();
        const commonProps = { ref: chartRef, data, options };
        
        switch(chartType) {
            case "line": return <Line {...commonProps} />;
            case "bar": return <Bar {...commonProps} />;
            case "pie": return <Pie {...commonProps} />;
            case "doughnut": return <Doughnut {...commonProps} />;
            case "radar": return <Radar {...commonProps} />;
            case "polarArea": return <PolarArea {...commonProps} />;
            default: return <Line {...commonProps} />;
        }
    };

    return (
        <div className="playground-container">
            <h2>Interactive Chart Playground</h2>
            
            <div className="playground-layout">
                {/* Left Panel - Controls */}
                <div className="controls-panel">
                    <section className="control-section">
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

                        <label>Chart Title:</label>
                        <input 
                            type="text" 
                            value={chartTitle}
                            onChange={(e) => setChartTitle(e.target.value)}
                            placeholder="Chart Title"
                        />

                        <label>Subtitle:</label>
                        <input 
                            type="text" 
                            value={chartSubtitle}
                            onChange={(e) => setChartSubtitle(e.target.value)}
                            placeholder="Subtitle"
                        />
                    </section>

                    <section className="control-section">
                        <h3>Dataset Colors</h3>
                        {tableData.rows.map((row, idx) => (
                            <div key={idx} className="color-picker-row">
                                <label>{row.name}:</label>
                                <select 
                                    value={selectedColors[idx]} 
                                    onChange={(e) => {
                                        const newColors = [...selectedColors];
                                        newColors[idx] = parseInt(e.target.value);
                                        setSelectedColors(newColors);
                                    }}
                                >
                                    {colors.map((color, colorIdx) => (
                                        <option key={colorIdx} value={colorIdx}>{color.name}</option>
                                    ))}
                                </select>
                                <div 
                                    className="color-preview" 
                                    style={{ backgroundColor: colors[selectedColors[idx]].value }}
                                />
                            </div>
                        ))}
                    </section>

                    <section className="control-section">
                        <h3>Export Options</h3>
                        <button onClick={downloadPNG} className="export-btn">
                            Download PNG
                        </button>
                        <button onClick={downloadJSON} className="export-btn">
                            Export JSON
                        </button>
                        <button onClick={downloadCSV} className="export-btn">
                            Export CSV
                        </button>
                        <label className="import-btn">
                            Import CSV
                            <input 
                                type="file" 
                                accept=".csv" 
                                onChange={importCSV}
                                style={{ display: 'none' }}
                            />
                        </label>
                    </section>
                </div>

                {/* Center Panel - Chart Display */}
                <div className="chart-display-panel">
                    <div className="chart-wrapper">
                        {renderChart()}
                    </div>
                </div>
            </div>

            {/* Data Table Section */}
            <div className="data-table-section">
                <div className="table-header">
                    <h3>Data Table</h3>
                    <div className="table-controls">
                        <button onClick={addColumn}>+ Column</button>
                        <button onClick={removeColumn}>- Column</button>
                        <button onClick={addRow}>+ Dataset</button>
                        <button onClick={removeRow}>- Dataset</button>
                    </div>
                </div>

                <div className="table-scroll">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Dataset</th>
                                {tableData.columns.map((col, idx) => (
                                    <th key={idx}>
                                        <input
                                            type="text"
                                            value={col}
                                            onChange={(e) => updateColumnName(idx, e.target.value)}
                                            className="header-input"
                                        />
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.rows.map((row, rowIdx) => (
                                <tr key={rowIdx}>
                                    <td>
                                        <input
                                            type="text"
                                            value={row.name}
                                            onChange={(e) => updateRowName(rowIdx, e.target.value)}
                                            className="row-name-input"
                                        />
                                    </td>
                                    {row.values.map((value, colIdx) => (
                                        <td key={colIdx}>
                                            <input
                                                type="number"
                                                value={value}
                                                onChange={(e) => updateCellValue(rowIdx, colIdx, e.target.value)}
                                                className="cell-input"
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
