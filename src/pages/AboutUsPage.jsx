import React from 'react';
import './AboutUsPage.css';
import TeamMemberCard from '../components/TeamMemberCard';

const teamMembers = [
  {
    name: 'Alex Doe',
    role: 'Lead Developer',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
    githubUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jane Smith',
    role: 'UX/UI Designer',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300',
    githubUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Sam Wilson',
    role: 'Project Manager',
    imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=300',
    githubUrl: '#',
    linkedinUrl: '#',
  },
];

const AboutUsPage = () => {
  return (
    <div className="about-us-container container section">
      <div className="about-us-content">
        <h2>About TrueYouTeller</h2>
        <p>
          Welcome to TrueYouTeller, your magical guide to self-discovery! We believe that understanding your personality is the first step towards a more authentic and fulfilling life. Our fun and insightful personality test is designed to reveal the unique traits that make you, you.
        </p>
        <p>
          Our mission is to blend a little bit of magic with psychology to create an enjoyable experience for everyone. We're not your typical, boring personality quiz. We've crafted each question to be engaging and thought-provoking, leading you on a journey to uncover your true self.
        </p>
        <h3>Our Vision</h3>
        <p>
          We envision a world where everyone understands and embraces their individuality. We hope our little corner of the internet can bring a smile to your face and a little more clarity to your path. So go ahead, gaze into the crystal ball and see what it has to say about you!
        </p>
      </div>

      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members-container">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              githubUrl={member.githubUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage; 