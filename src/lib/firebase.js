import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDgo9DTf632MG_4lcvSYayOLlhiIq4b4g",
  authDomain: "npclassroom-243a4.firebaseapp.com",
  projectId: "npclassroom-243a4",
  storageBucket: "npclassroom-243a4.appspot.com",
  messagingSenderId: "581476745528",
  appId: "1:581476745528:web:40280e2a7921f26f5c01cd",
  measurementId: "G-ZNDCJEFD9B"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
