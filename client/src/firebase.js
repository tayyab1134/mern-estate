// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c8065.firebaseapp.com",
  projectId: "mern-estate-c8065",
  storageBucket: "mern-estate-c8065.firebasestorage.app",
  messagingSenderId: "535453133859",
  appId: "1:535453133859:web:c498b3e3c347c0e4179596",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
