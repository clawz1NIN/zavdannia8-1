import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Physics from './pages/01-Physics';
import MathVideo from './pages/02-MathVideo';
import History from './pages/03-History';
import Logic from './pages/04-Logic';
import TechnologyPresentation from './pages/05-TechnologyPresentation';
import SciFiStory from './pages/06-SciFiStory';
import AIAccuracyAnalysis from './pages/07-AIAccuracyAnalysis';
import SmartDevicesTale from './pages/08-SmartDevicesTale';
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
