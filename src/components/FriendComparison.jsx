import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getLeaderboard } from '../firebase/config';
import { PERSONALITY_TYPES } from '../data/personalityTypes';
import '../styles/FriendComparison.css';

const FriendComparison = ({ currentUser, onClose }) => {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [comparisonData, setComparisonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        setLoading(true);
        // For demo purposes, we'll use the leaderboard as friends
        const leaderboard = await getLeaderboard(20);
        setFriends(leaderboard.filter(user => user.name !== currentUser?.name));
      } catch (error) {
        console.error('Error fetching friends:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, [currentUser?.name]);

  const handleFriendSelect = (friend) => {
    setSelectedFriend(friend);
    generateComparisonData(friend);
  };

  const generateComparisonData = (friend) => {
    // For demo purposes, we'll generate random comparison data
    // In a real app, this would come from the friend's actual results
    const userPersonality = currentUser?.personalityType || 'ENFP';
    const friendPersonality = friend?.personalityType || 'INTJ';
    
    const userTraits = PERSONALITY_TYPES[userPersonality];
    const friendTraits = PERSONALITY_TYPES[friendPersonality];
    
    const compatibility = calculateCompatibility(userPersonality, friendPersonality);
    const sharedStrengths = findSharedStrengths(userTraits, friendTraits);
    const differences = findDifferences(userTraits, friendTraits);
    
    setComparisonData({
      user: {
        personality: userPersonality,
        traits: userTraits,
        color: getUserColor(userPersonality)
      },
      friend: {
        personality: friendPersonality,
        traits: friendTraits,
        color: getUserColor(friendPersonality)
      },
      compatibility,
      sharedStrengths,
      differences
    });
  };

  const calculateCompatibility = (type1, type2) => {
    // Simple compatibility calculation based on MBTI theory
    const compatibilityMatrix = {
      'ENFP-INTJ': 85,
      'ENFP-ENFJ': 90,
      'INTJ-ENTP': 88,
      'ISFJ-ESFJ': 92,
      'ESTP-ESFP': 95,
      'INFJ-INFP': 87,
      'ENTJ-ESTJ': 83,
      'ISTJ-ISFJ': 89
    };
    
    const key1 = `${type1}-${type2}`;
    const key2 = `${type2}-${type1}`;
    
    return compatibilityMatrix[key1] || compatibilityMatrix[key2] || Math.floor(Math.random() * 40) + 60;
  };

  const getUserColor = (personalityType) => {
    const colors = {
      'ISTJ': '#8B4513',
      'ISFJ': '#228B22',
      'INFJ': '#4B0082',
      'INFP': '#9370DB',
      'INTJ': '#191970',
      'INTP': '#000080',
      'ISTP': '#2F4F4F',
      'ISFP': '#8B008B',
      'ESTP': '#FF4500',
      'ESFP': '#FF6347',
      'ENFP': '#FF1493',
      'ENTP': '#FF69B4',
      'ESTJ': '#DAA520',
      'ESFJ': '#FFD700',
      'ENFJ': '#FF8C00',
      'ENTJ': '#DC143C'
    };
    return colors[personalityType] || '#666';
  };

  const findSharedStrengths = (traits1, traits2) => {
    const allStrengths = [
      ...traits1.strengthsWeaknesses.strengths,
      ...traits2.strengthsWeaknesses.strengths
    ];
    
    const strengthCount = {};
    allStrengths.forEach(strength => {
      strengthCount[strength] = (strengthCount[strength] || 0) + 1;
    });
    
    return Object.entries(strengthCount)
      .filter(([_, count]) => count > 1)
      .map(([strength]) => strength)
      .slice(0, 3);
  };

  const findDifferences = (traits1, traits2) => {
    const differences = [];
    
    // Compare what energizes each person
    if (traits1.whatEnergizesYou !== traits2.whatEnergizesYou) {
      differences.push({
        type: 'energy',
        user: traits1.whatEnergizesYou,
        friend: traits2.whatEnergizesYou
      });
    }
    
    // Compare what drains each person
    if (traits1.whatDrainsYou !== traits2.whatDrainsYou) {
      differences.push({
        type: 'drains',
        user: traits1.whatDrainsYou,
        friend: traits2.whatDrainsYou
      });
    }
    
    return differences.slice(0, 2);
  };

  const getCompatibilityMessage = (score) => {
    if (score >= 90) return 'Amazing compatibility! You\'re practically soulmates! 💕';
    if (score >= 80) return 'Great compatibility! You complement each other well! 🌟';
    if (score >= 70) return 'Good compatibility! You have nice chemistry! 😊';
    if (score >= 60) return 'Decent compatibility! There\'s potential! 🤝';
    return 'Challenging compatibility! But opposites attract! 🔄';
  };

  const getCompatibilityColor = (score) => {
    if (score >= 90) return '#FF1493';
    if (score >= 80) return '#FF69B4';
    if (score >= 70) return '#FFB6C1';
    if (score >= 60) return '#FFA07A';
    return '#FF7F50';
  };

  if (loading) {
    return (
      <div className="friend-comparison-overlay">
        <div className="loading-spinner">Loading friends...</div>
      </div>
    );
  }

  return (
    <div className="friend-comparison-overlay">
      <div className="friend-comparison-modal">
        <div className="modal-header">
          <h2>Compare with Friends</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        
        <div className="comparison-content">
          <div className="friends-section">
            <h3>Choose a friend to compare:</h3>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search friends..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="friends-list">
              {friends
                .filter(friend => 
                  friend.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map(friend => (
                  <div
                    key={friend.id}
                    className={`friend-item ${selectedFriend?.id === friend.id ? 'selected' : ''}`}
                    onClick={() => handleFriendSelect(friend)}
                  >
                    <div className="friend-avatar">
                      <span className="avatar-icon">👤</span>
                    </div>
                    <div className="friend-info">
                      <div className="friend-name">{friend.name}</div>
                      <div className="friend-level">Level {friend.level || 1}</div>
                    </div>
                    <div className="friend-xp">{friend.xp || 0} XP</div>
                  </div>
                ))}
            </div>
          </div>
          
          {comparisonData && (
            <div className="comparison-result">
              <div className="compatibility-section">
                <h3>Compatibility Score</h3>
                <div className="compatibility-display">
                  <div 
                    className="compatibility-circle"
                    style={{ 
                      background: `conic-gradient(${getCompatibilityColor(comparisonData.compatibility)} 0deg, ${getCompatibilityColor(comparisonData.compatibility)} ${comparisonData.compatibility * 3.6}deg, #f0f0f0 ${comparisonData.compatibility * 3.6}deg)`
                    }}
                  >
                    <span className="compatibility-score">{comparisonData.compatibility}%</span>
                  </div>
                  <div className="compatibility-message">
                    {getCompatibilityMessage(comparisonData.compatibility)}
                  </div>
                </div>
              </div>
              
              <div className="personalities-comparison">
                <h3>Personality Types</h3>
                <div className="personalities-grid">
                  <div className="personality-card" style={{ borderLeft: `4px solid ${comparisonData.user.color}` }}>
                    <div className="personality-header">
                      <span className="personality-emoji">{comparisonData.user.traits.emoji}</span>
                      <div className="personality-info">
                        <h4>{comparisonData.user.traits.name}</h4>
                        <p>{comparisonData.user.personality}</p>
                      </div>
                    </div>
                    <div className="personality-spirit">
                      <span className="spirit-label">Spirit Animal:</span>
                      <span className="spirit-name">{comparisonData.user.traits.spiritAnimal}</span>
                    </div>
                  </div>
                  
                  <div className="vs-indicator">VS</div>
                  
                  <div className="personality-card" style={{ borderLeft: `4px solid ${comparisonData.friend.color}` }}>
                    <div className="personality-header">
                      <span className="personality-emoji">{comparisonData.friend.traits.emoji}</span>
                      <div className="personality-info">
                        <h4>{comparisonData.friend.traits.name}</h4>
                        <p>{comparisonData.friend.personality}</p>
                      </div>
                    </div>
                    <div className="personality-spirit">
                      <span className="spirit-label">Spirit Animal:</span>
                      <span className="spirit-name">{comparisonData.friend.traits.spiritAnimal}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {comparisonData.sharedStrengths.length > 0 && (
                <div className="shared-section">
                  <h3>Shared Strengths</h3>
                  <div className="shared-strengths">
                    {comparisonData.sharedStrengths.map((strength, index) => (
                      <div key={index} className="strength-item">
                        <span className="strength-icon">✨</span>
                        <span className="strength-text">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {comparisonData.differences.length > 0 && (
                <div className="differences-section">
                  <h3>Interesting Differences</h3>
                  <div className="differences-list">
                    {comparisonData.differences.map((difference, index) => (
                      <div key={index} className="difference-item">
                        <div className="difference-header">
                          <span className="difference-icon">🔄</span>
                          <span className="difference-title">{difference.type === 'energy' ? 'Energy Sources' : 'Energy Drains'}</span>
                        </div>
                        <div className="difference-content">
                          <div className="difference-person">
                            <span className="person-label">You:</span>
                            <span className="person-text">{difference.user}</span>
                          </div>
                          <div className="difference-arrow">→</div>
                          <div className="difference-person">
                            <span className="person-label">{selectedFriend?.name}:</span>
                            <span className="person-text">{difference.friend}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="action-buttons">
                <button 
                  className="action-button primary"
                  onClick={() => {
                    // Share comparison
                    const shareText = `Just compared my personality (${comparisonData.user.personality}) with ${selectedFriend?.name} (${comparisonData.friend.personality})! We're ${comparisonData.compatibility}% compatible. Take the quiz and find out your compatibility!`;
                    navigator.clipboard.writeText(shareText);
                  }}
                >
                  📋 Share Comparison
                </button>
                <button 
                  className="action-button secondary"
                  onClick={() => setSelectedFriend(null)}
                >
                  🔄 Choose Different Friend
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendComparison;