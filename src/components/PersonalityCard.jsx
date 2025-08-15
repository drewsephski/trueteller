import React, { useState } from 'react';
import PersonalityModal from './PersonalityModal';
import '../styles/PersonalityCard.css';

const PersonalityCard = ({ personalityType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {
    code,
    name,
    description,
    emoji,
    spiritAnimal,
    strengthsWeaknesses,
    personalityTraits,
    whatEnergizesYou,
    careerInsights
  } = personalityType;

  // Extract top 3-4 strengths
  const topStrengths = strengthsWeaknesses?.strengths?.slice(0, 4) || [];
  
  // Extract key traits from personalityTraits description
  const keyTraits = personalityTraits ?
    personalityTraits.split(',').slice(0, 3).map(trait => trait.trim()) : [];

  return (
    <>
      <div className="personality-card">
        <div className="card-header">
          <div className="emoji-container">
            <span className="personality-emoji">{emoji}</span>
          </div>
          <div className="card-title">
            <h3>{name}</h3>
            <span className="personality-code">{code}</span>
          </div>
        </div>

        <div className="card-content">
          <p className="description">{description}</p>

          <div className="spirit-animal">
            <span className="animal-label">Spirit Animal:</span>
            <span className="animal-name">{spiritAnimal}</span>
          </div>

          {/* Key Traits Section */}
          {keyTraits.length > 0 && (
            <div className="traits-section">
              <h4>Key Traits</h4>
              <ul className="bullet-list">
                {keyTraits.map((trait, index) => (
                  <li key={index}>{trait}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Top Strengths Section */}
          {topStrengths.length > 0 && (
            <div className="strengths-section">
              <h4>Top Strengths</h4>
              <ul className="bullet-list">
                {topStrengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
          )}

          {/* What Energizes You Section */}
          {whatEnergizesYou && (
            <div className="energizes-section">
              <h4>What Energizes You</h4>
              <p className="energizes-text">{whatEnergizesYou}</p>
            </div>
          )}

          {/* Career Insights Section */}
          {careerInsights?.careerIdeas && careerInsights.careerIdeas.length > 0 && (
            <div className="career-section">
              <h4>Ideal Careers</h4>
              <ul className="bullet-list">
                {careerInsights.careerIdeas.slice(0, 3).map((career, index) => (
                  <li key={index}>{career}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="card-footer">
          <button
            className="learn-more-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Learn More
          </button>
        </div>
      </div>
      
      {/* Personality Modal */}
      <PersonalityModal
        personalityType={personalityType}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default PersonalityCard;