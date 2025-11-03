import './App.css'
import {LineGraph} from './compounents/Line'
import {BarChart} from './compounents/Bar'
import {PieChart} from './compounents/Pie'


function App() {
  return (
    <>
      <div>this is a test for react.js library  </div>
      <br/><br/>
      <LineGraph />
      <br/><br/>
      <BarChart />
      <br/><br/>
      <PieChart />
    </>
  )
}

export default App
