import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// import { getAuth } from 'firebase/compat/auth'


import "firebase/compat/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDqn52hLpJdEcO2QyRwMup40aANe_1IZog",
  authDomain: "nba-bros-news.firebaseapp.com",
  projectId: "nba-bros-news",
  storageBucket: "nba-bros-news.appspot.com",
  messagingSenderId: "152595581475",
  appId: "1:152595581475:web:7347db96fca2b5f5067f96",
  measurementId: "G-9RXYJPEYVS"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;


