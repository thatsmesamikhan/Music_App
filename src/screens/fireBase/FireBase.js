import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWm_owaJFkyn_oLqmCx7QeZO4QYxc__JE",
  authDomain: "musica-c9f5e.firebaseapp.com",
  projectId: "musica-c9f5e",
  storageBucket: "musica-c9f5e.firebasestorage.app",
  messagingSenderId: "71085906968",
  appId: "1:71085906968:web:316666eaaf821c2d32376d",
  measurementId: "G-CJV2JZK5DT"
};

const app = initializeApp(firebaseConfig);

// Initialize auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };
