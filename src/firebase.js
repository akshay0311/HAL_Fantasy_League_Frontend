
import "firebase/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzTUhwcxkwr63Cq5yfS0A5W1PQAZ4A-_U",
  authDomain: "halfantasyleague.firebaseapp.com",
  projectId: "halfantasyleague",
  storageBucket: "halfantasyleague.appspot.com",
  messagingSenderId: "961286692586",
  appId: "1:961286692586:web:46f65bfc0644bd4b3f8193",
  measurementId: "G-3LPQSPKVCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = app.auth();

export default app;