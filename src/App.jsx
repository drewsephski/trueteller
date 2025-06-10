import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import FeedbackPage from './pages/FeedbackPage';
import TestPage from './pages/TestPage';
import ResultsPage from './pages/ResultsPage';
import DetailedResultsPage from './pages/DetailedResultsPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/detailed-results" element={<DetailedResultsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
