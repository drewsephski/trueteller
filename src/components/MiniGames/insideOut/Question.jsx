import React from 'react';

const Question = ({ question, onAnswer }) => {
  return (
    <div>
      <h2 className="quiz-question">{question.question}</h2>
      <div className="quiz-options">
        {question.options.map((option) => (
          <button
            key={option.value}
            className="quiz-option-btn"
            onClick={() => onAnswer(option.value)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question; 