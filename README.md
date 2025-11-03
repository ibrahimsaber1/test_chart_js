
#  Chart.js Learning Repository

A comprehensive, interactive learning resource for Chart.js with React. This repository provides hands-on examples of all major chart types, a live playground for experimentation, and detailed code examples.

##  Purpose

This repository is designed to help developers:
- Learn Chart.js through practical examples
- Understand different chart types and their use cases
- Experiment with custom data in an interactive playground
- Reference working code for their own projects

##  Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```
# Clone the repository
git clone https://github.com/ibrahimsaber1/learn_chart_js
cd learn_chart_js

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will open at `http://localhost:5173`

## Chart Types Included

### 1. **Line Chart** 
- **Use Case**: Displaying trends over time, continuous data
- **Best For**: Time series data, stock prices, temperature changes
- **Example**: Weekly steps tracking

### 2. **Bar Chart** 
- **Use Case**: Comparing discrete categories
- **Best For**: Survey results, sales by category, monthly expenses
- **Example**: Monthly expense breakdown

### 3. **Pie Chart** 
- **Use Case**: Showing proportions of a whole
- **Best For**: Market share, budget allocation, survey percentages
- **Example**: Social media time distribution

### 4. **Doughnut Chart** 
- **Use Case**: Similar to pie chart with emphasis on individual categories
- **Best For**: Budget distribution, resource allocation
- **Example**: Monthly budget by category

### 5. **Radar Chart** 
- **Use Case**: Comparing multiple variables across categories
- **Best For**: Skills assessment, product comparison, performance metrics
- **Example**: Technical skills evaluation

### 6. **Polar Area Chart** 
- **Use Case**: Showing cyclic data with area emphasis
- **Best For**: Customer satisfaction, periodic measurements
- **Example**: Customer satisfaction scores

### 7. **Scatter Chart** 
- **Use Case**: Showing relationship between two variables
- **Best For**: Correlation analysis, scientific data
- **Example**: Height vs weight distribution

### 8. **Bubble Chart** 
- **Use Case**: Displaying three dimensions of data
- **Best For**: Product analysis, portfolio visualization
- **Example**: Price vs sales vs market share

### 9. **Mixed Chart** 
- **Use Case**: Combining multiple chart types
- **Best For**: Complex data relationships, revenue vs profit
- **Example**: Revenue (bars) and profit (line) over time

##  Interactive Playground

The Chart Playground allows you to:
- Select different chart types
- Input custom labels and values
- Add or remove data points dynamically
- See changes in real-time

Perfect for experimenting before implementing in your own project!

## 🔧 How to Use

### Basic Usage

1. **Import the chart components:**
```
import { LineGraph } from './components/Line'
import { BarChart } from './components/Bar'
```

2. **Use in your JSX:**
```
<LineGraph />
<BarChart />
```

### Creating Custom Data

Edit `fakeData.jsx` to customize chart data:

```
export const lineData = {
    labels: ["Jan", "Feb", "Mar"],
    datasets: [{
        label: "Sales",
        data: ,
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4
    }]
};
```

### Customizing Chart Options

Each chart component has an `options` object you can modify:

```
const options = {
    responsive: true,
    plugins: {
        legend: { position: "top" },
        title: { 
            display: true, 
            text: "Your Chart Title" 
        }
    },
    scales: {
        y: {
            beginAtZero: true
        }
    }
};
```

## Learning Path

1. **Start with the Playground**: Experiment with different chart types and data
2. **Explore Examples**: Check out each chart type implementation
3. **Modify Data**: Edit `fakeData.jsx` to see how charts respond
4. **Customize Options**: Adjust colors, labels, and styling
5. **Build Your Own**: Create new chart components for your project

## 📖 Key Concepts

### Chart.js Registration
All chart elements must be registered:
```
import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ...);
```

### Data Structure
Charts require a specific data structure:
```
{
    labels: ['Label 1', 'Label 2'],
    datasets:,[4]
        // styling properties
    }]
}
```

### Responsive Design
All charts are responsive by default and adapt to container size.

## Customization Tips

- **Colors**: Use rgba() for transparency control
- **Animations**: Enable with `options.animation`
- **Interactions**: Configure hover and click behaviors
- **Tooltips**: Customize with `options.plugins.tooltip`
- **Legends**: Position and style with `options.plugins.legend`

## Dependencies

- React ^18.3.1
- Chart.js ^4.4.0
- react-chartjs-2 ^5.2.0
- Vite (build tool)

##  Contributing

Feel free to:
- Add more chart examples
- Improve documentation
- Suggest new features
- Report bugs

## Additional Resources

- [Chart.js Official Documentation](https://www.chartjs.org/docs/)
- [React Chart.js 2 Documentation](https://react-chartjs-2.js.org/)
- [Chart.js Samples](https://www.chartjs.org/docs/latest/samples/)

## Pro Tips

1. **Performance**: Limit data points for smoother animations
2. **Accessibility**: Always include labels and titles
3. **Mobile**: Test responsiveness on different screen sizes
4. **Colors**: Use consistent color schemes across charts
5. **Data Updates**: Implement proper state management for dynamic data

## Troubleshooting

**Chart not displaying?**
- Check that all required Chart.js components are registered
- Verify data structure matches chart type requirements
- Ensure container has defined height

**Console errors?**
- Update dependencies to latest versions
- Check import paths
- Verify Chart.js element registration

## License

MIT License - feel free to use this for learning and in your projects!

## Show Your Support

If this repository helped you learn Chart.js, please star it and share with others!

---

Happy Charting!✨
