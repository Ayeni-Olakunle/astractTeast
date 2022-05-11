// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAEFhgtldYjIqskEtD-ctllxfUng3U79A",
  authDomain: "astract-5ebd1.firebaseapp.com",
  projectId: "astract-5ebd1",
  storageBucket: "astract-5ebd1.appspot.com",
  messagingSenderId: "366050659718",
  appId: "1:366050659718:web:651c487303d450b67e7007",
  measurementId: "G-LWD1N4M0YW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
