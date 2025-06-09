import React from 'react';
import { Helmet } from 'react-helmet';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaHeart, FaPaintBrush, FaLaughBeam, FaBolt } from 'react-icons/fa';
import { GiCrystalBall } from 'react-icons/gi';
import logo from '../assets/trueyouteller_logo-removebg.png';
import FriendsQuiz from '../components/MiniGames/friends/FriendsQuiz';
import InsideOutQuiz from '../components/MiniGames/insideout/InsideOutQuiz';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Helmet>
        <title>TrueYouTeller - Fun Personality Quizzes to Discover Yourself</title>
        <meta name="description" content="Take our fun and insightful personality quizzes to discover your true self. Get instant results and gain insight into your unique strengths and quirks." />
      </Helmet>
      <header className="landing-header">
        <img src={logo} alt="Crystal Ball" className="crystal-ball-image" />
        <h1>Welcome to TrueYouTeller!</h1>
        <p className="subtitle">Discover your inner self with our fun personality test.</p>
        <Link to="/test" className="btn btn-primary bouncing">Start the Test</Link>
      </header>

      <section className="section container how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon"><FaPencilAlt /></div>
            <h3>1. Take the Test</h3>
            <p>Answer a series of fun and engaging questions.</p>
          </div>
          <div className="step">
            <div className="step-icon"><GiCrystalBall /></div>
            <h3>2. Get Your Result</h3>
            <p>Our magical crystal ball will reveal your personality type.</p>
          </div>
          <div className="step">
            <div className="step-icon"><FaHeart /></div>
            <h3>3. Know Yourself</h3>
            <p>Gain insight into your unique strengths and quirks.</p>
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <h2>Why You'll Love It</h2>
          <div className="features-container">
            <div className="feature-item">
              <div className="feature-icon"><FaPaintBrush /></div>
              <h3>Cute & Modern Design</h3>
              <p>Enjoy a visually delightful experience with a charming, modern interface.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><FaLaughBeam /></div>
              <h3>Fun Questions</h3>
              <p>Our questions are designed to be playful and thought-provoking.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"><FaBolt /></div>
              <h3>Instant Results</h3>
              <p>No waiting! Get your personality analysis right after the last question.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container mini-games">
        <h2>Mini-Games</h2>
        <p>Try our fun mini-games to discover even more about yourself!</p>
        <div className="mini-games-container">
          <FriendsQuiz />
          <InsideOutQuiz />
        </div>
      </section>

      <section className="section container final-cta">
        <h2>Ready to Discover Your True Self?</h2>
        <Link to="/test" className="btn btn-primary bouncing">Let's Go!</Link>
      </section>
    </div>
  );
};

export default LandingPage; 