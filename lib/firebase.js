import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";

const firebase = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
});

export default firebase;
