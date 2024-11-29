import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseApp;
let auth;

const firebaseConfig = {
  apiKey: "AIzaSyAyY7AdkphWnUegos8moUqysnIY4I9DYuI",
  authDomain: "naito-f73f7.firebaseapp.com",
  projectId: "naito-f73f7",
  storageBucket: "naito-f73f7.appspot.com",
  messagingSenderId: "1034395199083",
  appId: "1:1034395199083:web:9e719de7d98578a321332e",
};

// Initialize Firebase

if (!firebaseApp) {
  firebaseApp = initializeApp(firebaseConfig);
}

if (!auth) {
  auth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}
export const db = getFirestore(firebaseApp);

export { auth };
 