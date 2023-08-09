import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "pokemon-ad001.firebaseapp.com",
  projectId: "pokemon-ad001",
  storageBucket: "pokemon-ad001.appspot.com",
  messagingSenderId: "195515272754",
  appId: "1:195515272754:web:983032339b1fafc6d0362b",
  measurementId: "G-ZW2J7MJV4B"
};

const FireBaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth(FireBaseApp);
export const FireBaseDB = getFirestore(FireBaseApp);

export const userRef = collection(FireBaseDB,"users");
export const pokemonListRef = collection(FireBaseDB,"pokemonList")