export const lineData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            label: "Steps",
            data: [3000, 4500, 4800, 5600, 6500, 7000, 9990],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            tension: 0.4,
            fill: true,
        },
        {
            label: "Ibrahim's Steps",
            data: [1100, 2200, 2300, 3500, 11500, 5000, 19000],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            tension: 0.4,
            fill: true,
        }
    ],
};

export const BarData = {
    labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
    datasets: [
        {
            label: "Monthly Expenses ($)",
            data: [1200, 450, 200, 300, 180],
            backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 2,
        }
    ],
};

export const PieData = {
    labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
    datasets: [
        {
            label: "Time Spent (minutes)",
            data: [120, 60, 30, 90, 45],
            backgroundColor: [
                "rgba(59, 89, 152, 0.8)",
                "rgba(225, 48, 108, 0.8)",
                "rgba(29, 161, 242, 0.8)",
                "rgba(255, 0, 0, 0.8)",
                "rgba(10, 102, 194, 0.8)",
            ],
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 2,
            hoverOffset: 4,
        }
    ],
};

// New data for additional charts
export const DoughnutData = {
    labels: ["Housing", "Food", "Healthcare", "Education", "Savings", "Other"],
    datasets: [
        {
            label: "Budget Allocation (%)",
            data: [30, 20, 15, 10, 15, 10],
            backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
            ],
            borderWidth: 2,
            hoverOffset: 10,
        }
    ],
};

export const RadarData = {
    labels: ["JavaScript", "Python", "React", "Node.js", "SQL", "Docker"],
    datasets: [
        {
            label: "Your Skills",
            data: [85, 90, 80, 75, 88, 70],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(54, 162, 235, 1)",
        },
        {
            label: "Industry Average",
            data: [70, 75, 78, 72, 80, 65],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
        }
    ],
};

export const PolarAreaData = {
    labels: ["Product Quality", "Customer Service", "Delivery Speed", "Price", "Packaging"],
    datasets: [
        {
            label: "Satisfaction Score",
            data: [85, 92, 78, 88, 90],
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
            ],
            borderWidth: 2,
        }
    ],
};

export const ScatterData = {
    datasets: [
        {
            label: "Men",
            data: [
                { x: 165, y: 65 },
                { x: 170, y: 70 },
                { x: 175, y: 75 },
                { x: 180, y: 80 },
                { x: 185, y: 85 },
                { x: 172, y: 68 },
                { x: 178, y: 78 },
            ],
            backgroundColor: "rgba(54, 162, 235, 0.8)",
        },
        {
            label: "Women",
            data: [
                { x: 155, y: 52 },
                { x: 160, y: 58 },
                { x: 165, y: 60 },
                { x: 170, y: 65 },
                { x: 162, y: 55 },
                { x: 168, y: 63 },
            ],
            backgroundColor: "rgba(255, 99, 132, 0.8)",
        }
    ],
};

export const BubbleData = {
    datasets: [
        {
            label: "Product A",
            data: [
                { x: 20, y: 500, r: 15 },
                { x: 25, y: 450, r: 12 },
                { x: 30, y: 400, r: 10 },
            ],
            backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
        {
            label: "Product B",
            data: [
                { x: 15, y: 600, r: 20 },
                { x: 18, y: 550, r: 18 },
                { x: 22, y: 500, r: 16 },
            ],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
        },
        {
            label: "Product C",
            data: [
                { x: 35, y: 350, r: 8 },
                { x: 40, y: 300, r: 7 },
                { x: 45, y: 280, r: 6 },
            ],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
        }
    ],
};

export const MixedData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            type: "bar",
            label: "Revenue ($1000s)",
            data: [12, 19, 15, 25, 22, 30],
            backgroundColor: "rgba(54, 162, 235, 0.6)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
        },
        {
            type: "line",
            label: "Profit ($1000s)",
            data: [3, 5, 4, 8, 7, 10],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            tension: 0.4,
            fill: true,
        }
    ],
};
