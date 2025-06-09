export const quizData = {
  questions: [
    {
      id: 1,
      question: "It's your first day at a new school/job. How do you feel?",
      options: [
        { text: "Excited for new possibilities!", value: "Joy" },
        { text: "A bit overwhelmed and worried.", value: "Fear" },
        { text: "Annoyed by all the changes.", value: "Anger" },
        { text: "Just feeling a little blue.", value: "Sadness" },
        { text: "Slightly judgmental of everything.", value: "Disgust" },
      ],
    },
    {
      id: 2,
      question: "A friend shares some bad news. Your first instinct is to:",
      options: [
        { text: "Look for the silver lining and cheer them up.", value: "Joy" },
        { text: "Offer comfort and a listening ear.", value: "Sadness" },
        { text: "Demand to know who caused this problem.", value: "Anger" },
        { text: "Worry about all the potential negative outcomes.", value: "Fear" },
        { text: "Express disapproval of the situation.", value: "Disgust" },
      ],
    },
    {
      id: 3,
      question: "What kind of movie do you prefer for a night in?",
      options: [
        { text: "Uplifting comedy or adventure.", value: "Joy" },
        { text: "A thought-provoking drama.", value: "Sadness" },
        { text: "An intense action thriller.", value: "Anger" },
        {
          text: "Anything that's not too scary or unsettling.",
          value: "Fear",
        },
        {
          text: "A critically acclaimed film, nothing cheesy.",
          value: "Disgust",
        },
      ],
    },
    {
      id: 4,
      question: "Your plans suddenly change. How do you react?",
      options: [
        { text: "Embrace the spontaneity and find new fun.", value: "Joy" },
        { text: "Feel a pang of disappointment.", value: "Sadness" },
        { text: "Get frustrated and a little hot-headed.", value: "Anger" },
        { text: "Anxiety about the unknown sets in.", value: "Fear" },
        { text: "Roll your eyes at the inconvenience.", value: "Disgust" },
      ],
    },
    {
      id: 5,
      question: "What's your biggest pet peeve?",
      options: [
        { text: "Negativity that brings others down.", value: "Joy" },
        { text: "Feeling misunderstood or unheard.", value: "Sadness" },
        { text: "Injustice or unfairness.", value: "Anger" },
        { text: "Unnecessary risks or unsafe situations.", value: "Fear" },
        { text: "Bad taste or poor manners.", value: "Disgust" },
      ],
    },
    {
      id: 6,
      question: "How do you approach a new challenge?",
      options: [
        { text: "With optimistic determination.", value: "Joy" },
        {
          text: "Carefully, considering all possible setbacks.",
          value: "Sadness",
        },
        { text: "Aggressively, ready to tackle it head-on.", value: "Anger" },
        { text: "With a thorough risk assessment.", value: "Fear" },
        { text: "Only if it meets high standards.", value: "Disgust" },
      ],
    },
    {
      id: 7,
      question: "Someone says something rude to you. Your response?",
      options: [
        { text: "Try to brush it off and stay positive.", value: "Joy" },
        { text: "Feel hurt and maybe withdraw a bit.", value: "Sadness" },
        { text: "Immediately snap back with a sharp retort.", value: "Anger" },
        { text: "Become anxious about further conflict.", value: "Fear" },
        { text: "Give them a look of utter disdain.", value: "Disgust" },
      ],
    },
    {
      id: 8,
      question: "What's your go-to outfit?",
      options: [
        { text: "Something bright and cheerful.", value: "Joy" },
        { text: "Comfortable and cozy.", value: "Sadness" },
        { text: "Sharp and commanding.", value: "Anger" },
        { text: "Practical and safe.", value: "Fear" },
        { text: "Stylish and impeccable.", value: "Disgust" },
      ],
    },
    {
      id: 9,
      question: "You see a mistake happening. What do you do?",
      options: [
        { text: "Find a creative way to make it right.", value: "Joy" },
        {
          text: "Point it out gently, concerned for others.",
          value: "Sadness",
        },
        { text: "Confront it directly and fix it immediately.", value: "Anger" },
        { text: "Hesitate, worrying about making it worse.", value: "Fear" },
        { text: "Express disapproval of the error.", value: "Disgust" },
      ],
    },
    {
      id: 10,
      question: "What truly makes a memory 'core' for you?",
      options: [
        { text: "Its pure happiness and warmth.", value: "Joy" },
        { text: "Its profound emotional depth.", value: "Sadness" },
        { text: "Its impact on justice or fairness.", value: "Anger" },
        { text: "Its lesson in avoiding future danger.", value: "Fear" },
        { text: "Its sheer authenticity and truth.", value: "Disgust" },
      ],
    },
    {
      id: 11,
      question: "You have a big presentation tomorrow. What's on your mind?",
      options: [
        { text: "What if I mess up? What if they hate it? I need to practice 100 more times.", value: "Anxiety" },
        { text: "I'm so nervous something will go wrong with the projector.", value: "Fear" },
        { text: "I can't wait to share my ideas!", value: "Joy" },
        { text: "Ugh, do I have to?", value: "Ennui" }
      ]
    },
    {
      id: 12,
      question: "You see someone wearing an outfit you've been wanting. You think:",
      options: [
        { text: "I wish that was me. They look so good.", value: "Envy" },
        { text: "I would have styled it way better.", value: "Disgust" },
        { text: "They look amazing! Good for them!", value: "Joy" },
        { text: "I'll probably never be able to pull that off.", value: "Sadness" }
      ]
    },
    {
      id: 13,
      question: "You accidentally trip in a crowded hallway. What do you do?",
      options: [
        { text: "My life is over. I need to become invisible.", value: "Embarrassment" },
        { text: "Who put that floor there?!", value: "Anger" },
        { text: "Laugh it off and maybe do a little bow.", value: "Joy" },
        { text: "Oh no, is everyone staring at me?", value: "Fear" }
      ]
    },
    {
      id: 14,
      question: "The group is trying to decide what to do. Your input is:",
      options: [
        { text: "*shrug* Whatever.", value: "Ennui" },
        { text: "Let's make a pro/con list for every option.", value: "Anxiety" },
        { text: "Just pick something already! This is taking forever.", value: "Anger" },
        { text: "Let's do something super fun!", value: "Joy" }
      ]
    }
  ],
  results: {
    Joy: {
      character_name: "Joy",
      tagline: "Alright, let's make some core memories!",
      gif_url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmh0czcwcTd4OXpjMjJlZmg2Y2cwZ3dqajZjb2picjA3dnNqOHluMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ta2eHM043vhVS/giphy.gif",
      brief_character_synopsis:
        "Joy is the optimistic and energetic leader of Riley's emotions, always striving to keep Riley happy and positive. She's boundless enthusiasm and finds the good in every situation.",
      top_3_character_habits_you_share: [
        "Always looking for the bright side, even in tough situations.",
        "A boundless energy and enthusiasm that can sometimes overwhelm others.",
        "A tendency to try and fix negative emotions by focusing on the positive.",
      ],
      your_famous_episode_moment:
        "If you were in Inside Out, your most iconic moment would be enthusiastically leading an initiative in Headquarters, determined to turn a frown upside down, no matter the odds.",
      custom_share_card: {
        image_placeholder:
          "https://placehold.co/300x150/FFEA00/000000?text=I'm+the+Joy+of+my+mind!",
        phrase: "I'm the Joy of my mind!",
      },
      who_would_you_be_friends_with: [
        {
          friend_name: "Disgust",
          reason:
            "While seemingly opposite, Joy often uses Disgust's critical eye to help Riley avoid things that aren't good, showing a complementary dynamic.",
        },
        {
          friend_name: "Sadness",
          reason:
            "You'd eventually learn the profound importance of Sadness, realizing that true happiness can't exist without acknowledging all emotions.",
        },
      ],
    },
    Sadness: {
      character_name: "Sadness",
      tagline: "It's okay to feel sad.",
      gif_url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmFvNGozcWFpaDdzajAxcGhzMXV1eXJ3aGkxc3BkemJrZ2RwZ3IyNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nWSs8uXjqRvpu/giphy.gif",
      brief_character_synopsis:
        "Sadness is Riley's often misunderstood emotion, prone to melancholy but possessing a deep capacity for empathy and connection. She helps Riley process loss and allows others to offer comfort and support.",
      top_3_character_habits_you_share: [
        "A tendency to slow down and reflect on feelings.",
        "A deep capacity for empathy and comforting others.",
        "Sometimes feeling misunderstood or underestimated.",
      ],
      your_famous_episode_moment:
        "If you were in Inside Out, your most iconic moment would be helping a friend feel genuinely seen and understood, even if it means sitting with them in their sadness.",
      custom_share_card: {
        image_placeholder:
          "https://placehold.co/300x150/98C6F2/000000?text=I'm+the+Sadness+of+my+mind!",
        phrase: "I'm the Sadness of my mind!",
      },
      who_would_you_be_friends_with: [
        {
          friend_name: "Joy",
          reason:
            "You'd form an unexpected but profound bond, as Joy learns to appreciate your essential role in processing emotions for overall well-being.",
        },
        {
          friend_name: "Bing Bong",
          reason:
            "You'd connect deeply with anyone who needs comfort and reassurance, much like Sadness connects with Bing Bong.",
        },
      ],
    },
    Anger: {
      character_name: "Anger",
      tagline: "That's it! I'm taking this to the next level!",
      gif_url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWtnNjJwMGJpM3planZmZm1odHMybzIxNnVpNzd6d2RrNTd6MGRmdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UUUuU50X5lAYw/giphy.gif",
      brief_character_synopsis:
        "Anger is the hot-headed and passionate emotion, quick to react to injustice or frustration. He acts as Riley's protector, ensuring fairness and standing up for what's right, sometimes with explosive results.",
      top_3_character_habits_you_share: [
        "A tendency to react quickly and assertively to perceived wrongs.",
        "Being fueled by a desire for fairness and justice.",
        "Sometimes literally fuming when things don't go your way.",
      ],
      your_famous_episode_moment:
        "If you were in Inside Out, your most iconic moment would be dramatically erupting when something unfair happens, perhaps with flames shooting from your head, ready to fight for what's right.",
      custom_share_card: {
        image_placeholder:
          "https://placehold.co/300x150/FF0000/FFFFFF?text=I'm+the+Anger+of+my+mind!",
        phrase: "I'm the Anger of my mind!",
      },
      who_would_you_be_friends_with: [
        {
          friend_name: "Fear",
          reason:
            "While different, your assertiveness can sometimes provide a necessary push for Fear to overcome hesitation.",
        },
        {
          friend_name: "Disgust",
          reason:
            "You both have strong opinions and aren't afraid to express them, though your methods differ.",
        },
      ],
    },
    Fear: {
      character_name: "Fear",
      tagline: "We're going to DIE!",
      gif_url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWw3d2xnYzlveDhydG03bDJicXFud25meTkxOXRrcTVhOG0wZGhvdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qd4NxQ0OW6VNe/giphy.gif",
      brief_character_synopsis:
        "Fear is the highly anxious and cautious emotion, constantly assessing risks and trying to keep Riley safe from perceived dangers. He's a meticulous planner, though often to an excessive degree.",
      top_3_character_habits_you_share: [
        "Meticulously planning for every possible negative outcome.",
        "A tendency to worry excessively, even about minor things.",
        "Constantly assessing risks and potential dangers in new situations.",
      ],
      your_famous_episode_moment:
        "If you were in Inside Out, your most iconic moment would be presenting a highly detailed, multi-scenario risk assessment for a seemingly simple situation, complete with charts and backup plans.",
      custom_share_card: {
        image_placeholder:
          "https://placehold.co/300x150/9C27B0/FFFFFF?text=I'm+the+Fear+of+my+mind!",
        phrase: "I'm the Fear of my mind!",
      },
      who_would_you_be_friends_with: [
        {
          friend_name: "Joy",
          reason:
            "While your caution can frustrate Joy, your meticulousness can actually save the day, and Joy's optimism can help calm your nerves.",
        },
        {
          friend_name: "Sadness",
          reason:
            "You both can share a quieter, more reflective space, though for different reasons; Sadness might find your anxieties relatable.",
        },
      ],
    },
    Disgust: {
      character_name: "Disgust",
      tagline: "Ugh, fine. Whatever.",
      gif_url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTN0cWZ3cmpzcTVvampiYXF4eTFra3EzNW12aTY4d25zZTRuZXR0dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eLWJeULcoOYbS/giphy.gif",
      brief_character_synopsis:
        "Disgust is the sassy, opinionated, and highly judgmental emotion, protecting Riley from anything she deems gross, uncool, or morally questionable. She has impeccable taste and strong standards.",
      top_3_character_habits_you_share: [
        "A strong aversion to anything gross, unappealing, or tacky.",
        "A quick, often sarcastic, judgment of situations or people.",
        "Maintaining high standards for yourself and your surroundings.",
      ],
      your_famous_episode_moment:
        "If you were in Inside Out, your most iconic moment would be giving a dramatic eye-roll or a scathing verbal assessment of something that truly offends your sensibilities.",
      custom_share_card: {
        image_placeholder:
          "https://placehold.co/300x150/00CC00/FFFFFF?text=I'm+the+Disgust+of+my+mind!",
        phrase: "I'm the Disgust of my mind!",
      },
      who_would_you_be_friends_with: [
        {
          friend_name: "Anger",
          reason:
            "You both share a fiery passion for your convictions and aren't afraid to voice your strong opinions.",
        },
        {
          friend_name: "Joy",
          reason:
            "Despite your differences, Joy often relies on your keen discernment to navigate social situations and keep things positive.",
        },
      ],
    },
    Anxiety: {
      character_name: "Anxiety",
      tagline: "I'm gonna need to see your credentials.",
      gif_url: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnJkdWZicmpwd3RiaHE3N2ttdHNzY3ZzdDY0NTRuajl4Ymd6bm1yNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cYblQbWbVCtdMVH7tZ/giphy.gif",
      brief_character_synopsis: "Anxiety is a highly energetic and detail-oriented emotion, constantly planning for potential problems and striving for future safety. They are driven by a need to prepare for every possible scenario.",
      top_3_character_habits_you_share: [
        "Compulsively creating lists and contingency plans.",
        "A fast-paced, often fidgety, energy driven by future concerns.",
        "Constantly replaying scenarios to identify potential issues."
      ],
      your_famous_episode_moment: "If you were in Inside Out, your most iconic moment would be presenting a meticulously detailed, color-coded plan for a simple outing, accounting for every conceivable variable.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/FF7F50/000000?text=I'm+the+Anxiety+of+my+mind!",
        phrase: "I'm the Anxiety of my mind!"
      },
      who_would_you_be_friends_with: [
        {
          friend_name: "Fear",
          reason: "You both understand the importance of caution and planning, often sharing similar worries and preparedness strategies."
        },
        {
          friend_name: "Anger",
          reason: "While Anger's directness might contrast with your caution, you both share a drive to tackle problems, albeit from different angles."
        }
      ]
    },
    Ennui: {
      character_name: "Ennui",
      tagline: "Whatever.",
      gif_url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDNuZTJmZjU1YnZqamRyMXpueWhwcHU3Mmh1MHhrMTNmNnFzbWd6MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bAyPHKg4KMVW5qz32n/giphy.gif",
      brief_character_synopsis: "Ennui is characterized by a profound sense of boredom, apathy, and disinterest. They view most situations with a detached, unimpressed attitude, often using a phone as a barrier to engagement.",
      top_3_character_habits_you_share: [
        "A constant need to be entertained, yet rarely impressed.",
        "A detached, almost indifferent, response to most situations.",
        "Often found distracted by a phone or other personal device."
      ],
      your_famous_episode_moment: "If you were in Inside Out, your most iconic moment would be lounging on a sofa, scrolling dismissively through a phone, while the other emotions are in a frantic state.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/808080/FFFFFF?text=I'm+the+Ennui+of+my+mind!",
        phrase: "I'm the Ennui of my mind!"
      },
      who_would_you_be_friends_with: [
        {
          friend_name: "Disgust",
          reason: "You both share a critical perspective on the world, though Disgust is more passionate and you are more detached."
        },
        {
          friend_name: "Sadness",
          reason: "Your quiet, often withdrawn demeanor might find a strange comfort in Sadness's melancholy, though you'd likely remain unimpressed."
        }
      ]
    },
    Embarrassment: {
      character_name: "Embarrassment",
      tagline: "Uh... oops?",
      gif_url: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXFocmdxa3FiemlyejJvemZoNzZyNjExMTVsZW4yeXgwb3Q5NXI2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nI1KDpXAN8MQxEKdIX/giphy.gif",
      brief_character_synopsis: "Embarrassment is a shy and self-conscious emotion who often retreats or hides when awkward social situations arise. They are highly attuned to social faux pas and personal blunders.",
      top_3_character_habits_you_share: [
        "A tendency to blush or hide when feeling awkward.",
        "Overthinking social interactions after they happen.",
        "A strong desire to avoid being the center of embarrassing attention."
      ],
      your_famous_episode_moment: "If you were in Inside Out, your most iconic moment would be shrinking into your hoodie and trying to disappear after a minor social blunder, wishing the ground would swallow you whole.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/FFC0CB/000000?text=I'm+the+Embarrassment+of+my+mind!",
        phrase: "I'm the Embarrassment of my mind!"
      },
      who_would_you_be_friends_with: [
        {
          friend_name: "Sadness",
          reason: "You both share a softer, more sensitive side and might find comfort in quiet, understanding companionship."
        },
        {
          friend_name: "Fear",
          reason: "You both have a heightened awareness of potential pitfalls, though Fear focuses on danger and you focus on social awkwardness."
        }
      ]
    },
    Envy: {
      character_name: "Envy",
      tagline: "I could do that, but better.",
      gif_url: "https://sketchok.com/images/articles/01-cartoons/101-pixar/10/16.jpg",
      brief_character_synopsis: "Envy is a sharp and observant emotion, constantly comparing oneself to others and striving for what they perceive as missing. They are often driven by a desire to have what others possess, whether it's talent, status, or possessions.",
      top_3_character_habits_you_share: [
        "Constantly comparing yourself to others' achievements.",
        "A keen eye for what others possess or accomplish.",
        "A quiet determination to acquire or surpass what you admire."
      ],
      your_famous_episode_moment: "If you were in Inside Out, your most iconic moment would be meticulously observing someone else's impressive feat, then immediately devising a plan to do it even better, possibly with a slightly green glow around you.",
      custom_share_card: {
        image_placeholder: "https://placehold.co/300x150/ADFF2F/000000?text=I'm+the+Envy+of+my+mind!",
        phrase: "I'm the Envy of my mind!"
      },
      who_would_you_be_friends_with: [
        {
          friend_name: "Disgust",
          reason: "You both share a critical and observant nature, often pointing out perceived flaws or areas for improvement, even if for different reasons."
        },
        {
          friend_name: "Anger",
          reason: "Your drive to obtain what others have can align with Anger's assertiveness, especially when dealing with perceived unfairness in who gets what."
        }
      ]
    }
  },
}; 