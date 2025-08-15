import React, { useEffect, useRef } from 'react';
import '../styles/PersonalityModal.css';

const PersonalityModal = ({ personalityType, isOpen, onClose }) => {
  const modalRef = useRef(null);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Handle close button click
  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  if (!isOpen || !personalityType) {
    return null;
  }

  const {
    code,
    name,
    description,
    emoji,
    spiritAnimal,
    reason,
    personalityTraits,
    personalGrowth,
    strengthsWeaknesses,
    whatEnergizesYou,
    whatDrainsYou,
    careerInsights,
    relationshipsConnections,
    socialCirclesFamilyLife,
    culturalConnections
  } = personalityType;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container" ref={modalRef}>
        <button 
          className="modal-close-btn" 
          onClick={handleCloseClick}
          aria-label="Close modal"
        >
          &times;
        </button>
        
        <div className="modal-content">
          {/* Header Section */}
          <div className="modal-header">
            <div className="modal-emoji-container">
              <span className="modal-personality-emoji">{emoji}</span>
            </div>
            <div className="modal-title-section">
              <h2 className="modal-personality-name">{name}</h2>
              <span className="modal-personality-code">{code}</span>
            </div>
          </div>

          {/* Core Identity Section */}
          <div className="modal-section core-identity-section">
            <h3 className="section-title">Core Identity</h3>
            <div className="section-content">
              <p className="personality-description">{description}</p>
              
              <div className="spirit-animal-info">
                <div className="spirit-animal-item">
                  <span className="animal-label">Spirit Animal:</span>
                  <span className="animal-name">{spiritAnimal}</span>
                </div>
                <div className="spirit-animal-item">
                  <span className="animal-label">Reason:</span>
                  <span className="animal-reason">{reason}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personality Traits & Growth Section */}
          <div className="modal-section traits-growth-section">
            <h3 className="section-title">Personality Traits & Growth</h3>
            <div className="section-content">
              <div className="personality-traits">
                <h4>Key Traits</h4>
                <p className="traits-description">{personalityTraits}</p>
              </div>
              
              <div className="personal-growth">
                <h4>Personal Growth</h4>
                <p className="growth-description">{personalGrowth}</p>
              </div>
            </div>
          </div>

          {/* Strengths & Weaknesses Section */}
          <div className="modal-section strengths-weaknesses-section">
            <h3 className="section-title">Strengths & Weaknesses</h3>
            <div className="section-content">
              <div className="strengths-container">
                <h4 className="subsection-title">Strengths</h4>
                <ul className="bullet-list">
                  {strengthsWeaknesses?.strengths?.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
              
              <div className="weaknesses-container">
                <h4 className="subsection-title">Weaknesses</h4>
                <ul className="bullet-list">
                  {strengthsWeaknesses?.weaknesses?.map((weakness, index) => (
                    <li key={index}>{weakness}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Energy & Drains Section */}
          <div className="modal-section energy-section">
            <h3 className="section-title">Energy & Drains</h3>
            <div className="section-content">
              <div className="energizes-container">
                <h4 className="subsection-title">What Energizes You</h4>
                <p className="energy-description">{whatEnergizesYou}</p>
              </div>
              
              <div className="drains-container">
                <h4 className="subsection-title">What Drains You</h4>
                <p className="energy-description">{whatDrainsYou}</p>
              </div>
            </div>
          </div>

          {/* Career Insights Section */}
          <div className="modal-section career-section">
            <h3 className="section-title">Career Insights</h3>
            <div className="section-content">
              <div className="career-path">
                <h4 className="subsection-title">Career Path</h4>
                <p className="career-description">{careerInsights?.careerPath}</p>
              </div>
              
              <div className="career-workspace">
                <h4 className="subsection-title">Workplace Habits</h4>
                <p className="career-description">{careerInsights?.workspaceHabits}</p>
              </div>
              
              <div className="career-ideas">
                <h4 className="subsection-title">Ideal Careers</h4>
                <ul className="bullet-list">
                  {careerInsights?.careerIdeas?.map((career, index) => (
                    <li key={index}>{career}</li>
                  ))}
                </ul>
              </div>
              
              <div className="career-strengths-weaknesses">
                <h4 className="subsection-title">Career Strengths & Weaknesses</h4>
                <div className="career-sw-container">
                  <div className="career-sw-item">
                    <h5>Strengths</h5>
                    <ul className="bullet-list">
                      {careerInsights?.careerStrengthsWeaknesses?.strengths?.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="career-sw-item">
                    <h5>Weaknesses</h5>
                    <ul className="bullet-list">
                      {careerInsights?.careerStrengthsWeaknesses?.weaknesses?.map((weakness, index) => (
                        <li key={index}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Relationships Section */}
          <div className="modal-section relationships-section">
            <h3 className="section-title">Relationship Intelligence</h3>
            <div className="section-content">
              <div className="relationships-description">
                <h4 className="subsection-title">Your Relationships</h4>
                <p className="relationship-text">{relationshipsConnections?.yourRelationships}</p>
              </div>
              
              <div className="relationship-strengths-weaknesses">
                <h4 className="subsection-title">Relationship Strengths & Weaknesses</h4>
                <div className="relationship-sw-container">
                  <div className="relationship-sw-item">
                    <h5>Strengths</h5>
                    <ul className="bullet-list">
                      {relationshipsConnections?.relationshipStrengthsWeaknesses?.strengths?.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="relationship-sw-item">
                    <h5>Weaknesses</h5>
                    <ul className="bullet-list">
                      {relationshipsConnections?.relationshipStrengthsWeaknesses?.weaknesses?.map((weakness, index) => (
                        <li key={index}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="love-language">
                <h4 className="subsection-title">Your Love Language</h4>
                <p className="love-language-text">{relationshipsConnections?.yourLoveLanguage}</p>
              </div>
            </div>
          </div>

          {/* Social & Family Section */}
          <div className="modal-section social-family-section">
            <h3 className="section-title">Social & Family Dynamics</h3>
            <div className="section-content">
              <div className="friendships">
                <h4 className="subsection-title">Friendships</h4>
                <p className="social-description">{socialCirclesFamilyLife?.friendships?.description}</p>
                <div className="social-strengths-weaknesses">
                  <div className="social-sw-item">
                    <h5>Strengths</h5>
                    <ul className="bullet-list">
                      {socialCirclesFamilyLife?.friendships?.strengths?.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="social-sw-item">
                    <h5>Weaknesses</h5>
                    <ul className="bullet-list">
                      {socialCirclesFamilyLife?.friendships?.weaknesses?.map((weakness, index) => (
                        <li key={index}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="parenthood">
                <h4 className="subsection-title">Parenthood</h4>
                <p className="social-description">{socialCirclesFamilyLife?.parenthood?.description}</p>
                <div className="social-strengths-weaknesses">
                  <div className="social-sw-item">
                    <h5>Strengths</h5>
                    <ul className="bullet-list">
                      {socialCirclesFamilyLife?.parenthood?.strengths?.map((strength, index) => (
                        <li key={index}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="social-sw-item">
                    <h5>Weaknesses</h5>
                    <ul className="bullet-list">
                      {socialCirclesFamilyLife?.parenthood?.weaknesses?.map((weakness, index) => (
                        <li key={index}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Connections Section */}
          <div className="modal-section cultural-section">
            <h3 className="section-title">Cultural Connections</h3>
            <div className="section-content">
              <div className="famous-matches">
                <h4 className="subsection-title">Famous Character Matches</h4>
                <ul className="bullet-list">
                  {culturalConnections?.famousMatches?.map((match, index) => (
                    <li key={index}>{match}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityModal;