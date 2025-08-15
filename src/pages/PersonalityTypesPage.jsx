import React from 'react';
import { Helmet } from 'react-helmet';
import PersonalityCard from '../components/PersonalityCard';
import '../styles/PersonalityTypesPage.css';
import { PERSONALITY_TYPES } from '../data/personalityTypes';

const PersonalityTypesPage = () => {
  const personalityTypesArray = Object.values(PERSONALITY_TYPES);

  return (
    <div className="personality-types-page">
      <Helmet>
        <title>All Personality Types - TrueYouTeller</title>
        <meta name="description" content="Explore all 16 personality types. Discover the unique characteristics, strengths, and insights of each personality type." />
      </Helmet>
      
      <div className="page-header">
        <h1>Discover All Personality Types</h1>
        <p>Explore the 16 types to understand how you think, decide, and connect.</p>
      </div>

      <div className="personality-types-grid">
        {personalityTypesArray.map((personalityType) => (
          <PersonalityCard 
            key={personalityType.code} 
            personalityType={personalityType} 
          />
        ))}
      </div>

      <div className="page-footer">
        <div className="info-section">
          <h2>About the 16 Personality Types</h2>
          <p>
            The MBTI groups preferences across four dimensions: Energy (Introversion ↔ Extraversion),
            Information (Sensing ↔ Intuition), Decisions (Thinking ↔ Feeling), and Structure (Judging ↔ Perceiving).
          </p>
          <p>
            Knowing your type won’t box you in—it highlights patterns in how you process information, make choices,
            and relate to others. Use it as a lens for self-awareness and better collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalityTypesPage;