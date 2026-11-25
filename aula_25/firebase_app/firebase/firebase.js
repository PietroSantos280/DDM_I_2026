import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLvlH4tGEg3U_8UPYk3AffKNgoGN6YqrM",
  authDomain: "auladdm-bba76.firebaseapp.com",
  projectId: "auladdm-bba76",
  storageBucket: "auladdm-bba76.firebasestorage.app",
  messagingSenderId: "76759125479",
  appId: "1:76759125479:web:ede4a178e3cfb289e24142"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);