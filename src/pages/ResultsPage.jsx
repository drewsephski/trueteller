import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, Link } from 'react-router-dom';
import { PERSONALITY_TYPES } from '../data/personalityTypes';
import { questions } from '../data/questions';
import { saveTestResult, getOrCreateUserProfile, updateUserXP, updateUserStreak, addAchievement, addPersonalityTypeDiscovered } from '../firebase/config';
import { ACHIEVEMENTS, XP_REWARDS } from '../data/gamificationData';
import SocialShare from '../components/SocialShare';
import '../styles/ResultsPage.css';

const ResultsPage = () => {
  const location = useLocation();
  const { answers, name } = location.state || { answers: [], name: '' };
  const hasSaved = useRef(false);
  const [showSocialShare, setShowSocialShare] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [xpGained, setXpGained] = useState(0);
  const [newAchievements, setNewAchievements] = useState([]);
  const [levelUp, setLevelUp] = useState(false);

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

  // Process gamification features when result is available
  useEffect(() => {
    const processGamification = async () => {
      if (!result || !name || answers.length === 0 || hasSaved.current) return;

      hasSaved.current = true;
      
      try {
        // Get or create user profile
        const profile = await getOrCreateUserProfile(name);
        setUserProfile(profile);
        
        // Calculate XP to award
        let totalXP = XP_REWARDS.COMPLETING_QUIZ;
        
        // Check for achievements
        const achievements = [];
        
        // First quiz achievement
        if (profile.totalQuizzes === 0) {
          achievements.push(ACHIEVEMENTS.FIRST_QUIZ);
          totalXP += XP_REWARDS.ACHIEVEMENT_UNLOCKED('FIRST_QUIZ');
        }
        
        // Quiz master achievement (5 quizzes)
        if (profile.totalQuizzes + 1 >= 5) {
          achievements.push(ACHIEVEMENTS.QUIZ_MASTER);
          totalXP += XP_REWARDS.ACHIEVEMENT_UNLOCKED('QUIZ_MASTER');
        }
        
        // Explorer achievement (3 different types)
        if (profile.personalityTypesDiscovered?.length >= 3) {
          achievements.push(ACHIEVEMENTS.EXPLORER);
          totalXP += XP_REWARDS.ACHIEVEMENT_UNLOCKED('EXPLORER');
        }
        
        // Add discovered personality type
        await addPersonalityTypeDiscovered(name, result.code);
        
        // Update user XP and level
        const xpResult = await updateUserXP(name, totalXP);
        setXpGained(totalXP);
        
        // Update streak
        const newStreak = await updateUserStreak(name, new Date());
        
        // Add achievements
        if (achievements.length > 0) {
          for (const achievement of achievements) {
            await addAchievement(name, achievement.id);
          }
          setNewAchievements(achievements);
        }
        
        // Check for level up
        if (xpResult && xpResult.level > (profile.level || 1)) {
          setLevelUp(true);
        }
        
        // Save the test result
        await saveTestResult(name, result, answers);
        
        console.log('Gamification processed successfully!');
      } catch (error) {
        console.error('Failed to process gamification:', error);
        hasSaved.current = false; // Reset on error so it can retry
      }
    };

    processGamification();
  }, [result, name, answers]);

  if (!result) {
    return (
      <div className="results-container container section">
        <Helmet>
          <title>Test Results | TrueYouTeller</title>
          <meta name="description" content="Complete the personality test to see your results and discover your true self." />
        </Helmet>
        <div className="results-card">
          <h2>Oops!</h2>
          <p>It seems you haven't taken the test yet.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  const getSpiritAnimalImage = (spiritAnimal) => {
    let animalName = spiritAnimal.split(' ')[1].toLowerCase();
    if (animalName === 'dolphin') {
      animalName = 'dophin';
    }
    return new URL(`../assets/animals/${animalName}.jpg`, import.meta.url).href;
  };

  const handleShare = () => {
    setShowSocialShare(true);
  };

  return (
    <>
      <div className="results-container container section">
        <Helmet>
          <title>Your Personality Result: {result.name} ({result.code}) | TrueYouTeller</title>
          <meta name="description" content={`You are a ${result.name} (${result.code}). Discover your spirit animal, and learn more about your personality type.`} />
        </Helmet>
        
        {/* Gamification Notifications */}
        {xpGained > 0 && (
          <div className="gamification-notification">
            <div className="notification-content">
              <div className="xp-gained">
                <span className="xp-icon">⭐</span>
                <span className="xp-text">+{xpGained} XP Earned!</span>
              </div>
              {levelUp && (
                <div className="level-up">
                  <span className="level-icon">🎉</span>
                  <span className="level-text">Level Up!</span>
                </div>
              )}
              {newAchievements.length > 0 && (
                <div className="achievements">
                  <span className="achievement-icon">🏆</span>
                  <span className="achievement-text">
                    New Achievement{newAchievements.length > 1 ? 's' : ''}!
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="results-card">
          <div className="results-header">
            <div className="personality-emoji">{result.emoji}</div>
            <div className="personality-info">
              <h2>Your Personality Type</h2>
              <h1>{result.name}</h1>
              <p>{result.code}</p>
            </div>
          </div>
          
          <div className="spirit-animal">
            <h3>Your Spirit Animal</h3>
            <div className="spirit-animal-content">
              <div className="spirit-animal-image">
                <img src={getSpiritAnimalImage(result.spiritAnimal)} alt={result.spiritAnimal} />
              </div>
              <div className="spirit-animal-text">
                <h4>{result.spiritAnimal}</h4>
                <p>{result.spiritAnimalDescription}</p>
              </div>
            </div>
          </div>
          
          <div className="personality-description">
            <h3>About {result.name}</h3>
            <p>{result.description}</p>
          </div>
          
          <div className="strengths-weaknesses">
            <div className="strengths">
              <h3>Strengths</h3>
              <ul>
                {result.strengthsWeaknesses.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
            <div className="weaknesses">
              <h3>Weaknesses</h3>
              <ul>
                {result.strengthsWeaknesses.weaknesses.map((weakness, index) => (
                  <li key={index}>{weakness}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="what-energizes">
            <h3>What Energizes You</h3>
            <p>{result.whatEnergizesYou}</p>
          </div>
          
          <div className="what-drains">
            <h3>What Drains You</h3>
            <p>{result.whatDrainsYou}</p>
          </div>
          
          <div className="results-actions">
            <Link to="/test" className="btn btn-primary">Take Quiz Again</Link>
            <Link to="/detailed-results" state={{ result }} className="btn btn-secondary">View Detailed Analysis</Link>
            <button className="btn btn-share" onClick={handleShare}>
              📤 Share Results
            </button>
          </div>
        </div>
        
        {/* User Profile Summary */}
        {userProfile && (
          <div className="profile-summary">
            <h3>Your Progress</h3>
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-icon">⭐</span>
                <span className="stat-label">Level</span>
                <span className="stat-value">{userProfile.level}</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🔥</span>
                <span className="stat-label">Streak</span>
                <span className="stat-value">{userProfile.streak} days</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">📝</span>
                <span className="stat-label">Quizzes</span>
                <span className="stat-value">{userProfile.totalQuizzes}</span>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🏆</span>
                <span className="stat-label">Achievements</span>
                <span className="stat-value">{userProfile.achievements?.length || 0}</span>
              </div>
            </div>
            <div className="summary-actions">
              <Link to="/profile" className="btn btn-outline">View Full Profile</Link>
              <Link to="/leaderboard" className="btn btn-outline">View Leaderboard</Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Social Share Modal */}
      {showSocialShare && (
        <SocialShare
          result={result}
          userName={name}
          onClose={() => setShowSocialShare(false)}
        />
      )}
    </>
  );
};

export default ResultsPage; 