import React, { useEffect, useState } from 'react';
import { miniQuizData } from '../../../data/mini-quiz-data';
import Question from './Question';
import Result from './Result';
import '../../../styles/MiniQuiz.css';

const axisScores = {
  'IE': 0,  // Introversion/Extraversion
  'SN': 0,  // Sensing/Intuition
  'TF': 0,  // Thinking/Feeling
  'JP': 0,  // Judging/Perceiving
};

const MiniQuiz = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState(axisScores);
  const [result, setResult] = useState(null);
  const [resultKey, setResultKey] = useState(null);

  const STORAGE_KEY = 'miniQuizState_v1';

  // Load saved state on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      if (typeof saved !== 'object' || saved === null) return;

      if (saved.scores && typeof saved.currentQuestionIndex === 'number') {
        setScores({ ...axisScores, ...saved.scores });
        setCurrentQuestionIndex(saved.currentQuestionIndex);
        setIsQuizStarted(!!saved.isQuizStarted);
      }

      if (saved.resultKey) {
        setResultKey(saved.resultKey);
        const reconstructed = miniQuizData.results[saved.resultKey];
        if (reconstructed) setResult(reconstructed);
      }
    } catch (e) {
      console.warn('Failed to load saved mini quiz state:', e);
    }
  }, []);

  // Persist state on changes
  useEffect(() => {
    const toSave = {
      isQuizStarted,
      currentQuestionIndex,
      scores,
      resultKey,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.warn('Failed to persist mini quiz state:', e);
    }
  }, [isQuizStarted, currentQuestionIndex, scores, resultKey]);

  const handleAnswer = (value) => {
    const question = miniQuizData.questions[currentQuestionIndex];
    
    // Update axis scores based on the mapping
    const newScores = { ...scores };
    question.mapping.forEach(mapping => {
      const axis = mapping.axis;
      const direction = mapping.direction;
      newScores[axis] += value * direction;
    });
    setScores(newScores);

    if (currentQuestionIndex < miniQuizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores) => {
    // Determine personality type based on axis scores
    const personalityType = 
      (finalScores.IE >= 0 ? 'E' : 'I') +
      (finalScores.SN >= 0 ? 'N' : 'S') +
      (finalScores.TF >= 0 ? 'F' : 'T') +
      (finalScores.JP >= 0 ? 'P' : 'J');
    
    setResultKey(personalityType);
    setResult(miniQuizData.results[personalityType]);
  };

  const restartQuiz = () => {
    setIsQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScores(axisScores);
    setResult(null);
    setResultKey(null);
  }

  const resetProgress = () => {
    setIsQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScores(axisScores);
    setResult(null);
    setResultKey(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear mini quiz state:', e);
    }
  };

  if (!isQuizStarted) {
    return (
      <div className="mini-quiz-card">
        <div className="quiz-image-container">
            <img src="https://placehold.co/400x200/6366f1/ffffff?text=Personality+Quiz" alt="Personality Quiz" className="quiz-image" />
        </div>
        <div className="quiz-content">
          <h1 className="quiz-title">What's Your Personality Type?</h1>
          <p className="quiz-description">
            Discover your MBTI personality type by answering these thought-provoking questions about your preferences and behaviors.
          </p>
          <button className="start-quiz-btn" onClick={() => setIsQuizStarted(true)}>
            Start Quiz
          </button>
          <button className="start-quiz-btn" onClick={resetProgress} style={{ marginTop: '12px' }}>
            Reset Progress
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-modal">
      <div className="quiz-modal-content">
        <button className="close-modal-btn" onClick={() => setIsQuizStarted(false)}>&times;</button>
        {result ? (
          <>
            <Result result={result} />
            <button className="start-quiz-btn" onClick={restartQuiz} style={{marginTop: '20px'}}>
              Retake Quiz
            </button>
          </>
        ) : (
          <Question
            question={miniQuizData.questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={miniQuizData.questions.length}
          />
        )}
      </div>
    </div>
  );
};

export default MiniQuiz;