// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOn2RYevRZY3LO0grjSaX3-7QtuuyupTI",
  authDomain: "dragon-news09-react.firebaseapp.com",
  projectId: "dragon-news09-react",
  storageBucket: "dragon-news09-react.appspot.com",
  messagingSenderId: "188793437430",
  appId: "1:188793437430:web:322c4649c45cb96e6340d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;