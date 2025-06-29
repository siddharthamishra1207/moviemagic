// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5LhcV5oB_CCuNBJQ8G8M0iQI7k3whf-E",
  authDomain: "final-year-ed0c8.firebaseapp.com",
  projectId: "final-year-ed0c8",
  storageBucket: "final-year-ed0c8.appspot.com",
  messagingSenderId: "158984034920",
  appId: "1:158984034920:web:05232478403bb5bc8939dd",
  measurementId: "G-BGL83L7NLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

