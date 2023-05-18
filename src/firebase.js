// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQikBuRGVc47dFERE4ZuMQpgVhu3S-bDU",
  authDomain: "project-1788578518932579874.firebaseapp.com",
  projectId: "project-1788578518932579874",
  storageBucket: "project-1788578518932579874.appspot.com",
  messagingSenderId: "487666037281",
  appId: "1:487666037281:web:d9110d6de01acae48b2960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
