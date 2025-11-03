export const lineData = {
    labels: ["Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"],
    datasets: [
        {
            label: "Steps",
            data: [3000, 4500, 4800, 5600, 6500, 7000, 9990],
            borderColor: "rgba(255, 255, 255, 1)",
            tension: 0.2,
        },
        {
            label : "ibrahims steps",
            data:[1100 ,2200,2300,3500, 11500, 5000, 19000],
            borderColor : "rgba(86, 84, 158, 1)"
        }
    ],
};


export const BarData = {
    labels: ["Rent", "Groceries", "utilities", "Entertainment", "Transportation"],
    datasets: [
        {
            label: "Expenses",
            data: [3000, 4500, 4800, 5600, 7000],
            backgroundColor : "#f19595ff",
            borderColor: "rgba(255, 255, 255, 1)",
            borderWidth: 4,
        }
    ],
};


export const PieData = {
    labels: ["Facebook", "Instagram", "Twitter", "Youtube", "Linkedin"],
    datasets: [
        {
            label: "Time Spent",
            data: [120,60,30,90,45],
            backgroundColor : [
                                "rgba(241, 149, 149, 1)",
                                "rgba(77, 151, 58, 1)",
                                "rgba(26, 30, 51, 1)",
                                "rgba(136, 135, 99, 1)",
                                "rgba(202, 77, 171, 1)",
                                ],
            hoverOffset: 4,
        }
    ],
};


