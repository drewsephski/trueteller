import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useUser } from '@clerk/clerk-react';
import { getUserProfile, getLeaderboard } from '../firebase/config';
import { PERSONALITY_TYPES } from '../data/personalityTypes';
import {
  getLevelFromXP,
  getXPForNextLevel,
  getProgressToNextLevel,
  getRarityColor,
  BADGES,
  ACHIEVEMENTS
} from '../data/gamificationData';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const { user } = useUser();
  const [userProfile, setUserProfile] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [profile, leaderboardData] = await Promise.all([
          getUserProfile(user.id),
          getLeaderboard(10)
        ]);
        
        setUserProfile(profile);
        setLeaderboard(leaderboardData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  const getEarnedBadges = () => {
    if (!userProfile) return [];
    
    const earned = [];
    
    // Level badges
    if (userProfile.level >= 1) earned.push(BADGES.BEGINNER);
    if (userProfile.level >= 5) earned.push(BADGES.INTERMEDIATE);
    if (userProfile.level >= 10) earned.push(BADGES.ADVANCED);
    if (userProfile.level >= 20) earned.push(BADGES.EXPERT);
    
    // Quiz badges
    if (userProfile.totalQuizzes >= 1) earned.push(BADGES.QUIZ_TAKER);
    if (userProfile.totalQuizzes >= 10) earned.push(BADGES.DEDICATED);
    if (userProfile.totalQuizzes >= 25) earned.push(BADGES.SCHOLAR);
    
    // Streak badges
    if (userProfile.streak >= 3) earned.push(BADGES.CONSISTENT);
    if (userProfile.streak >= 7) earned.push(BADGES.DEVOTED);
    if (userProfile.streak >= 30) earned.push(BADGES.COMMITTED);
    
    // Discovery badges
    if (userProfile.personalityTypesDiscovered?.length >= 3) earned.push(BADGES.CURIOUS);
    if (userProfile.personalityTypesDiscovered?.length >= 8) earned.push(BADGES.KNOWLEDGEABLE);
    if (userProfile.personalityTypesDiscovered?.length >= 16) earned.push(BADGES.WISE);
    
    return earned;
  };

  const getEarnedAchievements = () => {
    if (!userProfile?.achievements) return [];
    return userProfile.achievements.map(achievementId => ACHIEVEMENTS[achievementId]).filter(Boolean);
  };

  const getRank = () => {
    return leaderboard.findIndex(user => user.name === user?.fullName || user.name === user?.email) + 1;
  };

  if (loading) {
    return (
      <div className="user-profile-container container section">
        <div className="loading-spinner">Loading your profile...</div>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="user-profile-container container section">
        <div className="profile-card">
          <h2>Profile Not Found</h2>
          <p>Unable to load your profile. Please try again.</p>
        </div>
      </div>
    );
  }

  const currentLevel = getLevelFromXP(userProfile.xp);
  const xpForNextLevel = getXPForNextLevel(currentLevel);
  const progressToNextLevel = getProgressToNextLevel(userProfile.xp, currentLevel);
  const earnedBadges = getEarnedBadges();
  const earnedAchievements = getEarnedAchievements();
  const userRank = getRank();

  return (
    <div className="user-profile-container container section">
      <Helmet>
        <title>Profile | TrueYouTeller</title>
        <meta name="description" content={`View your profile, achievements, and progress on TrueYouTeller`} />
      </Helmet>
      
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-icon">👤</div>
          <div className="level-badge">Lvl {currentLevel}</div>
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{userProfile.name || user?.fullName || user?.email}</h1>
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-label">XP:</span>
              <span className="stat-value">{userProfile.xp}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Quizzes:</span>
              <span className="stat-value">{userProfile.totalQuizzes || 0}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Streak:</span>
              <span className="stat-value">{userProfile.streak || 0} days</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Rank:</span>
              <span className="stat-value">#{userRank || 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="progress-section">
        <div className="xp-progress">
          <div className="progress-info">
            <span className="current-level">Level {currentLevel}</span>
            <span className="next-level">Level {currentLevel + 1}</span>
          </div>
          <div className="progress-bar-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progressToNextLevel}%` }}
            ></div>
          </div>
          <div className="xp-text">
            {userProfile.xp} / {xpForNextLevel} XP
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Overview
        </button>
        <button 
          className={`tab-button ${activeTab === 'badges' ? 'active' : ''}`}
          onClick={() => setActiveTab('badges')}
        >
          Badges ({earnedBadges.length})
        </button>
        <button 
          className={`tab-button ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          Achievements ({earnedAchievements.length})
        </button>
        <button 
          className={`tab-button ${activeTab === 'discoveries' ? 'active' : ''}`}
          onClick={() => setActiveTab('discoveries')}
        >
          Discoveries ({userProfile.personalityTypesDiscovered?.length || 0}/16)
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'profile' && (
          <div className="profile-overview">
            <div className="overview-cards">
              <div className="overview-card">
                <h3>Current Streak</h3>
                <div className="streak-display">
                  <span className="streak-number">{userProfile.streak || 0}</span>
                  <span className="streak-label">days</span>
                </div>
                <p className="streak-description">
                  {userProfile.streak >= 7 ? 'Amazing consistency!' : 
                   userProfile.streak >= 3 ? 'Keep it up!' : 
                   'Start your streak today!'}
                </p>
              </div>
              
              <div className="overview-card">
                <h3>Personality Types Discovered</h3>
                <div className="discovery-progress">
                  <div className="progress-circle">
                    <span className="progress-text">
                      {userProfile.personalityTypesDiscovered?.length || 0}/16
                    </span>
                  </div>
                </div>
                <p className="discovery-description">
                  {userProfile.personalityTypesDiscovered?.length >= 16 ? 
                   'You\'ve discovered all types!' : 
                   'Keep exploring to unlock more!'}
                </p>
              </div>
            </div>
            
            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon">🎯</span>
                  <span className="activity-text">Joined TrueYouTeller</span>
                  <span className="activity-time">Recently</span>
                </div>
                {userProfile.totalQuizzes > 0 && (
                  <div className="activity-item">
                    <span className="activity-icon">📝</span>
                    <span className="activity-text">Completed {userProfile.totalQuizzes} quiz{userProfile.totalQuizzes !== 1 ? 'zes' : ''}</span>
                    <span className="activity-time">Ongoing</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="badges-grid">
            {Object.values(BADGES).map(badge => {
              const isEarned = earnedBadges.some(earned => earned.id === badge.id);
              return (
                <div 
                  key={badge.id} 
                  className={`badge-item ${isEarned ? 'earned' : 'locked'}`}
                >
                  <div className="badge-icon" style={{ backgroundColor: isEarned ? badge.color : '#ccc' }}>
                    {badge.icon}
                  </div>
                  <div className="badge-info">
                    <h4 className="badge-name">{badge.name}</h4>
                    <p className="badge-description">{badge.description}</p>
                    <div className="badge-requirement">
                      {badge.requirement === 'level' && `Level ${badge.value}`}
                      {badge.requirement === 'quizzes' && `${badge.value} quizzes`}
                      {badge.requirement === 'streak' && `${badge.value} day streak`}
                      {badge.requirement === 'discoveries' && `${badge.value} discoveries`}
                    </div>
                  </div>
                  {!isEarned && (
                    <div className="badge-locked">🔒</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="achievements-list">
            {Object.values(ACHIEVEMENTS).map(achievement => {
              const isEarned = earnedAchievements.some(earned => earned.id === achievement.id);
              return (
                <div 
                  key={achievement.id} 
                  className={`achievement-item ${isEarned ? 'earned' : 'locked'}`}
                >
                  <div className="achievement-icon" style={{ color: getRarityColor(achievement.rarity) }}>
                    {achievement.icon}
                  </div>
                  <div className="achievement-info">
                    <h4 className="achievement-name">{achievement.name}</h4>
                    <p className="achievement-description">{achievement.description}</p>
                    <div className="achievement-rarity">
                      <span className="rarity-badge" style={{ backgroundColor: getRarityColor(achievement.rarity) }}>
                        {achievement.rarity}
                      </span>
                      {achievement.xpReward > 0 && (
                        <span className="xp-reward">+{achievement.xpReward} XP</span>
                      )}
                    </div>
                  </div>
                  {!isEarned && (
                    <div className="achievement-locked">🔒</div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'discoveries' && (
          <div className="discoveries-grid">
            {Object.values(PERSONALITY_TYPES).map(type => {
              const isDiscovered = userProfile.personalityTypesDiscovered?.includes(type.code);
              return (
                <div 
                  key={type.code} 
                  className={`discovery-item ${isDiscovered ? 'discovered' : 'locked'}`}
                >
                  <div className="discovery-icon">
                    {type.emoji}
                  </div>
                  <div className="discovery-info">
                    <h4 className="discovery-name">{type.name}</h4>
                    <p className="discovery-code">{type.code}</p>
                    <p className="discovery-spirit">{type.spiritAnimal}</p>
                  </div>
                  {!isDiscovered && (
                    <div className="discovery-locked">🔒</div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;