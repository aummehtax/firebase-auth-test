
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-0rQG2Z3_ZlRiuRMf1JOEUUPvCe5F9xY",
  authDomain: "auth-f6da5.firebaseapp.com",
  projectId: "auth-f6da5",
  storageBucket: "auth-f6da5.firebasestorage.app",
  messagingSenderId: "149585663360",
  appId: "1:149585663360:web:bb9dedefb4b9c53dac1d65"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 