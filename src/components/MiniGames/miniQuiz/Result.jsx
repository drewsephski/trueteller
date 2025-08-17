import React from 'react';

const Result = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <div className="result-container">
      <div className="result-header">
        <h2 className="result-title">You are {result.name}!</h2>
        <p className="result-personality-type">{result.personalityType}</p>
        <p className="result-description">{result.description}</p>
      </div>

      <div className="result-spirit-animal">
        <div className="spirit-animal-emoji">{result.emoji}</div>
        <div className="spirit-animal-info">
          <h3 className="spirit-animal-name">{result.name}</h3>
          <p className="spirit-animal-description">{result.spiritAnimal}</p>
        </div>
      </div>

      <div className="result-content">
        <h3 className="result-section-title">Brief Character Synopsis</h3>
        <p className="result-text">{result.brief_character_synopsis}</p>

        <h3 className="result-section-title">Top 3 "Character Habits" You Share</h3>
        <ul className="result-list">
          {result.top_3_character_habits_you_share.map((habit, index) => (
            <li key={index} className="result-list-item">{habit}</li>
          ))}
        </ul>

        <h3 className="result-section-title">Your Famous Episode Moment</h3>
        <p className="result-text">{result.your_famous_episode_moment}</p>

        <h3 className="result-section-title">Who Would You Be Friends With?</h3>
        <div className="friends-container">
          {result.who_would_you_be_friends_with.map((friend, index) => (
            <div key={index} className="friend-card">
                <div className="friend-personality-type">{friend.personality_type}</div>
                <p className="friend-reason">{friend.reason}</p>
            </div>
          ))}
        </div>

        <div className="share-card">
          <h3 className="share-title">Share Your Result</h3>
          <div className="share-card-content">
            <img 
              src={result.custom_share_card.image_placeholder} 
              alt={`Share card for ${result.name}`}
              className="share-card-image"
            />
            <p className="share-card-phrase">{result.custom_share_card.phrase}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;