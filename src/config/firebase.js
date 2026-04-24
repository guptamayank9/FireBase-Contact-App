// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoEbBg1M3HNWylbovu6mR99XBMoxfHbFU",
  authDomain: "vite-firebase-9b0f7.firebaseapp.com",
  projectId: "vite-firebase-9b0f7",
  storageBucket: "vite-firebase-9b0f7.firebasestorage.app",
  messagingSenderId: "905327219285",
  appId: "1:905327219285:web:024edbd8120f0880bdbadc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);