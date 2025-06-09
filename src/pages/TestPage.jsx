import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions, answerOptions } from '../data/questions';
import './TestPage.css';

const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswerClick = (value) => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      navigate('/results', { state: { answers: newAnswers } });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / questions.length) * 100;

  return (
    <div className="test-container container section">
      <div className="test-card">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="question-section">
          <p className="statement-label">Statement {currentQuestionIndex + 1}/{questions.length}</p>
          <p className="question-text">{currentQuestion.statement}</p>
        </div>
        <div className="answer-section likert-scale">
          {answerOptions.map((option) => (
            <button
              key={option.value}
              className="btn answer-btn"
              onClick={() => handleAnswerClick(option.value)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage; 