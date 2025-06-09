import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ name, role, imageUrl, githubUrl, linkedinUrl }) => {
  return (
    <div className="team-member-card">
      <div className="card-image-container">
        <img src={imageUrl} alt={name} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-role">{role}</p>
        <div className="card-socials">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard; 