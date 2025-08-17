import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useUser } from '@clerk/clerk-react';
import { questions, answerOptions } from '../data/questions';
import '../styles/TestPage.css';

const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const [direction, setDirection] = useState(1);

  // Skip name input if user is authenticated
  useEffect(() => {
    if (isLoaded && user) {
      // User is authenticated, skip name input
    }
  }, [user, isLoaded]);

  const handleAnswerSelect = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setDirection(1);
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      navigate('/results', { state: { answers: newAnswers } });
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setDirection(-1);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Show loading while checking auth status
  if (!isLoaded) {
    return (
      <div className="test-container container section">
        <div className="test-card">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  // If user is not authenticated, show name input form
  if (!user) {
    return (
      <div className="test-container container section">
        <Helmet>
          <title>Personality Test - Discover Your True Self | TrueYouTeller</title>
          <meta name="description" content="Start the TrueYouTeller personality test to discover your true self. Answer a series of fun and engaging questions to get your instant results." />
        </Helmet>
        <div className="test-card">
          <h2 className="welcome-heading">Welcome to the Test</h2>
          <p className="welcome-subheading">Please enter your name to begin.</p>
          <div className="name-input-container">
            <input
              type="text"
              placeholder="Enter your name"
              className="name-input"
            />
            <button className="btn start-btn">
              Start Test
            </button>
          </div>
          <p className="auth-prompt">
            For a better experience, <a href="/sign-in">sign in</a> to save your progress and earn rewards!
          </p>
        </div>
      </div>
    );
  }

  // If user is authenticated, start quiz directly
  return (
    <div className="test-container container section">
      <Helmet>
        <title>Personality Test - Discover Your True Self | TrueYouTeller</title>
        <meta name="description" content="Start the TrueYouTeller personality test to discover your true self. Answer a series of fun and engaging questions to get your instant results." />
      </Helmet>
      <div className="test-card">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentQuestionIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="question-container"
          >
            <div className="question-section">
              <p className="statement-label">Statement {currentQuestionIndex + 1}/{questions.length}</p>
              <p className="question-text">{currentQuestion.statement}</p>
            </div>
            <div className="answer-section likert-scale">
              {answerOptions.map((option) => (
                <button
                  key={option.value}
                  className={`btn answer-btn ${answers[currentQuestionIndex] === option.value ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(option.value)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="navigation-buttons">
          <button
            className="btn prev-btn"
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestPage;