import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Physics from './pages/Physics';
import MathVideo from './pages/MathVideo';
import History from './pages/History';
import Logic from './pages/Logic';
import TechnologyPresentation from './pages/TechnologyPresentation';
import SciFiStory from './pages/SciFiStory';
import AIAccuracyAnalysis from './pages/AIAccuracyAnalysis';
import SmartDevicesTale from './pages/SmartDevicesTale';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/math-video" element={<MathVideo />} />
          <Route path="/history" element={<History />} />
          <Route path="/logic" element={<Logic />} />
          <Route path="/technology-presentation" element={<TechnologyPresentation />} />
          <Route path="/scifi-story" element={<SciFiStory />} />
          <Route path="/ai-accuracy-analysis" element={<AIAccuracyAnalysis />} />
          <Route path="/smart-devices-tale" element={<SmartDevicesTale />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
