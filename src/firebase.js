import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";


const firebaseConfig = {
  apiKey: "AIzaSyBK8GsQQO958vqPKW8yYP5ZMN16oVknBbc",
  authDomain: "flowboard-6d035.firebaseapp.com",
  projectId: "flowboard-6d035",
  storageBucket: "flowboard-6d035.appspot.com",
  messagingSenderId: "554352150127",
  appId: "1:554352150127:web:bdf28ab04f953f04b9ef9a"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9098");
  connectFirestoreEmulator(db, "localhost", 8082);
  connectFunctionsEmulator(fbFunctions, "localhost", 5002);
}
