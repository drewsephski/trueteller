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
import AIReportPage from './pages/AIReportPage'; // Import the new page
import MiniQuiz from './components/MiniGames/miniQuiz/MiniQuiz'; // Import MiniQuiz component
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import AuthWrapper from './components/AuthWrapper';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import './styles/App.css';

function App() {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
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
            <Route path="/profile" element={
              <AuthWrapper>
                <UserProfile />
              </AuthWrapper>
            } />
            <Route path="/leaderboard" element={
              <AuthWrapper>
                <Leaderboard />
              </AuthWrapper>
            } />
            <Route path="/compare" element={
              <AuthWrapper>
                <FriendComparison />
              </AuthWrapper>
            } />
            <Route path="/ai-report" element={
              <AuthWrapper>
                <AIReportPage />
              </AuthWrapper>
            } />
            <Route path="/mini-quiz" element={<MiniQuiz />} />
            <Route path="/mini-quiz/friends" element={<MiniQuiz />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
        </main>
      </div>
    </ClerkProvider>
  );
}

export default App;
