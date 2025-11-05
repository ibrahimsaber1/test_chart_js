import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { LineChartsPage } from './pages/ChartPage/LineChartsPage';
import { BarChartsPage } from './pages/ChartPage/BarChartsPage';

import { PieChartsPage } from './pages/ChartPage/PieChartsPage';
import { RadarChartsPage } from './pages/ChartPage/RadarChartsPage';
import { ScatterChartsPage } from './pages/ChartPage/ScatterChartsPage';
import { MixedChartsPage } from './pages/ChartPage/MixedChartsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/line-charts" element={<LineChartsPage />} />
            <Route path="/bar-charts" element={<BarChartsPage />} />
            <Route path="/pie-charts" element={<PieChartsPage />} />
            <Route path="/radar-charts" element={<RadarChartsPage />} />
            <Route path="/scatter-charts" element={<ScatterChartsPage />} />
            <Route path="/mixed-charts" element={<MixedChartsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
