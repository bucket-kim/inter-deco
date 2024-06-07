// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVEUIoZO8iApjAUAmLNrzt3vSGoPUV-Rc",
  authDomain: "d-log-post.firebaseapp.com",
  projectId: "d-log-post",
  storageBucket: "d-log-post.appspot.com",
  messagingSenderId: "1036701245787",
  appId: "1:1036701245787:web:14abf4e6944a5bdb41ba7e",
  measurementId: "G-YGT5158MF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
