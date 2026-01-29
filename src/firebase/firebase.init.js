// DANGER 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6CfuMOXH3dzNqg2ogk5Ihd2pzdDLz3T4",
  authDomain: "simple-dimple-auth-15163.firebaseapp.com",
  projectId: "simple-dimple-auth-15163",
  storageBucket: "simple-dimple-auth-15163.firebasestorage.app",
  messagingSenderId: "117806318229",
  appId: "1:117806318229:web:2d16504cedeef3af52119c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);