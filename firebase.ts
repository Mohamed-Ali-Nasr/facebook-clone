import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTpTMeRkt1K1q8ccX5xtaWCjCo-S95lXI",
  authDomain: "facebook-clone-9a300.firebaseapp.com",
  projectId: "facebook-clone-9a300",
  storageBucket: "facebook-clone-9a300.appspot.com",
  messagingSenderId: "1095560813158",
  appId: "1:1095560813158:web:7cc411496f8e51cf9e6ba7",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
