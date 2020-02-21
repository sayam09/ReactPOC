import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBqm42X8QG_jjdOmA6KQ27ZtUYmiTqkOkk",
  authDomain: "marioplan-931c9.firebaseapp.com",
  databaseURL: "https://marioplan-931c9.firebaseio.com",
  projectId: "marioplan-931c9",
  storageBucket: "marioplan-931c9.appspot.com",
  messagingSenderId: "341008858023",
  appId: "1:341008858023:web:5c7a751e8cd620f5499482",
  measurementId: "G-Q64L2H53Q5"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();

export default firebase;
