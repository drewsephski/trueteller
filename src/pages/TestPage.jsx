import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { questions, answerOptions } from '../data/questions';
import '../styles/TestPage.css';

const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [name, setName] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const navigate = useNavigate();

  const [direction, setDirection] = useState(1);

  const handleAnswerSelect = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setDirection(1);
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      navigate('/results', { state: { answers: newAnswers, name } });
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setDirection(-1);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const cuteNames = ["pookie", "pingu", "mogumogu", "peekaboo", "bubbles", "mochi", "pompom", "booplet", "snugglebug",
   "wigglywoo", "nibnib", "pipi", "zuzu", "chonky", "fluffin", "boopie", "nono", "tinky", "blibble",
   "snickerdoodle", "cuppy", "gumdrop", "beebo", "muffin", "wubwub", "tutu", "momo", "sprinkles",
   "giggles", "doodlebug", "pupperoo", "lala", "tinkletop", "oinky", "fizzfuzz", "peanut", "jiggles",
   "cotton", "honeybun", "nibbles", "wiggles", "tofu", "tater", "jellybean", "fuzzle", "snugbug",
   "tinykins", "booboop", "dumdum", "cheekyboo", "scootles", "mimi", "tingting", "flicka", "gigglypoof",
   "baboo", "binky", "mushie", "twinkle", "wompwomp", "tickletoes", "noodle", "squishie", "doodoo",
   "cutiepatootie", "schnookie", "puffin", "crumpet", "kiki", "bonbon", "teacup", "cuddlepuff",
   "twinkie", "bopbop", "snugglemuff", "jiggy", "lulu", "blopblop", "mewmew", "choochu", "smolbean",
   "wigglet", "skippy", "cheeky", "fruityloop", "gogo", "toto", "whoopsie", "squee", "shmoopie",
   "puffypaws", "puddingpop", "fizzles", "rolypoly", "koko", "meepmeep", "tugboat", "cinnabun", "cloverbean",
   "twinklepuff", "booboofluff", "chibi", "snuffly"];
  
  const generateRandomName = () => {
    const randomName = cuteNames[Math.floor(Math.random() * cuteNames.length)];
    setName(randomName.charAt(0).toUpperCase() + randomName.slice(1));
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setName(name.trim().charAt(0).toUpperCase() + name.trim().slice(1));
      setNameSubmitted(true);
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

  if (!nameSubmitted) {
    return (
      <div className="test-container container section">
        <Helmet>
          <title>Personality Test - Discover Your True Self | TrueYouTeller</title>
          <meta name="description" content="Start the TrueYouTeller personality test to discover your true self. Answer a series of fun and engaging questions to get your instant results." />
        </Helmet>
        <div className="test-card">
          <h2 className="welcome-heading">Welcome to the Test</h2>
          <p className="welcome-subheading">Please enter your name to begin.</p>
          <form onSubmit={handleNameSubmit} className="name-form">
            <div className="name-input-container">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="name-input"
              />
              <button type="button" onClick={generateRandomName} className="btn random-name-btn">
                Generate Random Name
              </button>
            </div>
            <button type="submit" className="btn start-btn" disabled={!name.trim()}>
              Start Test
            </button>
          </form>
        </div>
      </div>
    );
  }

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