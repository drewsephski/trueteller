import { Routes, Route } from 'react-router-dom';
import { AnimeNavBarDemo } from './components/ui/anime-navbar-demo';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import FeedbackPage from './pages/FeedbackPage';
import TestPage from './pages/TestPage';
import ResultsPage from './pages/ResultsPage';
import DetailedResultsPage from './pages/DetailedResultsPage';
import PersonalityTypesPage from './pages/PersonalityTypesPage';
import UserProfile from './components/UserProfile';
import Leaderboard from './components/Leaderboard';
import FriendComparison from './components/FriendComparison';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <AnimeNavBarDemo />
      <main style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/detailed-results" element={<DetailedResultsPage />} />
          <Route path="/personality-types" element={<PersonalityTypesPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/compare" element={<FriendComparison />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
