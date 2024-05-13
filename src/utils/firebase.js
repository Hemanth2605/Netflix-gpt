// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmG9ovIDrAnFWwXUJtwK65vWZdS-lpNH4",
  authDomain: "netflixgpt-5aa36.firebaseapp.com",
  projectId: "netflixgpt-5aa36",
  storageBucket: "netflixgpt-5aa36.appspot.com",
  messagingSenderId: "647408653701",
  appId: "1:647408653701:web:b421cf3dc4ac2ba62b60ec",
  measurementId: "G-C5V8F14940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); 