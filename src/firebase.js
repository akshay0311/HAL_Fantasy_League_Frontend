import firebase from "firebase/app";
import "firebase/auth";

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
const app = firebase.initializeApp(firebaseConfig);


export const auth = app.auth();

export default app;