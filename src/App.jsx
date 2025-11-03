import './App.css'
import { LineGraph } from './compounents/Line'
import { BarChart } from './compounents/Bar'
import { PieChart } from './compounents/Pie'
import { DoughnutChart } from './compounents/Doughnut'
import { RadarChart } from './compounents/Radar'
import { PolarAreaChart } from './compounents/PolarArea'
import { ScatterChart } from './compounents/Scatter'
import { BubbleChart } from './compounents/Bubble'
import { MixedChart } from './compounents/Mixed'
import { ChartPlayground } from './compounents/ChartPlayground'

function App() {
  return (
    <>
      <header>
        <h1> Chart.js Learning Repository</h1>
        <p>Interactive examples of all major Chart.js chart types</p>
      </header>

      <main>
        {/* Interactive Playground */}
        <section className="chart-section">
          <ChartPlayground />
        </section>

        {/* Line Chart */}
        <section className="chart-section">
          <h2> Line Chart</h2>
          <p>Best for showing trends over time</p>
          <LineGraph />
        </section>

        {/* Bar Chart */}
        <section className="chart-section">
          <h2> Bar Chart</h2>
          <p>Ideal for comparing categories</p>
          <BarChart />
        </section>

        {/* Pie Chart */}
        <section className="chart-section">
          <h2> Pie Chart</h2>
          <p>Perfect for showing proportions</p>
          <PieChart />
        </section>

        {/* Doughnut Chart */}
        <section className="chart-section">
          <h2> Doughnut Chart</h2>
          <p>Similar to pie chart with a hollow center</p>
          <DoughnutChart />
        </section>

        {/* Radar Chart */}
        <section className="chart-section">
          <h2>Radar Chart</h2>
          <p>Great for multivariate data comparison</p>
          <RadarChart />
        </section>

        {/* Polar Area Chart */}
        <section className="chart-section">
          <h2> Polar Area Chart</h2>
          <p>Combines features of pie and radar charts</p>
          <PolarAreaChart />
        </section>

        {/* Scatter Chart */}
        <section className="chart-section">
          <h2>Scatter Chart</h2>
          <p>Shows relationships between two variables</p>
          <ScatterChart />
        </section>

        {/* Bubble Chart */}
        <section className="chart-section">
          <h2>Bubble Chart</h2>
          <p>Displays three dimensions of data</p>
          <BubbleChart />
        </section>

        {/* Mixed Chart */}
        <section className="chart-section">
          <h2>Mixed Chart</h2>
          <p>Combines multiple chart types</p>
          <MixedChart />
        </section>
      </main>

      <footer>
        <p>Built with React + Chart.js | Learn by exploring! 🚀</p>
      </footer>
    </>
  )
}

export default App
