import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBUTgEV0qpCzVsuhwHjgRjlnPXcDZFg1V0",
    authDomain: "orderease-79f7c.firebaseapp.com",
    projectId: "orderease-79f7c",
    storageBucket: "orderease-79f7c.appspot.com",
    messagingSenderId: "236054951546",
    appId: "1:236054951546:web:9fddd68bd0b824aa402dc3"
  };

const firebase = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = getAuth(firebase);

export { firebase, auth };