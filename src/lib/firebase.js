import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpY1RQaQBwP0OxTs86WrdDSBL7IDbjbTw",
  authDomain: "sangamkart-bd233.firebaseapp.com",
  projectId: "sangamkart-bd233",
  storageBucket: "sangamkart-bd233.appspot.com",
  messagingSenderId: "496404322431",
  appId: "1:496404322431:web:9ae536c4b122847299074a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
