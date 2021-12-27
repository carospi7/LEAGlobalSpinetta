import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYJ1UB1yB597zaaL0qQnjPYENxfIgKRX8",
    authDomain: "leaglobalcom.firebaseapp.com",
    projectId: "leaglobalcom",
    storageBucket: "leaglobalcom.appspot.com",
    messagingSenderId: "755547719957",
    appId: "1:755547719957:web:8b66235a60d6689400c11c"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);