// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
// Optional: Realtime DB or Analytics if you need them
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCop9FnqrMS7zDmBruG1IH9S-EZhc6sexk",
  authDomain: "mangotango-mobile.firebaseapp.com",
  databaseURL: "https://mangotango-mobile-default-rtdb.firebaseio.com",
  projectId: "mangotango-mobile",
  storageBucket: "mangotango-mobile.firebasestorage.app",
  messagingSenderId: "85435573414",
  appId: "1:85435573414:web:37fb969be0df109a974067",
  measurementId: "G-E2TX3PEMFY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);   // Firestore
export const rtdb = getDatabase(app);  // Realtime Database (if you’ll use it)
export const auth = getAuth(app);      // Authentication
export const analytics = getAnalytics(app); // Optional
