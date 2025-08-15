import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  orderBy,
  limit,
  getDoc,
  setDoc,
  arrayUnion,
  increment
} from 'firebase/firestore';

// Your Firebase configuration
// Using environment variables for better security
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to save test result to Firebase
export const saveTestResult = async (name, personalityType, answers) => {
  try {
    const docRef = await addDoc(collection(db, 'personalityTestResults'), {
      name: name,
      personalityType: personalityType.code,
      personalityName: personalityType.name,
      answers: answers,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString()
    });
    
    console.log('Test result saved with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving test result: ', error);
    throw error;
  }
};

// Function to save contact form data to Firebase
export const saveContactMessage = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'contactMessages'), {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString(),
      status: 'new' // to track if the message has been read/responded to
    });
    
    console.log('Contact message saved with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving contact message: ', error);
    throw error;
  }
};

// Function to save feedback form data to Firebase
export const saveFeedback = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'feedback'), {
      name: formData.name,
      email: formData.email,
      rating: parseInt(formData.rating),
      feedback: formData.feedback,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString(),
      status: 'new' // to track if the feedback has been reviewed
    });
    
    console.log('Feedback saved with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving feedback: ', error);
    throw error;
  }
};

// Function to get or create user profile
export const getOrCreateUserProfile = async (name) => {
  try {
    const usersRef = collection(db, 'userProfiles');
    const q = query(usersRef, where('name', '==', name));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      // User profile exists, return it
      const userData = querySnapshot.docs[0].data();
      return {
        id: querySnapshot.docs[0].id,
        ...userData
      };
    } else {
      // Create new user profile
      const newProfile = {
        name: name,
        level: 1,
        xp: 0,
        totalXP: 0,
        streak: 0,
        lastQuizDate: null,
        totalQuizzes: 0,
        achievements: [],
        personalityTypesDiscovered: [],
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      
      const docRef = await addDoc(usersRef, newProfile);
      return {
        id: docRef.id,
        ...newProfile
      };
    }
  } catch (error) {
    console.error('Error getting/creating user profile:', error);
    throw error;
  }
};

// Function to update user XP and calculate level
export const updateUserXP = async (name, xpToAdd) => {
  try {
    const usersRef = collection(db, 'userProfiles');
    const q = query(usersRef, where('name', '==', name));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      const currentXP = userData.totalXP || 0;
      const newXP = currentXP + xpToAdd;
      
      // Calculate level (every 100 XP = 1 level, starting from level 1)
      const newLevel = Math.floor(newXP / 100) + 1;
      
      await updateDoc(userDoc.ref, {
        totalXP: newXP,
        xp: increment(xpToAdd),
        level: newLevel,
        updatedAt: serverTimestamp()
      });
      
      return {
        level: newLevel,
        xpGained: xpToAdd,
        totalXP: newXP
      };
    }
  } catch (error) {
    console.error('Error updating user XP:', error);
    throw error;
  }
};

// Function to update user streak
export const updateUserStreak = async (name, currentDate) => {
  try {
    const usersRef = collection(db, 'userProfiles');
    const q = query(usersRef, where('name', '==', name));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      const lastQuizDate = userData.lastQuizDate ? new Date(userData.lastQuizDate.toDate()) : null;
      const currentStreak = userData.streak || 0;
      
      let newStreak = currentStreak;
      
      if (lastQuizDate) {
        const daysSinceLastQuiz = Math.floor((currentDate - lastQuizDate) / (1000 * 60 * 60 * 24));
        
        if (daysSinceLastQuiz === 1) {
          // Consecutive day, increment streak
          newStreak = currentStreak + 1;
        } else if (daysSinceLastQuiz > 1) {
          // Missed a day, reset streak
          newStreak = 1;
        }
        // If same day, no change to streak
      } else {
        // First quiz
        newStreak = 1;
      }
      
      await updateDoc(userDoc.ref, {
        streak: newStreak,
        lastQuizDate: serverTimestamp(),
        totalQuizzes: increment(1),
        updatedAt: serverTimestamp()
      });
      
      return newStreak;
    }
  } catch (error) {
    console.error('Error updating user streak:', error);
    throw error;
  }
};

// Function to add achievement to user
export const addAchievement = async (name, achievementId) => {
  try {
    const usersRef = collection(db, 'userProfiles');
    const q = query(usersRef, where('name', '==', name));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      
      await updateDoc(userDoc.ref, {
        achievements: arrayUnion(achievementId),
        updatedAt: serverTimestamp()
      });
    }
  } catch (error) {
    console.error('Error adding achievement:', error);
    throw error;
  }
};

// Function to add discovered personality type
export const addPersonalityTypeDiscovered = async (name, personalityType) => {
  try {
    const usersRef = collection(db, 'userProfiles');
    const q = query(usersRef, where('name', '==', name));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      
      await updateDoc(userDoc.ref, {
        personalityTypesDiscovered: arrayUnion(personalityType),
        updatedAt: serverTimestamp()
      });
    }
  } catch (error) {
    console.error('Error adding personality type discovered:', error);
    throw error;
  }
};

// Function to get leaderboard data
export const getLeaderboard = async (limitCount = 10) => {
  try {
    const usersRef = collection(db, 'userProfiles');
    const q = query(usersRef, orderBy('totalXP', 'desc'), limit(limitCount));
    const querySnapshot = await getDocs(q);
    
    const leaderboard = [];
    querySnapshot.forEach(doc => {
      leaderboard.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return leaderboard;
  } catch (error) {
    console.error('Error getting leaderboard:', error);
    throw error;
  }
};

// Function to get user profile by name
export const getUserProfile = async (name) => {
  try {
    const usersRef = collection(db, 'userProfiles');
    const q = query(usersRef, where('name', '==', name));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      return {
        id: userDoc.id,
        ...userDoc.data()
      };
    } else {
      // Return null if user profile doesn't exist
      return null;
    }
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};

export { db };