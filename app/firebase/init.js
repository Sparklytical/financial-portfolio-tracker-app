/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'financial-portfolio-track.firebaseapp.com',
  databaseURL: 'https://financial-portfolio-track.firebaseio.com',
  projectId: 'financial-portfolio-track',
  storageBucket: 'financial-portfolio-track',
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_Id,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// export the firestore db
export default firebaseApp.firestore();
