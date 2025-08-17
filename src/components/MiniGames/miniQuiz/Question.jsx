import React from 'react';

const Question = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  const likertScale = [
    { value: -2, label: 'Strongly Disagree', color: '#ef4444' },
    { value: -1, label: 'Disagree', color: '#f97316' },
    { value: 0, label: 'Neutral', color: '#eab308' },
    { value: 1, label: 'Agree', color: '#22c55e' },
    { value: 2, label: 'Strongly Agree', color: '#16a34a' }
  ];

  return (
    <div className="question-container">
      <div className="question-progress">
        <span className="question-number">Question {questionNumber} of {totalQuestions}</span>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <h2 className="quiz-question">{question.statement}</h2>
      
      <div className="likert-scale">
        {likertScale.map((option) => (
          <button
            key={option.value}
            className="likert-option"
            onClick={() => onAnswer(option.value)}
            style={{ backgroundColor: option.color }}
          >
            <span className="likert-label">{option.label}</span>
            <span className="likert-value">{option.value > 0 ? '+' : ''}{option.value}</span>
          </button>
        ))}
      </div>
      
      <div className="likert-legend">
        <span className="legend-item" style={{ color: '#ef4444' }}>Strongly Disagree</span>
        <span className="legend-item" style={{ color: '#f97316' }}>Disagree</span>
        <span className="legend-item" style={{ color: '#eab308' }}>Neutral</span>
        <span className="legend-item" style={{ color: '#22c55e' }}>Agree</span>
        <span className="legend-item" style={{ color: '#16a34a' }}>Strongly Agree</span>
      </div>
    </div>
  );
};

export default Question;