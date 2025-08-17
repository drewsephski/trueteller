export const miniQuizData = {
  questions: [
    {
      id: 1,
      statement: "I prefer spending time with a small group of close friends rather than at large parties.",
      mapping: [{ axis: 'IE', direction: -1 }]
    },
    {
      id: 2,
      statement: "I trust facts and data more than my gut feelings when making decisions.",
      mapping: [{ axis: 'TF', direction: -1 }]
    },
    {
      id: 3,
      statement: "I enjoy exploring abstract ideas and theories about life and the universe.",
      mapping: [{ axis: 'SN', direction: 1 }]
    },
    {
      id: 4,
      statement: "I prefer to have a detailed plan rather than being spontaneous.",
      mapping: [{ axis: 'JP', direction: -1 }]
    },
    {
      id: 5,
      statement: "I often find myself energized by being around people and social situations.",
      mapping: [{ axis: 'IE', direction: 1 }]
    },
    {
      id: 6,
      statement: "I make decisions based on how they will affect people's feelings.",
      mapping: [{ axis: 'TF', direction: 1 }]
    },
    {
      id: 7,
      statement: "I focus on practical details rather than big-picture concepts.",
      mapping: [{ axis: 'SN', direction: -1 }]
    },
    {
      id: 8,
      statement: "I like to keep my options open rather than committing to one approach.",
      mapping: [{ axis: 'JP', direction: 1 }]
    },
    {
      id: 9,
      statement: "I prefer working independently rather than in teams.",
      mapping: [{ axis: 'IE', direction: -1 }]
    },
    {
      id: 10,
      statement: "I value logic and objective analysis over personal values.",
      mapping: [{ axis: 'TF', direction: -1 }]
    }
  ],
  results: {
    ISTJ: {
      personalityType: "ISTJ",
      name: "The Logistician",
      description: "Practical, fact-minded, reliable, organized, dutiful, traditional.",
      spiritAnimal: "Busy Beaver",
      emoji: "🦫",
      brief_character_synopsis: "You are a practical and responsible individual who values tradition and order. You are known for your reliability, attention to detail, and strong work ethic.",
      top_3_character_habits_you_share: [
        "Creating detailed plans and following them systematically.",
        "Being highly organized and keeping things in their proper place.",
        "Taking your commitments seriously and following through on them."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be creating a perfect system for organizing a chaotic situation, bringing order and efficiency where there was once confusion.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ISTJ+of+my+group!",
        phrase: "I'm the ISTJ of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "ISFJ",
          reason: "You both value reliability and tradition, creating a stable and supportive friendship built on mutual respect and shared values."
        },
        {
          personality_type: "INTJ",
          reason: "Your practical approach complements their strategic thinking, creating a balanced partnership where you handle the details while they focus on the big picture."
        }
      ]
    },
    ISFJ: {
      personalityType: "ISFJ",
      name: "The Defender",
      description: "Warm, responsible, dedicated, supportive, empathetic, service-oriented.",
      spiritAnimal: "Gentle Deer",
      emoji: "🦌",
      brief_character_synopsis: "You are a warm and caring individual who is deeply committed to helping others. You are known for your empathy, reliability, and quiet strength.",
      top_3_character_habits_you_share: [
        "Putting others' needs before your own without hesitation.",
        "Remembering important details about people's lives and preferences.",
        "Creating harmony and avoiding conflict whenever possible."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be quietly stepping in to help someone in need without seeking recognition or praise.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ISFJ+of+my+group!",
        phrase: "I'm the ISFJ of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "ISTJ",
          reason: "You both value reliability and tradition, creating a stable and supportive friendship built on mutual respect and shared values."
        },
        {
          personality_type: "ESFJ",
          reason: "Your shared focus on helping others creates an immediate bond, though you may need to help them be more mindful of their own needs."
        }
      ]
    },
    INFJ: {
      personalityType: "INFJ",
      name: "The Advocate",
      description: "Insightful, idealistic, creative, principled, seeks meaning and harmony.",
      spiritAnimal: "Wise Wolf",
      emoji: "🐺",
      brief_character_synopsis: "You are a thoughtful and idealistic individual who is driven by a desire to make the world a better place. You are known for your insight, creativity, and strong values.",
      top_3_character_habits_you_share: [
        "Spending time in quiet reflection to process your thoughts and feelings.",
        "Seeing patterns and connections that others might miss.",
        "Being deeply committed to your values and principles."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be having a profound insight that helps someone see a situation in a completely new light.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+INFJ+of+my+group!",
        phrase: "I'm the INFJ of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "INFP",
          reason: "You both share a deep inner world and idealistic nature, creating a meaningful connection based on mutual understanding and shared values."
        },
        {
          personality_type: "ENFJ",
          reason: "Your shared vision for a better world creates an immediate bond, though you may need to help them balance their idealism with practical considerations."
        }
      ]
    },
    INTJ: {
      personalityType: "INTJ",
      name: "The Architect",
      description: "Strategic, analytical, independent, visionary, logical, a master planner.",
      spiritAnimal: "Insightful Owl",
      emoji: "🦉",
      brief_character_synopsis: "You are a strategic and analytical individual who is driven by a desire to understand complex systems and improve them. You are known for your intelligence, independence, and vision.",
      top_3_character_habits_you_share: [
        "Developing long-term plans and strategies to achieve your goals.",
        "Questioning assumptions and seeking logical explanations.",
        "Preferring to work independently rather than in groups."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be devising an elegant solution to a complex problem that others thought was unsolvable.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+INTJ+of+my+group!",
        phrase: "I'm the INTJ of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "INTP",
          reason: "You both share a love for intellectual exploration and theoretical thinking, creating a stimulating friendship based on mutual curiosity."
        },
        {
          personality_type: "ENTJ",
          reason: "Your shared strategic thinking creates a powerful partnership, though you may need to help them consider the human element in their plans."
        }
      ]
    },
    ISTP: {
      personalityType: "ISTP",
      name: "The Virtuoso",
      description: "Practical, analytical, spontaneous, adaptable, hands-on, loves problem-solving.",
      spiritAnimal: "Curious Cat",
      emoji: "🐈",
      brief_character_synopsis: "You are a practical and adaptable individual who loves to understand how things work. You are known for your problem-solving skills, independence, and hands-on approach.",
      top_3_character_habits_you_share: [
        "Taking things apart to understand how they work.",
        "Being able to stay calm in crisis situations.",
        "Preferring to learn through direct experience rather than theory."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be skillfully fixing a complex mechanical problem with minimal tools and improvisation.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ISTP+of+my+group!",
        phrase: "I'm the ISTP of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "ISFP",
          reason: "You both value independence and authenticity, creating a friendship based on mutual respect for each other's unique approach to life."
        },
        {
          personality_type: "ESTP",
          reason: "Your shared love for adventure and hands-on experiences creates an exciting friendship, though you may need to help them think through the consequences of their actions."
        }
      ]
    },
    ISFP: {
      personalityType: "ISFP",
      name: "The Adventurer",
      description: "Artistic, sensitive, flexible, spontaneous, enjoys living in the moment.",
      spiritAnimal: "Fluttering Butterfly",
      emoji: "🦋",
      brief_character_synopsis: "You are a creative and sensitive individual who values authenticity and personal expression. You are known for your artistic nature, flexibility, and ability to live in the present moment.",
      top_3_character_habits_you_share: [
        "Expressing yourself through art, music, or other creative outlets.",
        "Being highly attuned to your senses and the environment around you.",
        "Preferring to go with the flow rather than making rigid plans."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be creating something beautiful and meaningful in a spontaneous, unplanned way.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ISFP+of+my+group!",
        phrase: "I'm the ISFP of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "ISTP",
          reason: "You both value independence and authenticity, creating a friendship based on mutual respect for each other's unique approach to life."
        },
        {
          personality_type: "ESFP",
          reason: "Your shared love for new experiences and creativity creates an exciting friendship, though you may need to help them be more mindful of others' feelings."
        }
      ]
    },
    INFP: {
      personalityType: "INFP",
      name: "The Mediator",
      description: "Idealistic, empathetic, imaginative, values harmony, seeks inner congruence.",
      spiritAnimal: "Peaceful Panda",
      emoji: "🐼",
      brief_character_synopsis: "You are a gentle and idealistic individual who is deeply committed to your values and inner harmony. You are known for your empathy, creativity, and desire to help others.",
      top_3_character_habits_you_share: [
        "Daydreaming and exploring imaginary worlds and possibilities.",
        "Being deeply affected by the suffering of others and wanting to help.",
        "Seeking authenticity and meaning in all aspects of life."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be offering unexpected kindness and understanding to someone in need, changing their perspective completely.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+INFP+of+my+group!",
        phrase: "I'm the INFP of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "INFJ",
          reason: "You both share a deep inner world and idealistic nature, creating a meaningful connection based on mutual understanding and shared values."
        },
        {
          personality_type: "ENFP",
          reason: "Your shared creativity and idealism creates an immediate bond, though you may need to help them focus their energy and follow through on their ideas."
        }
      ]
    },
    INTP: {
      personalityType: "INTP",
      name: "The Logician",
      description: "Logical, inventive, abstract, curious, independent, enjoys theoretical concepts.",
      spiritAnimal: "Clever Fox",
      emoji: "🦊",
      brief_character_synopsis: "You are a logical and inventive individual who is driven by curiosity and a desire to understand complex systems. You are known for your analytical mind, creativity, and independence.",
      top_3_character_habits_you_share: [
        "Getting lost in thought and exploring abstract ideas and theories.",
        "Questioning established beliefs and seeking logical explanations.",
        "Preferring to work independently and having the freedom to explore your own interests."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be having a sudden insight that connects seemingly unrelated concepts in a brilliant new way.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+INTP+of+my+group!",
        phrase: "I'm the INTP of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "INTJ",
          reason: "You both share a love for intellectual exploration and strategic thinking, creating a stimulating friendship based on mutual curiosity."
        },
        {
          personality_type: "ENTP",
          reason: "Your shared love for debate and intellectual exploration creates an exciting friendship, though you may need to help them focus on practical applications of their ideas."
        }
      ]
    },
    ESTP: {
      personalityType: "ESTP",
      name: "The Entrepreneur",
      description: "Energetic, spontaneous, action-oriented, bold, pragmatic, loves excitement.",
      spiritAnimal: "Swift Cheetah",
      emoji: "🐆",
      brief_character_synopsis: "You are an energetic and spontaneous individual who loves excitement and taking action. You are known for your boldness, practicality, and ability to think on your feet.",
      top_3_character_habits_you_share: [
        "Thriving in crisis situations and making quick decisions.",
        "Living in the moment and adapting to changing circumstances.",
        "Being highly skilled at reading people and situations."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be fearlessly taking charge of a chaotic situation and bringing it under control through quick thinking and action.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ESTP+of+my+group!",
        phrase: "I'm the ESTP of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "ISTP",
          reason: "You both share a love for hands-on problem-solving and independence, creating a friendship based on mutual respect for each other's practical skills."
        },
        {
          personality_type: "ESFP",
          reason: "Your shared love for excitement and new experiences creates an exciting friendship, though you may need to help them think through the consequences of their actions."
        }
      ]
    },
    ESFP: {
      personalityType: "ESFP",
      name: "The Entertainer",
      description: "Outgoing, spontaneous, enthusiastic, people-oriented, loves being the center of attention.",
      spiritAnimal: "Playful Otter",
      emoji: "🦦",
      brief_character_synopsis: "You are an outgoing and enthusiastic individual who loves being around people and making them happy. You are known for your spontaneity, charm, and ability to liven up any situation.",
      top_3_character_habits_you_share: [
        "Being the life of the party and making others feel comfortable.",
        "Living in the moment and going with the flow.",
        "Expressing yourself freely and authentically."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be spontaneously bringing joy and laughter to a group of people who were feeling down.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ESFP+of+my+group!",
        phrase: "I'm the ESFP of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "ISFP",
          reason: "You both value authenticity and creativity, creating a friendship based on mutual appreciation for each other's unique expression."
        },
        {
          personality_type: "ENFP",
          reason: "Your shared enthusiasm and love for people creates an immediate bond, though you may need to help them focus their energy and follow through on their ideas."
        }
      ]
    },
    ENFP: {
      personalityType: "ENFP",
      name: "The Campaigner",
      description: "Enthusiastic, creative, sociable, optimistic, free-spirited, inspiring.",
      spiritAnimal: "Joyful Dolphin",
      emoji: "🐬",
      brief_character_synopsis: "You are an enthusiastic and creative individual who is driven by a desire to inspire others and explore new possibilities. You are known for your optimism, sociability, and ability to see the best in people.",
      top_3_character_habits_you_share: [
        "Getting excited about new ideas and possibilities.",
        "Being highly attuned to the emotions and needs of others.",
        "Inspiring and motivating those around you with your enthusiasm."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be inspiring someone to overcome their fears and pursue their dreams with renewed confidence.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ENFP+of+my+group!",
        phrase: "I'm the ENFP of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "INFP",
          reason: "You both share a deep inner world and idealistic nature, creating a meaningful connection based on mutual understanding and shared values."
        },
        {
          personality_type: "ENTP",
          reason: "Your shared love for intellectual exploration and new ideas creates an exciting friendship, though you may need to help them focus on practical applications."
        }
      ]
    },
    ENTP: {
      personalityType: "ENTP",
      name: "The Debater",
      description: "Inventive, outspoken, clever, enjoys intellectual challenge, resourceful.",
      spiritAnimal: "Witty Raven",
      emoji: "🐦‍⬛",
      brief_character_synopsis: "You are an inventive and outspoken individual who loves intellectual challenges and debating ideas. You are known for your cleverness, resourcefulness, and ability to think outside the box.",
      top_3_character_habits_you_share: [
        "Enjoying intellectual debates and challenging established ideas.",
        "Being highly skilled at finding creative solutions to problems.",
        "Being quick-witted and able to think on your feet."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be skillfully debating a complex issue and presenting a novel perspective that changes everyone's thinking.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ENTP+of+my+group!",
        phrase: "I'm the ENTP of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "INTP",
          reason: "You both share a love for intellectual exploration and theoretical thinking, creating a stimulating friendship based on mutual curiosity."
        },
        {
          personality_type: "ENTJ",
          reason: "Your shared strategic thinking and love for debate creates a powerful partnership, though you may need to help them consider the human element in their plans."
        }
      ]
    },
    ESTJ: {
      personalityType: "ESTJ",
      name: "The Executive",
      description: "Organized, assertive, practical, traditional, takes charge, disciplined.",
      spiritAnimal: "Brave Lion",
      emoji: "🦁",
      brief_character_synopsis: "You are an organized and assertive individual who is driven by a desire to create order and efficiency. You are known for your leadership skills, practicality, and strong sense of duty.",
      top_3_character_habits_you_share: [
        "Taking charge of situations and organizing people and resources.",
        "Being highly disciplined and following rules and procedures.",
        "Being direct and straightforward in your communication."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be skillfully organizing a chaotic project and bringing it to successful completion through strong leadership.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ESTJ+of+my+group!",
        phrase: "I'm the ESTJ of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "ISTJ",
          reason: "You both value reliability and tradition, creating a stable and supportive friendship built on mutual respect and shared values."
        },
        {
          personality_type: "ENTJ",
          reason: "Your shared leadership abilities and strategic thinking create a powerful partnership, though you may need to help them be more open to new approaches."
        }
      ]
    },
    ESFJ: {
      personalityType: "ESFJ",
      name: "The Consul",
      description: "Warm, social, conscientious, supportive, values harmony, people-focused.",
      spiritAnimal: "Nurturing Elephant",
      emoji: "🐘",
      brief_character_synopsis: "You are a warm and social individual who is deeply committed to helping others and maintaining harmony. You are known for your empathy, conscientiousness, and ability to bring people together.",
      top_3_character_habits_you_share: [
        "Being highly attuned to the needs and feelings of others.",
        "Taking responsibility for organizing social events and activities.",
        "Working hard to maintain harmony and avoid conflict."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be skillfully mediating a conflict and bringing people together in harmony through your empathy and understanding.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ESFJ+of+my+group!",
        phrase: "I'm the ESFJ of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "ISFJ",
          reason: "You both value helping others and maintaining harmony, creating a supportive friendship built on mutual care and understanding."
        },
        {
          personality_type: "ENFJ",
          reason: "Your shared focus on helping others creates an immediate bond, though you may need to help them be more mindful of their own needs."
        }
      ]
    },
    ENFJ: {
      personalityType: "ENFJ",
      name: "The Protagonist",
      description: "Charismatic, inspiring, empathetic, natural leader, focuses on others' growth.",
      spiritAnimal: "Noble Horse",
      emoji: "🐎",
      brief_character_synopsis: "You are a charismatic and inspiring individual who is driven by a desire to help others grow and reach their potential. You are known for your empathy, leadership abilities, and ability to inspire others.",
      top_3_character_habits_you_share: [
        "Being highly attuned to the potential in others and helping them develop it.",
        "Inspiring and motivating those around you with your vision.",
        "Being highly skilled at bringing people together and creating harmony."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be inspiring someone to discover their true potential and pursue their dreams with renewed confidence.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ENFJ+of+my+group!",
        phrase: "I'm the ENFJ of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "INFJ",
          reason: "You both share a deep inner world and idealistic nature, creating a meaningful connection based on mutual understanding and shared values."
        },
        {
          personality_type: "ESFJ",
          reason: "Your shared focus on helping others creates an immediate bond, though you may need to help them be more mindful of their own needs."
        }
      ]
    },
    ENTJ: {
      personalityType: "ENTJ",
      name: "The Commander",
      description: "Bold, strategic, decisive, confident leader, future-oriented, efficient.",
      spiritAnimal: "Visionary Eagle",
      emoji: "🦅",
      brief_character_synopsis: "You are a bold and strategic individual who is driven by a desire to achieve ambitious goals and lead others to success. You are known for your confidence, decisiveness, and ability to see the big picture.",
      top_3_character_habits_you_share: [
        "Developing long-term strategies and plans to achieve your goals.",
        "Taking charge of situations and leading others effectively.",
        "Being highly efficient and focused on results."
      ],
      your_famous_episode_moment: "If you were in a personality story, your most iconic moment would be fearlessly leading a team to achieve what seemed like an impossible goal through strategic planning and decisive action.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/DDC1FF/000000?text=I'm+the+ENTJ+of+my+group!",
        phrase: "I'm the ENTJ of my group!"
      },
      who_would_you_be_friends_with: [
        {
          personality_type: "ENTP",
          reason: "You both share a love for intellectual exploration and strategic thinking, creating a stimulating friendship based on mutual curiosity."
        },
        {
          personality_type: "ESTJ",
          reason: "Your shared leadership abilities and strategic thinking create a powerful partnership, though you may need to help them be more open to new approaches."
        }
      ]
    }
  }
};