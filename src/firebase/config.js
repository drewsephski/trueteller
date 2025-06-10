import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

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

export { db }; 