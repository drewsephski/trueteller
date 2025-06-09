import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PERSONALITY_TYPES } from '../data/personalityTypes';
import { questions } from '../data/questions';
import IconMapper from '../components/IconMapper';
import './ResultsPage.css';

const ResultsPage = () => {
  const location = useLocation();
  const { answers } = location.state || { answers: [] };

  const calculateResult = () => {
    if (answers.length !== questions.length) {
      return null;
    }

    const scores = { IE: 0, SN: 0, TF: 0, JP: 0 };

    questions.forEach((question, index) => {
      const answerValue = answers[index];
      question.mapping.forEach(map => {
        scores[map.axis] += answerValue * map.direction;
      });
    });

    const firstLetter = scores.IE >= 0 ? 'E' : 'I';
    const secondLetter = scores.SN >= 0 ? 'N' : 'S';
    const thirdLetter = scores.TF >= 0 ? 'F' : 'T';
    const fourthLetter = scores.JP >= 0 ? 'P' : 'J';

    const resultCode = `${firstLetter}${secondLetter}${thirdLetter}${fourthLetter}`;
    
    return PERSONALITY_TYPES[resultCode];
  };

  const result = calculateResult();

  if (!result) {
    return (
      <div className="results-container container section">
        <div className="results-card">
          <h2>Oops!</h2>
          <p>It seems you haven't taken the test yet.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="results-container container section">
      <div className="results-card">
        <h2 className="result-name">You are {result.name} ({result.code})</h2>
        <p className="result-description">{result.description}</p>
        <div className="spirit-animal-section">
          <div className="spirit-animal-emoji"><IconMapper emoji={result.emoji} /></div>
          <h3>Your Spirit Animal is the {result.spiritAnimal}</h3>
          <p>{result.reason}</p>
        </div>
        <div className="results-buttons-container">
          <Link to="/test" className="btn">Take the Test Again</Link>
          <Link to="/detailed-results" state={{ result }} className="btn btn-primary">View Detailed Results</Link>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage; 