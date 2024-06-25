// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1caQKGWBoV4VDuPRtbYk9Q2FoV3yp0LI",
  authDomain: "pleasingstore-rect-ch.firebaseapp.com",
  projectId: "pleasingstore-rect-ch",
  storageBucket: "pleasingstore-rect-ch.appspot.com",
  messagingSenderId: "136557143951",
  appId: "1:136557143951:web:0c75e1838cd85fe0374dfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);