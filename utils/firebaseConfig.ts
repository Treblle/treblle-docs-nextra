import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDmwu104akdX766yPuqpa1Z89ytX7klYqE",
  authDomain: "treblle-docs.firebaseapp.com",
  projectId: "treblle-docs",
  storageBucket: "treblle-docs.appspot.com",
  messagingSenderId: "1062194683787",
  appId: "1:1062194683787:web:260a77cf553b56ae0fd98e"
};


const firebase_app: any = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const database = getFirestore(firebase_app);