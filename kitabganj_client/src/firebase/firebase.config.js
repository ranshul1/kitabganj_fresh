// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl9F4svK3ZvVY4qqDJRO6au8wM6WqSSNI",
  authDomain: "kitabganj-4d7c4.firebaseapp.com",
  projectId: "kitabganj-4d7c4",
  storageBucket: "kitabganj-4d7c4.appspot.com",
  messagingSenderId: "493068011986",
  appId: "1:493068011986:web:b5acd32e450b703aa4a00b",
  measurementId: "G-N46D46LHFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;