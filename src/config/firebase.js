import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSCsq8TkTBHFvYQNqDtpwpyNtk6STO4hY",
  authDomain: "fikrat-online.firebaseapp.com",
  projectId: "fikrat-online",
  storageBucket: "fikrat-online.appspot.com",
  messagingSenderId: "333300534372",
  appId: "1:333300534372:web:e82f5bf200c0948e2d6371",
};

const app = initializeApp(firebaseConfig);
export const authorization = getAuth(app);
