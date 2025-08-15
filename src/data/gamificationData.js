// Achievement definitions
export const ACHIEVEMENTS = {
  FIRST_QUIZ: {
    id: 'first_quiz',
    name: 'First Steps',
    description: 'Complete your first personality quiz',
    icon: '🎯',
    xpReward: 50,
    rarity: 'common'
  },
  QUIZ_MASTER: {
    id: 'quiz_master',
    name: 'Quiz Master',
    description: 'Complete 5 quizzes',
    icon: '🏆',
    xpReward: 100,
    rarity: 'rare'
  },
  EXPLORER: {
    id: 'explorer',
    name: 'Explorer',
    description: 'Discover 3 different personality types',
    icon: '🗺️',
    xpReward: 75,
    rarity: 'common'
  },
  COLLECTOR: {
    id: 'collector',
    name: 'Collector',
    description: 'Discover all 16 personality types',
    icon: '💎',
    xpReward: 500,
    rarity: 'legendary'
  },
  STREAK_3: {
    id: 'streak_3',
    name: 'On Fire',
    description: 'Complete quizzes for 3 days in a row',
    icon: '🔥',
    xpReward: 60,
    rarity: 'rare'
  },
  STREAK_7: {
    id: 'streak_7',
    name: 'Week Warrior',
    description: 'Complete quizzes for 7 days in a row',
    icon: '⚡',
    xpReward: 150,
    rarity: 'epic'
  },
  STREAK_30: {
    id: 'streak_30',
    name: 'Month Champion',
    description: 'Complete quizzes for 30 days in a row',
    icon: '👑',
    xpReward: 300,
    rarity: 'legendary'
  },
  LEVEL_5: {
    id: 'level_5',
    name: 'Rising Star',
    description: 'Reach level 5',
    icon: '⭐',
    xpReward: 0,
    rarity: 'common'
  },
  LEVEL_10: {
    id: 'level_10',
    name: 'Expert',
    description: 'Reach level 10',
    icon: '🌟',
    xpReward: 0,
    rarity: 'rare'
  },
  LEVEL_20: {
    id: 'level_20',
    name: 'Master',
    description: 'Reach level 20',
    icon: '💫',
    xpReward: 0,
    rarity: 'epic'
  },
  SOCIAL_BUTTERFLY: {
    id: 'social_butterfly',
    name: 'Social Butterfly',
    description: 'Share your results 5 times',
    icon: '🦋',
    xpReward: 80,
    rarity: 'common'
  },
  PERFECT_SCORE: {
    id: 'perfect_score',
    name: 'Perfect Match',
    description: 'Get a personality result that matches your friend',
    icon: '💝',
    xpReward: 120,
    rarity: 'rare'
  }
};

// Badge definitions
export const BADGES = {
  // Level-based badges
  BEGINNER: {
    id: 'beginner',
    name: 'Beginner',
    description: 'Just starting your journey',
    icon: '🌱',
    requirement: 'level',
    value: 1,
    color: '#4CAF50'
  },
  INTERMEDIATE: {
    id: 'intermediate',
    name: 'Intermediate',
    description: 'Making good progress',
    icon: '🌿',
    requirement: 'level',
    value: 5,
    color: '#2196F3'
  },
  ADVANCED: {
    id: 'advanced',
    name: 'Advanced',
    description: 'Well on your way',
    icon: '🌳',
    requirement: 'level',
    value: 10,
    color: '#FF9800'
  },
  EXPERT: {
    id: 'expert',
    name: 'Expert',
    description: 'True personality expert',
    icon: '🏅',
    requirement: 'level',
    value: 20,
    color: '#9C27B0'
  },
  
  // Quiz-based badges
  QUIZ_TAKER: {
    id: 'quiz_taker',
    name: 'Quiz Taker',
    description: 'Taken your first quiz',
    icon: '📝',
    requirement: 'quizzes',
    value: 1,
    color: '#607D8B'
  },
  DEDICATED: {
    id: 'dedicated',
    name: 'Dedicated',
    description: 'Taken 10 quizzes',
    icon: '📚',
    requirement: 'quizzes',
    value: 10,
    color: '#795548'
  },
  SCHOLAR: {
    id: 'scholar',
    name: 'Scholar',
    description: 'Taken 25 quizzes',
    icon: '🎓',
    requirement: 'quizzes',
    value: 25,
    color: '#3F51B5'
  },
  
  // Streak-based badges
  CONSISTENT: {
    id: 'consistent',
    name: 'Consistent',
    description: '3-day streak',
    icon: '🔥',
    requirement: 'streak',
    value: 3,
    color: '#F44336'
  },
  DEVOTED: {
    id: 'devoted',
    name: 'Devoted',
    description: '7-day streak',
    icon: '⚡',
    requirement: 'streak',
    value: 7,
    color: '#FF5722'
  },
  COMMITTED: {
    id: 'committed',
    name: 'Committed',
    description: '30-day streak',
    icon: '👑',
    requirement: 'streak',
    value: 30,
    color: '#FFD700'
  },
  
  // Discovery-based badges
  CURIOUS: {
    id: 'curious',
    name: 'Curious',
    description: 'Discovered 3 personality types',
    icon: '🔍',
    requirement: 'discoveries',
    value: 3,
    color: '#00BCD4'
  },
  KNOWLEDGEABLE: {
    id: 'knowledgeable',
    name: 'Knowledgeable',
    description: 'Discovered 8 personality types',
    icon: '🧠',
    requirement: 'discoveries',
    value: 8,
    color: '#3F51B5'
  },
  WISE: {
    id: 'wise',
    name: 'Wise',
    description: 'Discovered all 16 personality types',
    icon: '🦉',
    requirement: 'discoveries',
    value: 16,
    color: '#9C27B0'
  }
};

// Social sharing templates
export const SOCIAL_TEMPLATES = {
  DEFAULT: "I'm {personalityName} ({personalityCode}) - {spiritAnimal}! What's your personality type? Take the quiz at {url}",
  FUNNY: "Just discovered I'm a {spiritAnimal}! 🦉 Apparently I'm {personalityName} - who knew? Take the quiz and find out yours!",
  INSPIRATIONAL: "Understanding myself better every day! I'm {personalityName} ({personalityCode}) - {spiritAnimal}. Discover your true self too!",
  MYSTERIOUS: "The mystery unfolds... I'm {personalityName} ({personalityCode}). Can you guess my spirit animal? 🦊",
  PROUD: "Proud to be a {personalityName}! {spiritAnimal} for life! ✨ What personality type are you?",
  THOUGHTFUL: "Self-discovery journey continues... I'm {personalityName} ({personalityCode}) - {spiritAnimal}. Ready to learn more about yourself?"
};

// XP rewards for different actions
export const XP_REWARDS = {
  COMPLETING_QUIZ: 25,
  PERFECT_ANSWER: 5,
  DAILY_BONUS: 10,
  ACHIEVEMENT_UNLOCKED: (achievement) => ACHIEVEMENTS[achievement]?.xpReward || 0,
  LEVEL_UP: (newLevel) => newLevel * 50,
  DISCOVER_PERSONALITY_TYPE: 15,
  SHARE_RESULT: 5
};

// Level progression thresholds
export const LEVEL_THRESHOLDS = {
  1: 0,
  2: 100,
  3: 200,
  4: 350,
  5: 550,
  6: 800,
  7: 1100,
  8: 1450,
  9: 1850,
  10: 2300,
  11: 2800,
  12: 3350,
  13: 3950,
  14: 4600,
  15: 5300,
  16: 6050,
  17: 6850,
  18: 7700,
  19: 8600,
  20: 9550
};

// Helper functions
export const getLevelFromXP = (xp) => {
  let level = 1;
  for (const [levelNum, threshold] of Object.entries(LEVEL_THRESHOLDS)) {
    if (xp >= threshold) {
      level = parseInt(levelNum);
    } else {
      break;
    }
  }
  return level;
};

export const getXPForNextLevel = (currentLevel) => {
  return LEVEL_THRESHOLDS[currentLevel + 1] || LEVEL_THRESHOLDS[20] + (currentLevel - 20) * 1000;
};

export const getProgressToNextLevel = (currentXP, currentLevel) => {
  const currentThreshold = LEVEL_THRESHOLDS[currentLevel];
  const nextThreshold = getXPForNextLevel(currentLevel);
  const progress = ((currentXP - currentThreshold) / (nextThreshold - currentThreshold)) * 100;
  return Math.min(Math.max(progress, 0), 100);
};

export const getRarityColor = (rarity) => {
  const colors = {
    common: '#9E9E9E',
    rare: '#2196F3',
    epic: '#9C27B0',
    legendary: '#FFD700'
  };
  return colors[rarity] || colors.common;
};