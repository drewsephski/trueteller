import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getLeaderboard } from '../firebase/config';
import { getLevelFromXP } from '../data/gamificationData';
import '../styles/Leaderboard.css';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('alltime');
  const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const data = await getLeaderboard(50);
        setLeaderboard(data);
        
        // Find current user (for demo purposes, using first user)
        if (data.length > 0) {
          setUserRank({
            name: data[0].name,
            xp: data[0].xp,
            level: getLevelFromXP(data[0].xp),
            rank: 1
          });
        }
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [timeRange]);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return `#${rank}`;
    }
  };

  const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return '#FFD700';
      case 2:
        return '#C0C0C0';
      case 3:
        return '#CD7F32';
      default:
        return '#666';
    }
  };

  const getProgressBarColor = (xp, rank) => {
    if (rank <= 3) {
      return 'linear-gradient(90deg, #FFD700 0%, #FFA500 100%)';
    } else if (rank <= 10) {
      return 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)';
    } else {
      return 'linear-gradient(90deg, #4CAF50 0%, #45a049 100%)';
    }
  };

  if (loading) {
    return (
      <div className="leaderboard-container container section">
        <div className="loading-spinner">Loading leaderboard...</div>
      </div>
    );
  }

  return (
    <div className="leaderboard-container container section">
      <Helmet>
        <title>Leaderboard | TrueYouTeller</title>
        <meta name="description" content="See the top performers and compete with friends on the TrueYouTeller leaderboard" />
      </Helmet>
      
      <div className="leaderboard-header">
        <h1 className="leaderboard-title">🏆 Leaderboard</h1>
        <div className="time-filters">
          <button 
            className={`filter-button ${timeRange === 'daily' ? 'active' : ''}`}
            onClick={() => setTimeRange('daily')}
          >
            Daily
          </button>
          <button 
            className={`filter-button ${timeRange === 'weekly' ? 'active' : ''}`}
            onClick={() => setTimeRange('weekly')}
          >
            Weekly
          </button>
          <button 
            className={`filter-button ${timeRange === 'alltime' ? 'active' : ''}`}
            onClick={() => setTimeRange('alltime')}
          >
            All Time
          </button>
        </div>
      </div>

      <div className="leaderboard-stats">
        <div className="stat-card">
          <div className="stat-number">{leaderboard.length}</div>
          <div className="stat-label">Active Players</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{leaderboard.length > 0 ? getLevelFromXP(leaderboard[0].xp) : 0}</div>
          <div className="stat-label">Highest Level</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{leaderboard.length > 0 ? leaderboard[0].xp.toLocaleString() : 0}</div>
          <div className="stat-label">Top XP</div>
        </div>
      </div>

      <div className="leaderboard-list">
        <div className="leaderboard-item header">
          <div className="rank-cell">Rank</div>
          <div className="player-cell">Player</div>
          <div className="level-cell">Level</div>
          <div className="xp-cell">XP</div>
          <div className="progress-cell">Progress</div>
          <div className="quizzes-cell">Quizzes</div>
          <div className="streak-cell">Streak</div>
        </div>

        {leaderboard.map((user, index) => {
          const rank = index + 1;
          const level = getLevelFromXP(user.xp);
          
          return (
            <div 
              key={user.id || index} 
              className={`leaderboard-item ${userRank?.name === user.name ? 'current-user' : ''}`}
            >
              <div className="rank-cell" style={{ color: getRankColor(rank) }}>
                {getRankIcon(rank)}
              </div>
              <div className="player-cell">
                <div className="player-avatar">
                  <span className="avatar-icon">👤</span>
                </div>
                <div className="player-info">
                  <div className="player-name">{user.name}</div>
                  {userRank?.name === user.name && (
                    <div className="current-user-badge">You</div>
                  )}
                </div>
              </div>
              <div className="level-cell">
                <span className="level-badge">Lvl {level}</span>
              </div>
              <div className="xp-cell">{user.xp.toLocaleString()}</div>
              <div className="progress-cell">
                <div className="xp-progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      background: getProgressBarColor(user.xp, rank),
                      width: `${Math.min((user.xp % 100), 100)}%`
                    }}
                  ></div>
                </div>
              </div>
              <div className="quizzes-cell">{user.totalQuizzes || 0}</div>
              <div className="streak-cell">
                <span className="streak-indicator">🔥 {user.streak || 0}</span>
              </div>
            </div>
          );
        })}
      </div>

      {userRank && (
        <div className="your-rank-section">
          <h3>Your Rank</h3>
          <div className="your-rank-card">
            <div className="rank-display" style={{ color: getRankColor(userRank.rank) }}>
              {getRankIcon(userRank.rank)}
            </div>
            <div className="rank-info">
              <div className="rank-position">#{userRank.rank}</div>
              <div className="rank-details">
                <span className="rank-name">{userRank.name}</span>
                <span className="rank-level">Level {userRank.level}</span>
              </div>
              <div className="rank-xp">{userRank.xp.toLocaleString()} XP</div>
            </div>
          </div>
        </div>
      )}

      <div className="leaderboard-footer">
        <div className="tips">
          <h4>💡 Tips to climb the leaderboard:</h4>
          <ul>
            <li>Complete quizzes daily to maintain your streak</li>
            <li>Discover new personality types for bonus XP</li>
            <li>Share your results to earn extra XP</li>
            <li>Achieve milestones and badges for rewards</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;