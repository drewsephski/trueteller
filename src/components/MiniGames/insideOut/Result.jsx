import React from 'react';

const Result = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <div className="result-container">
      <h2 className="result-title">You are {result.character_name}!</h2>
      <p className="result-tagline">{result.tagline}</p>
      <img src={result.gif_url} alt={`${result.character_name} GIF`} className="result-gif" />

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
                <p className="friend-name">{friend.friend_name}</p>
                <p className="friend-reason">{friend.reason}</p>
            </div>
        ))}
      </div>

    </div>
  );
};

export default Result; 