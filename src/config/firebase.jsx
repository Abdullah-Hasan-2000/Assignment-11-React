// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnjz-6aisdgSGfyPdQiWeYhe1EB67HnnY",
  authDomain: "final-react-project-4cd7d.firebaseapp.com",
  projectId: "final-react-project-4cd7d",
  storageBucket: "final-react-project-4cd7d.firebasestorage.app",
  messagingSenderId: "620246839529",
  appId: "1:620246839529:web:617ba0be85f3120f470078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db};