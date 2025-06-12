import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAovhHCYbfxRXD9xVhzg1iYGs0f1IdmLwk",
  authDomain: "chat-box-app-1e6c9.firebaseapp.com",
  projectId: "chat-box-app-1e6c9",
  storageBucket: "chat-box-app-1e6c9.firebasestorage.app",
  messagingSenderId: "860377113862",
  appId: "1:860377113862:web:f52f52e81451941ef26a87",
  measurementId: "G-B824W18PNG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);