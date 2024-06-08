import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD2Bu89BzwysMwtfaSFhwTFu4DxS3J6Z1M",
  authDomain: "orderease-c67c4.firebaseapp.com",
  projectId: "orderease-c67c4",
  storageBucket: "orderease-c67c4.appspot.com",
  messagingSenderId: "1033188143996",
  appId: "1:1033188143996:web:19dd485ee0e5dbcb77eaf9",
  measurementId: "G-15RZMMZW5E"
};

const firebase = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const auth = getAuth(firebase);
const db = getDatabase();

export { db, firebase, auth };