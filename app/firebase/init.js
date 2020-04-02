/* eslint-disable */
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'pro-organizer-app.firebaseapp.com',
  databaseURL: 'https://pro-organizer-app.firebaseio.com',
  projectId: 'pro-organizer-app',
  storageBucket: 'pro-organizer-app.appspot.com',
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_Id,
  measurementId: process.env.measurementId,
};

const firebaseApp = firebase.initializeApp(config);

// export the firestore db
export default firebaseApp.firestore();
